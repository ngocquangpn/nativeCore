import config from "../config";
import extensionConfig from "../extension/config";

/**
 *
 */
export class Extension {

    generatedClasses = {};

    get(type, Class) {
        if(!config.EXTENSION_CONFIG.useExtension) {
            return Class;
        }

        if(!config.EXTENSION_CONFIG.usePlugin) {
            return Class;
        }

        type = type.toLowerCase();
        if (type !== "component") {
            return Class;
        }
        let className = Class.className;
        if (!className) {
            return Class;
        }

        if (this.generatedClasses[className]) {
            return this.generatedClasses[className];
        }

        if (!extensionConfig.plugin) {
            return Class;
        }

        const plugin = extensionConfig.plugin[type][className];

        if (!plugin) {
            return Class;
        }

        for (let method in plugin) {
            let configs = Object.keys(plugin[method]).map(name => plugin[method][name]).sort(
                (a, b) => b.sortOrder - a.sortOrder
            );
            let pluginMethod = Class.prototype[method] ?? Class[method];
            pluginMethod = configs.reduce((fn, config) => {
                return function (...args) {
                    let result;
                    if (config.hasOwnProperty('before')) {
                        let before = config.before.call(this, ...args);
                        if (before !== null && before !== undefined) {
                            if (args.length === 1 || !Array.isArray(before)) {
                                args = [before]
                            } else {
                                args = before
                            }
                        }
                    }
                    if (config.hasOwnProperty('around')) {
                        result = config.around.call(this, fn.bind(this), ...args);
                    } else {
                        result = fn.call(this, ...args);
                    }
                    if (config.hasOwnProperty('after')) {
                        result = config.after.call(this, result, ...args);
                    }
                    return result;
                }
            }, pluginMethod)
            if (!Class.prototype[method]) {
                Class[method] = pluginMethod;
            } else {
                Class.prototype[method] = pluginMethod;
            }
        }
        this.generatedClasses[className] = Class;
        return Class;
    }
}

let extension = new Extension();

export default extension;

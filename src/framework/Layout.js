import config from "../config";
import extensionConfig from "../extension/config";

let cacheLayout = {};

export default function layout(name, component) {
    if(!config.EXTENSION_CONFIG.useLayout) {
        return ;
    }

    if(!extensionConfig.layout) {
        return ;
    }
    //
    if(cacheLayout[name]) {
        return cacheLayout[name];
    }

    const layers = name.split('.');

    let newLayouts = null;

    let currentLayout = extensionConfig.layout;

    newLayouts = layers.reduce((currentLayout, layer) => {
        return currentLayout ? currentLayout[layer] : null;
    }, currentLayout)

    if(newLayouts) {
        newLayouts.sort((a, b) => (a.name < b.name) ? -1 : 1)
        cacheLayout[name] = newLayouts.map(newLayout => newLayout(component));
        return cacheLayout[name];
    }
}

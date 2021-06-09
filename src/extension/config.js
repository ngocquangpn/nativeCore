import {deepMerge} from '../utils';

function getConfig() {
    return deepMerge.all([
        {},
        {},
    ]);
}

let extensionConfig = getConfig();

export default extensionConfig;

export function updateConfig(newConfig) {
    extensionConfig = newConfig;
}

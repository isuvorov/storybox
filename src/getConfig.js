import deepmerge from 'deepmerge';
import defaultConfig from './defaultConfig';

export default newConfig => deepmerge(defaultConfig, newConfig, { arrayMerge: (d, s) => s });

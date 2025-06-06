export interface Config {
  autoRegisterWebComponents: boolean;
}

const defaultConfig: Config = {
  autoRegisterWebComponents: true,
};

let resolveConfig: (config: Config) => void;

const promise = new Promise<Config>(resolve => (resolveConfig = resolve));

export const setConfig = (config: Config = defaultConfig) => resolveConfig(config);

export const getConfig = () => promise;

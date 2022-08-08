const fs = require('fs');
const path = require('path');

export function getConfigPath(
	configName: string = 'kitereactkit.config.js',
	attempts: number = 5
): string | undefined {
	let tries = 0;

	while (tries < attempts) {
		const currentPath = '../'.repeat(tries);
		const configPath = path.resolve(currentPath + configName);

		if (fs.existsSync(configPath)) {
			return configPath;
		} else {
			tries++;
		}
	}
	return;
}

let defaultConfig: any = {
	app: 'vanilla'
};

const userConfigPath = getConfigPath();
const userConfig: any = userConfigPath ? require(userConfigPath) : null;

if (userConfig) {
	defaultConfig = { ...defaultConfig, ...userConfig };
}

export default defaultConfig;

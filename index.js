#!/usr/bin/env node

/**
 * UserBase
 * UserBase using a CLI application
 *
 * @author Boitu <https://github.com/Boity-Latakgomo>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const display = require("./display");

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);

	
	console.log(`Filter by ${flags.filterBy}`);
	let result = await display.getData(flags.filterBy);
	console.log(result);
})();

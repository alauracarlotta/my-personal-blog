import { logColor } from './log-color';

export const asyncDelay = async (milliseconds: number = 0, verbose = false) => {
	if (milliseconds <= 0) return;

	if (verbose) {
		logColor(`Delaying ${milliseconds}ms. `);
	}

	await new Promise((resolve) => setTimeout(resolve, milliseconds));
};

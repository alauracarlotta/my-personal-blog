import { styleText } from 'util';

export function logColor(...msg: (string | number)[]) {
	const messages = msg
		.map((message) => styleText(['bgGreen', 'whiteBright'], `${message}`))
		.join(' ');

	console.log(`%c${messages}`, 'background: green; font-weight: bolder');
}

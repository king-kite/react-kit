import { FontWeightType } from '../types';

export function getFontWeight(value?: FontWeightType): string {
	switch (value) {
		case 'hairline':
			return 'font-hairline';
		case 'thin':
			return 'font-thin';
		case 'extralight':
			return 'font-extralight';
		case 'light':
			return 'font-light';
		case 'normal':
			return 'font-normal';
		case 'medium':
			return 'font-medium';
		case 'semibold':
			return 'font-semibold';
		case 'bold':
			return 'font-bold';
		case 'extrabold':
			return 'font-extrabold';
		case 'black':
			return 'font-black';
		default:
			return 'font-normal';
	}
}

import { customAlphabet } from 'nanoid';

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const nano = (length = 16) => {
	return customAlphabet(alphabet, length)();
};

export const slugNanoId = () => nano(8);

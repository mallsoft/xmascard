import type { ParamMatcher } from '@sveltejs/kit';

const inBounds = /^[A-Za-z]{8}$/; // one 8 lenght nanoid

export const match = ((param: string): boolean => {
	return inBounds.test(param);
}) satisfies ParamMatcher;

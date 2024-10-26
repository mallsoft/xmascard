import type { ParamMatcher } from '@sveltejs/kit';

const inBounds = /^[A-Za-z]{8}_[A-Za-z]{8}$/;

type ValidParam = 'create' | `${string}_${string}`;

/**
 * The card edit key can be either card + edit keys or just "create"
 */
export const match = ((param: string): param is ValidParam => {
	return param === 'create' || inBounds.test(param);
}) satisfies ParamMatcher;

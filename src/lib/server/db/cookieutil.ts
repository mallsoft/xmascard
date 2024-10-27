import type { Cookies } from '@sveltejs/kit';

export const addToCookieStore = (
	cookieCtx: Cookies,
	title: string,
	viewKey: string,
	editKey: string
) => {
	console.assert(cookieCtx, 'no cookie context ??');
	if (!cookieCtx) return;

	const previous = cookieCtx.get('cards');
	const value = { title, key: `${viewKey}_${editKey}` };
	const cards = previous ? JSON.parse(previous) : [];
	cards.push(value);
	cookieCtx.set('cards', JSON.stringify(cards), { path: '/' });
};

type StoredCard = {
	title: string;
	key: string;
};

export const getCookieStore = (
	cookieCtx: Cookies
): StoredCard[] | undefined => {
	const res = cookieCtx.get('cards');
	if (!res) return;

	return JSON.parse(res);
};
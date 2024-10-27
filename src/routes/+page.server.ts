import {
	getCookieStore,
	removeFromCookieStore
} from '$lib/server/db/cookieutil';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const knownCards = getCookieStore(cookies);

	return {
		cards: knownCards
	};
};

export const actions: Actions = {
	forgetcard: async ({ request, cookies }) => {
		const fd = await request.formData();
		const key = fd.get('key') as string;

		removeFromCookieStore(cookies, key);
	}
};

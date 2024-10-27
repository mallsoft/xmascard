import { getCookieStore } from '$lib/server/db/cookieutil';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const knownCards = getCookieStore(cookies);

	return {
		cards: knownCards
	};
};

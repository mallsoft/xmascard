// import type { PageServerLoad } from './$types';

import { db } from '$lib/server/db/index';
import { cardTable } from '$lib/server/db/schema.js';
import { redirect } from '@sveltejs/kit';

// export const load: PageServerLoad = async () => {
// 	return {};
// };

export const actions = {
	createCard: async () => {
		console.log('yes');

		// const result = db.insert(cardTable).values({
		// 	cardTitle: 'title',
		// 	cardText: 'text'
		// });

		// console.log(result);

		// const cardId = 'asd';
		// const editId = 'asd';

		// return redirect(301, `${cardId}/${editId}`);
	}
};

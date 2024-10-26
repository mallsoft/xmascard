import { db } from '$lib/server/db';
import { cardTable } from '$lib/server/db/schema';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async ({ params: { cardEdit } }) => {
	const [viewKey, editKey] = cardEdit.split('_');

	if (viewKey === 'create') {
		return {
			title: '',
			message: '',
			key: ''
		};
	}

	const res = await db
		.select({
			title: cardTable.cardTitle,
			message: cardTable.cardText,
			key: cardTable.viewKey
		})
		.from(cardTable)
		.where(eq(cardTable.viewKey, viewKey))
		.limit(1);

	const card = res[0];

	return card;
};

export const actions: Actions = {
	createcard: async ({ request }) => {
		const data = await request.formData();

		const title: string = data.get('title') as string;
		const message: string = data.get('message') as string;

		if (!title) {
			fail(400, { message: 'why man?' });
		}

		const res = await db
			.insert(cardTable)
			.values({
				cardTitle: title,
				cardText: message
			})
			.returning({ view: cardTable.viewKey, edit: cardTable.editKey });

		console.log('created', res);

		const { view, edit } = res[0];

		redirect(301, `/${view}_${edit}`);
	}
};

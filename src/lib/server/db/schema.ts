import { slugNanoId } from './nano';
import { integer, jsonb, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const cardTable = pgTable('cards', {
	id: integer('id').generatedByDefaultAsIdentity().primaryKey(),
	viewKey: text('view_key')
		.notNull()
		.unique()
		.$defaultFn(() => slugNanoId()),
	editKey: text('edit_key')
		.notNull()
		.$defaultFn(() => slugNanoId()),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	cardTitle: text('card_title').notNull(),
	cardText: text('card_text'),
	cardMeta: jsonb('card_meta')
});

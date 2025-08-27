// import { eq } from 'drizzle-orm';
// import { drizzleDb } from '.';
// import { postsTable } from './schemas';

/* (async () => {
	const posts = await drizzleDb.select().from(postsTable);

	posts.forEach((post) => {
		console.log(post.title);
	});
})(); */

/* (async () => {
	await drizzleDb
		.update(postsTable)
		.set({
			title: 'Explorando o desconhecido',
			published: true,
		})
		.where(eq(postsTable.slug, 'explorando-o-desconhecido'));
})(); */

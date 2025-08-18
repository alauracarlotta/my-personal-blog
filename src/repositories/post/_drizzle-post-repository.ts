import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
//import { eq, desc, and, or, gt, gte, lt, lte, asc, sql } from 'drizzle-orm';
import { eq, desc, sql } from 'drizzle-orm';

export class DrizzlePostRepository implements PostRepository {
	// console.log('[[[1]]]', query);

	// eslint-disable-next-line
	// @ts-ignore
	async findAll(): Promise<PostModel[]> {}

	// eslint-disable-next-line
	// @ts-ignore
	async findById(): Promise<PostModel> {}

	// eslint-disable-next-line
	// @ts-ignore
	async findAllPublic(): Promise<PostModel[]> {
		// building
		/* const query = drizzleDb
			.select()
			.from(postsTable)
			.where(eq(postsTable.id, '569d81a2-c78e-4336-b746-e6ad2da2d66a'));
		console.log('[[[1]]]', query);
		console.log('[[[2]]]', query.toSQL().sql);
		console.log('[[[3]]]', query.toSQL().params); */
		const query = drizzleDb.select().from(postsTable);

		// query.where(eq(postsTable.id, '569d81a2-c78e-4336-b746-e6ad2da2d66a'));
		query.where(eq(postsTable.published, true));
		// query.orderBy(desc(postsTable.createdAt));
		query.orderBy(
			sql`CAST(replace(replace(${postsTable.coverImageUrl}, '/images/bryen_', ''), '.png', '') AS INTEGER)`,
		);

		console.log('[[[2]]]', query.toSQL().sql);
		console.log('[[[3]]]', query.toSQL().params);
		const result = await query;
		console.log('[[[4]]]', result);
	}

	async findAllNotPublic(): Promise<PostModel[]> {
		// forma direta
		const posts = await drizzleDb.query.posts.findMany({
			orderBy: desc(eq(postsTable.published, false)),
		});

		return posts;
	}

	//eslint-disable-next-line
	// @ts-ignore
	async findBySlugPublic(): Promise<PostModel> {}
}

(async () => {
	const repository = new DrizzlePostRepository();
	await repository.findAllNotPublic();
})();

import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';
import { postsTable } from '@/db/drizzle/schemas';
import { eq, sql } from 'drizzle-orm';
import { logColor } from '@/utils/log-color';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/libs/constants';

export class DrizzlePostRepository implements PostRepository {
	async findAll(): Promise<PostModel[]> {
		logColor('D findAll');
		await asyncDelay(SIMULATE_WAIT_IN_MS, true);

		const posts = await drizzleDb.query.posts.findMany({
			orderBy: (posts, { asc }) => asc(posts.createdAt),
		});

		return posts;
	}

	async findById(id: string): Promise<PostModel> {
		logColor('D findById');
		await asyncDelay(SIMULATE_WAIT_IN_MS, true);

		const post = await drizzleDb.query.posts.findFirst({
			where: (posts, { eq }) => eq(posts.id, id),
		});

		if (!post) throw new Error(`Post não encontrado: "${id}" não existe.`);

		return post;
	}

	async findAllPublic(): Promise<PostModel[]> {
		logColor('D findAllPublic');
		await asyncDelay(SIMULATE_WAIT_IN_MS, true);

		const posts = await drizzleDb.query.posts.findMany({
			orderBy: (posts, { asc }) => asc(posts.createdAt),
			where: (posts, { eq }) => eq(posts.published, true),
		});

		return posts;
	}

	async findAllNotPublic(): Promise<PostModel[]> {
		logColor('D findAllNotPublic');
		await asyncDelay(SIMULATE_WAIT_IN_MS, true);

		const query = drizzleDb.select().from(postsTable);
		query.where(eq(postsTable.published, false));
		query.orderBy(
			sql`CAST(replace(replace(${postsTable.coverImageUrl}, '/images/bryen_', ''), '.png', '') AS INTEGER)`,
		);
		const result = await query;

		return result;
	}

	async findBySlugPublic(slug: string): Promise<PostModel> {
		logColor('D findBySlugPublic');
		await asyncDelay(SIMULATE_WAIT_IN_MS, true);

		const post = await drizzleDb.query.posts.findFirst({
			where: (posts, { eq, and }) =>
				and(eq(posts.published, true), eq(posts.slug, slug)),
		});

		if (!post)
			throw new Error(
				`Post não encontrado: "${slug}" não existe na base de dados`,
			);

		return post;
	}
}

/* (async () => {
	const repository = new DrizzlePostRepository();
	const posts = await repository.findAllNotPublic();

	posts.forEach((post) => {
		console.log(post.title, post.published);
	});
	/* const post = await repository.findById(
		'48659ae6-6cd4-4509-9e24-863e7f9f1eff5',
	);

	console.log(post.title, post.author);
})(); */

import { postRepository } from '@/repositories/post';
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { cache } from 'react';

/* export const findAllPublicPostsCached = cache(async () => {
	return await postRepository.findAllPublic();
}); */

export const findAllPublicPostsCached = unstable_cache(
	cache(async () => {
		return await postRepository.findAllPublic();
	}),
	['posts'],
	{
		tags: ['posts'],
		revalidate: 10,
	},
);

export const findAllNotPublicPostsCached = cache(async () => {
	return await postRepository.findAllNotPublic();
});

export const findPostByIdCached = cache(async (id: string) => {
	return await postRepository.findById(id);
});

/* export const findPostBySlugCached = cache(async (slug: string) => {
	const post = await postRepository
		.findBySlugPublic(slug)
		.catch(() => undefined);

	if (!post) {
		notFound();
	}
	return post;
}); */

// immediatly envolveted function => função criada e executada ao mesmo tempo
export const findPostBySlugCached = (slug: string) =>
	unstable_cache(
		cache(async (slug: string) => {
			const post = await postRepository
				.findBySlugPublic(slug)
				.catch(() => undefined);

			if (!post) {
				notFound();
			}
			return post;
		}),
		['posts'],
		{
			tags: [`post-${slug}`],
		},
	)(slug);

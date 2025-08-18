import { postRepository } from '@/repositories/post';
import { notFound } from 'next/navigation';
import { cache } from 'react';

export const findAllPublicPostsCached = cache(async () => {
	return await postRepository.findAllPublic();
});

export const findAllNotPublicPostsCached = cache(async () => {
	return await postRepository.findAllNotPublic();
});

export const findPostByIdCached = cache(async (id: string) => {
	return await postRepository.findById(id);
});

export const findPostBySlugCached = cache(async (slug: string) => {
	const post = await postRepository
		.findBySlugPublic(slug)
		.catch(() => undefined);

	if (!post) {
		notFound();
	}
	return post;
});

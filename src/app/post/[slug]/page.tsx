import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import {
	findAllPublicPostsCached,
	findPostBySlugCached,
} from '@/libs/post/queries';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
	params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
	params,
}: PostSlugPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const post = await findPostBySlugCached(slug);
	return {
		title: post.title,
		description: post.excerpt,
	};
};

export const generateStaticParams = async () => {
	const posts = await findAllPublicPostsCached();
	const params = posts.map((post) => {
		return {
			slug: post.slug,
		};
	});
	console.log(params);

	return params;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
	const { slug } = await params;

	return (
		<>
			<Suspense fallback={<SpinLoader className='min-h-20 mb-10' />}>
				<SinglePost slug={slug} />
			</Suspense>
		</>
	);
}

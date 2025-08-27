import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import { findPublicPostBySlugCached } from '@/libs/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageProps = {
	params: Promise<{ slug: string }>;
};

export const dynamic = 'force-static';

export const generateMetadata = async ({
	params,
}: PostSlugPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const post = await findPublicPostBySlugCached(slug);
	return {
		title: post.title,
		description: post.excerpt,
	};
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

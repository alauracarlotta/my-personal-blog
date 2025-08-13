import { findPostBySlugCached } from '@/libs/post/queries';
import { Metadata } from 'next';

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
	};
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
	// ==== MODO 1 ====
	/* const { slug } = await params;
	let post;

	try {
		post = await findPostBySlugCached(slug);
		} catch {
			post = undefined;
			}

			if (!post) notFound(); */

	// ==== MODO 2 ====
	/* const { slug } = await params;
	const post = await findPostBySlugCached(slug).catch((e) => {
		console.log(e);
		return undefined;
	}); */

	// ==== MODO 3 ====
	/* fAZENDO O TRY/CATCH NA FUNÇÃO findPostBySlugCached */

	const { slug } = await params;
	const post = await findPostBySlugCached(slug);

	return (
		<>
			<h1>{post.title}</h1>
		</>
	);
}

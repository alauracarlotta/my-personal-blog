import { findPostBySlugCached } from '@/libs/post/queries';
import Image from 'next/image';
import { formatDatetime } from '@/utils/_format-datetime';

type SinglePostProps = {
	slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
	const post = await findPostBySlugCached(slug);

	return (
		<>
			{/* <CoverImage
				href={post.slug}
				src={post.coverImageUrl}
				alt={post.title}
				type='gridPost'
			/>
			<MainContent
				url={post.slug}
				date={post.createdAt}
				title={post.title}
				content={post.excerpt}
				typePost='postList'
				as='h1'
			/> */}
			<article>
				<header>
					<div>{formatDatetime(post.createdAt)}</div>
					<div>Materia by {post.author}</div>
					<Image
						src={post.coverImageUrl}
						alt={post.title}
						width={1200}
						height={720}
					/>
					<div>{post.title}</div>
				</header>

				<main>
					<div>{post.excerpt}</div>
					<p>{post.content}</p>
				</main>
			</article>
		</>
	);
};

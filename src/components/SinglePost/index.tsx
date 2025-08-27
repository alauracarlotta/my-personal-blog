import { findPublicPostBySlugCached } from '@/libs/post/queries/public';
import Image from 'next/image';
import { formatDatetime } from '@/utils/_format-datetime';
import { SafeMarkdown } from '../SafeMarkdown';

type SinglePostProps = {
	slug: string;
};

export const SinglePost = async ({ slug }: SinglePostProps) => {
	const post = await findPublicPostBySlugCached(slug);

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
			<article className='mb-12'>
				<header className='mb-6'>
					<Image
						className='rounded-2xl mb-2'
						src={post.coverImageUrl}
						alt={post.title}
						width={1200}
						height={720}
					/>
					<div className='flex italic gap-2 ml-2 mb-4 text-sm'>
						<span>{formatDatetime(post.createdAt)}</span>
						<span> | </span>
						<span>
							Materia by <span className='font-bold'>{post.author}</span>
						</span>
					</div>
					<div className='text-4xl/tight py-6 font-bold'>{post.title}</div>
				</header>

				<main>
					<SafeMarkdown markdown={post.content} />
				</main>
			</article>
		</>
	);
};

import { postRepository } from '@/repositories/post';
import { formatDate } from '@/utils/formatDate';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

export const PostsList = async () => {
	const posts = await postRepository.findAll();
	const postsCopy = [...posts];
	postsCopy.shift();

	return (
		<div>
			<section
				className={clsx(
					['grid', 'grid-cols-1', 'gap-5', 'mb-12'],
					['sm:grid-cols-2'],
					['md:grid-cols-3'],
				)}
			>
				{postsCopy.map((post) => {
					return (
						<div key={post.id}>
							<Link href='#'>
								<Image
									className='rounded-xl mb-4 sm:mb-3 md:mb-2'
									src={post.coverImageUrl}
									width={1200}
									height={720}
									alt={post.title}
								/>
							</Link>
							<div className='flex flex-col gap-5'>
								<time
									className='text-[14px] text-slate-600'
									dateTime={post.createdAt}
								>
									{formatDate(post.createdAt)}
								</time>
								<Link href='#'>
									<h2 className='text-2xl/tight font-bold'>{post.title}</h2>
								</Link>
								<div className='text-justify'>{post.excerpt}</div>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

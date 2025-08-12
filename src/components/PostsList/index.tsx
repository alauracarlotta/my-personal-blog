import { postRepository } from '@/repositories/post';
import { formatDate } from '@/utils/formatDate';
import { Heading } from '../Heading';
import { CoverImage } from '../CoverImage';
import clsx from 'clsx';

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
							<div className='group'>
								<CoverImage
									type='gridPost'
									href={'#'}
									src={post.coverImageUrl}
									alt={post.title}
								/>
							</div>

							<div className='flex flex-col gap-5'>
								<time
									className='text-[14px] text-slate-600'
									dateTime={post.createdAt}
								>
									{formatDate(post.createdAt)}
								</time>
								<Heading url='#' as='h2'>
									{post.title}
								</Heading>
								<div className='text-justify'>{post.excerpt}</div>
							</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

import { postRepository } from '@/repositories/post';
import clsx from 'clsx';
import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
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
					const datePost = parseISO(post.createdAt);
					const dateUTCFormatted = formatInTimeZone(
						datePost,
						'UTC',
						'dd/MM/yyyy HH:mm',
					);

					return (
						<div key={post.id}>
							<Link href='#'>
								<Image
									className='rounded-[8px] mb-5 sm:mb-4 md:mb-3'
									src={post.coverImageUrl}
									width={1200}
									height={720}
									alt={post.title}
								/>
							</Link>
							<div className='text-[14px] text-slate-600 pb-5'>
								{dateUTCFormatted}
							</div>
							<Link href='#'>
								<h2 className='text-2xl/tight font-bold pb-5'>{post.title}</h2>
							</Link>
							<div className='text-justify'>{post.excerpt}</div>
						</div>
					);
				})}
			</section>
		</div>
	);
};

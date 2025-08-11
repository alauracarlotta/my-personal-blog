import { postRepository } from '@/repositories/post';
import { formatDate } from '@/utils/formatDate';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export const SinglePost = async () => {
	const [idFirstPost] = await postRepository.findAll();
	const singlePost = await postRepository.findById(idFirstPost.id);

	return (
		<section
			className={clsx(
				['grid', 'grid-cols-1', 'gap-5', 'mb-12', 'group'],
				['sm:grid-cols-2 sm:justify-center'],
			)}
		>
			<Link className='w-full h-full overflow-hidden rounded-xl' href='#'>
				<Image
					className='w-full h-full object-cover object-center group-hover:scale-105 transition'
					src={singlePost.coverImageUrl}
					width={1200}
					height={720}
					alt={singlePost.title}
					priority
				/>
			</Link>

			<div className='flex flex-col gap-3 sm:justify-center sm:gap-5'>
				<time
					className='text-sm/tight text-slate-600'
					dateTime={singlePost.createdAt}
				>
					{formatDate(singlePost.createdAt)}
				</time>
				<Link href='#'>
					<h1 className='text-2xl/tight font-bold'>{singlePost.title}</h1>
				</Link>
				<div className='text-justify'>{singlePost.excerpt}</div>
			</div>
		</section>
	);
};

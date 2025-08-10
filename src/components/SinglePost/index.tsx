import { postRepository } from '@/repositories/post';
import { formatInTimeZone } from 'date-fns-tz';
import { parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export const SinglePost = async () => {
	const [idFirstPost] = await postRepository.findAll();
	const singlePost = await postRepository.findById(idFirstPost.id);

	const datePost = parseISO(singlePost.createdAt);
	const dateUTCFormatted = formatInTimeZone(
		datePost,
		'UTC',
		'dd/MM/yyyy HH:mm',
	);

	return (
		<section
			className={clsx(
				['grid', 'grid-cols-1', 'gap-5', 'mb-12'],
				['sm:grid-cols-2'],
			)}
		>
			<Link href='#'>
				<Image
					className='rounded-[8px]'
					src={singlePost.coverImageUrl}
					width={1200}
					height={720}
					alt={singlePost.title}
				/>
			</Link>
			<div>
				<div className='text-[14px] text-slate-600 pb-5'>
					{dateUTCFormatted}
				</div>
				<Link href='#'>
					<h2 className='text-2xl/tight font-bold pb-5'>{singlePost.title}</h2>
				</Link>
				<div className='text-justify'>{singlePost.excerpt}</div>
			</div>
		</section>
	);
};

import { findAllPostsAdmin } from '@/libs/post/queries/admin';
import { formatDatetime } from '@/utils/format-datetime';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
	title: 'Post Admin',
};

export default async function AdminPostNewPage() {
	const posts = await findAllPostsAdmin();

	return (
		<div>
			{posts.map((post) => {
				return (
					<div key={post.id} className='py-4'>
						<div className='text-3xl'>Título: {post.title}</div>
						<div>Slug: {post.slug}</div>
						<div>Data: {formatDatetime(post.createdAt)}</div>
					</div>
				);
			})}
		</div>
	);
}

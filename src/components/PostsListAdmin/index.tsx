import { findAllPostsAdmin } from '@/libs/post/queries/admin';
import clsx from 'clsx';
import Link from 'next/link';

export default async function PostsListAdmin() {
	const posts = await findAllPostsAdmin();

	return (
		<table className='border-4'>
			<thead className='border-2 bg-slate-600'>
				<tr>
					<th className='border-2'>Titulo</th>
					<th className='border-2'>Data</th>
					<th className='border-2'>Autor</th>
					<th className='border-2'>Deletar?</th>
				</tr>
			</thead>
			<tbody>
				{posts.map((post) => {
					return (
						<tr
							className={clsx(
								'border-2',
								!post.published && ['bg-slate-400', 'italic'],
							)}
							key={post.id}
						>
							<th className='p-2 border-2'>
								<div className='flex gap-2 items-center'>
									<Link href={`/admin/post/${post.id}`}>{post.title}</Link>
									{!post.published && (
										<span className='text-xs italic'>(Não publicado)</span>
									)}
								</div>
							</th>
							<th className='p-2 border-2'>{post.createdAt}</th>
							<th className='p-2 border-2'>{post.author}</th>
							<th className='p-2'>
								<div className='flex gap-3 items-center'>
									<button className={clsx('bg-green-600 p-0.5 rounded')}>
										Editar
									</button>
									<button className={clsx('bg-red-600 p-0.5 rounded')}>
										Deletar?
									</button>
								</div>
							</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

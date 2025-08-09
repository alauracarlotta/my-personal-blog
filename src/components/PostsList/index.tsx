import { postRepository } from '@/repositories/post';

export const PostsList = async () => {
	const posts = await postRepository.findAll();

	return (
		<div>
			{posts.map((post) => {
				return <div key={post.id}>{post.title}</div>;
			})}
		</div>
	);
};

import { JsonPostRepository } from "./json-post-repository";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new JsonPostRepository();

// postRepository.findAll().then((jsonContent) => console.log(jsonContent));

(async () => {
	/* const jsonContent = await postRepository.findAll();
	console.log(jsonContent); */

	/* const posts = await postRepository.findAll();
	console.log(posts); */

	/* const posts = await postRepository.findAll();
	posts.forEach((post, index) => {
		console.log(`Nº${index} = ${post.id}`);
	}); */

	const post = await postRepository.findById(
		"99f8add4-7684-4c16-a316-616271db199e"
	);
	console.log(post);
})();

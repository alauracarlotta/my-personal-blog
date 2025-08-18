import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDb } from '.';
import { postsTable } from './schemas';
// import { DrizzlePostRepository } from '@/repositories/post/drizzle-post-repository';

(async () => {
	const jsonPostRepository = new JsonPostRepository();
	const posts = await jsonPostRepository.findAll();
	try {
		// await drizzleDb.delete(postsTable) // NÃO FAÇA NUNCA DELETE SEM WHERE
		await drizzleDb.insert(postsTable).values(posts);
		console.log(`${posts.length} posts foram adicionados na base de dados.`);
	} catch (e) {
		console.log('Ocorreu um erro', e);
	}
})();

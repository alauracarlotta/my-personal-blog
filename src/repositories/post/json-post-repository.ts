// repository -> padrão de projeto
import { PostRepository } from './post-repository';
import { PostModel } from '@/models/post/post-model';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_PATH_FILE = resolve(ROOT_DIR, 'src', 'db', 'seed', 'posts.json');
const SIMULATE_WAIT_IN_MS = 5000;

export class JsonPostRepository implements PostRepository {
	private async simulateWait() {
		if (SIMULATE_WAIT_IN_MS <= 0) return;

		await new Promise((resolve) =>
			setTimeout(resolve, SIMULATE_WAIT_IN_MS)
		);
	}

	private async readFromDisc(): Promise<PostModel[]> {
		const jsonContent = await readFile(JSON_PATH_FILE, 'utf-8');
		const parsedJson = JSON.parse(jsonContent);
		const { posts } = parsedJson;
		return posts;
	}

	async findAll(): Promise<PostModel[]> {
		await this.simulateWait();
		const posts = await this.readFromDisc();
		return posts;
	}

	async findById(id: string): Promise<PostModel> {
		await this.simulateWait();
		const posts = await this.findAll();
		const singlePost = posts.find((post) => post.id === id);

		if (!singlePost) throw new Error('Post não encontrado ');
		return singlePost;
	}
}

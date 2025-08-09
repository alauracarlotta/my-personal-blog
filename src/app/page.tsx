import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {
	return (
		<div>
			<main>
				<Suspense fallback={<SpinLoader />}>
					<PostsList />
				</Suspense>
			</main>
		</div>
	);
}

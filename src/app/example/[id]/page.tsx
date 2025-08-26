import { formatHour } from '@/utils/format-datetime';
import { revalidatePath, revalidateTag } from 'next/cache';

revalidatePath('/example/1');
revalidateTag('example-1');

export const revalidate = 10;
export const dynamic = 'force-static';
/* export const generateStaticParams = async () => {
	return [];
}; */

// export const dynamicParams = true;

/* export const generateStaticParams = async () => {
	return [{ id: '1' }, { id: '2' }];
}; */

export default async function ExampleDynamicPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const hour = formatHour(Date.now());
	return (
		<>
			<main>
				<div>Estamos em example</div>
				<div>Veja só</div>
				<div>
					{hour} (ID: {id})
				</div>
			</main>
		</>
	);
}

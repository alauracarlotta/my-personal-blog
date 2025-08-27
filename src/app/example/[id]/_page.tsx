import { revalidateExampleActions } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/format-datetime';
// import { revalidatePath, revalidateTag } from 'next/cache';

// revalidatePath('/example/1');
// revalidateTag('example-1');

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
	// const response = await fetch('http://randomuser.me/api/?results=1', {
	// 	next: {
	// 		revalidate: 20,
	// 		tags: ['randomuser'],
	// 	},
	// });
	// const json = await response.json();
	// const name = json.results[0].name.first;
	// console.log(json.results[0].name.first);

	return (
		<>
			<main>
				<div>Estamos em example</div>
				<div>Veja só</div>
				<div>
					{hour} (ID: {id}){/* {hour} (ID: {id}) | <div>nome: {name}</div> */}
				</div>
				<form className='py-16' action={revalidateExampleActions}>
					<input type='hidden' name='path' defaultValue={`/example/${id}`} />
					<button
						className='bg-amber-500 p-10 border-amber-200 cursor-pointer'
						type='submit'
					>
						Revalidate
					</button>
				</form>
			</main>
		</>
	);
}

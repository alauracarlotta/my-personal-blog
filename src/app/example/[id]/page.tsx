import { revalidateExampleActions } from '@/actions/revalidate-example';
import { formatHour } from '@/utils/_format-datetime';
import clsx from 'clsx';

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
				<form className='py-16' action={revalidateExampleActions}>
					<input type='hidden' name='path' defaultValue={`/example/${id}`} />
					<button
						className={clsx([
							'bg-amber-500',
							'p-5',
							'border-amber-200',
							'cursor-pointer',
							'rounded',
						])}
						type='submit'
					>
						Revalidate
					</button>
				</form>
			</main>
		</>
	);
}

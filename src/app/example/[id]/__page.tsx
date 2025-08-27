// 'use cache'; => file level

import { revalidateExampleActions } from '@/actions/revalidate-example';
import { /* formatHour, */ formatHourCached } from '@/utils/_format-datetime';
import clsx from 'clsx';
// import { unstable_cacheLife as cacheLife } from 'next/cache';
// import { unstable_cacheTag as cacheTag } from 'next/cache';

// export const revalidate = 10;
// export const dynamic = 'force-static';

export default async function ExampleDynamicPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	// 'use cache';
	// cacheLife('seconds');
	// cacheTag('ExampleDynamicPage');

	const { id } = await params;
	// const hour = formatHour(Date.now());
	const hour = await formatHourCached();

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

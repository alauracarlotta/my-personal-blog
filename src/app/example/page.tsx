import { formatHour } from '@/utils/format-datetime';

export const dynamic = 'force-dynamic';

export default async function ExamplePage() {
	const hour = formatHour(Date.now());
	return (
		<>
			<main>
				<div>Estamos em example</div>
				<div>Veja só</div>
				<div>{hour}</div>
			</main>
		</>
	);
}

import { formatHour } from '@/utils/format-datetime';

export default async function ExampleDynamicPage() {
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

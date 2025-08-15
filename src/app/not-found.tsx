import ErrorMessage from '@/components/ErrorMessage';

export default function NotFoundPage() {
	return (
		<>
			<ErrorMessage
				errorTitle='Página não encontrada'
				errorTitleContent='404'
				errorContent='This page could not be found.'
			/>
		</>
	);
}

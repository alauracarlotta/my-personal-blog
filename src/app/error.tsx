'use client';
import ErrorMessage from '@/components/ErrorMessage';
import { useEffect } from 'react';

type RootErrorPageProps = {
	error: Error;
	reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
	useEffect(() => {
		console.log(error);
	}, [error]);
	return (
		<>
			<ErrorMessage
				errorTitle='Erro no slug'
				errorTitleContent='vish'
				errorContent={
					<button onClick={() => reset()}>
						Deu ruim! Clique para tentar novamente...
					</button>
				}
			/>
		</>
	);
}

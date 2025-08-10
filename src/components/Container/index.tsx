import clsx from 'clsx';
import React from 'react';

type ContainerProps = {
	children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
	return (
		<div
			className={clsx(
				'text-slate-900',
				'bg-slate-100',
				'min-h-screen',
				'dark:text-slate-100',
				'dark:bg-slate-900',
			)}
		>
			<main className={clsx('max-w-screen-lg', 'mx-auto')}>
				<div className='px-8'>{children}</div>
			</main>
		</div>
	);
};

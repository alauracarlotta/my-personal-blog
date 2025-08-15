import clsx from 'clsx';
import { ShieldAlertIcon } from 'lucide-react';
import React from 'react';

type ErrorMessageProps = {
	errorTitle: string;
	errorTitleContent: string;
	errorContent: React.ReactNode;
};

export default function ErrorMessage({
	errorTitle,
	errorTitleContent,
	errorContent,
}: ErrorMessageProps) {
	return (
		<>
			<title>{errorTitle}</title>
			<div
				className={clsx(
					'flex',
					'flex-col',
					'justify-center',
					'items-center',
					'text-center',
					'h-[calc((100vh)-(72px+48px))]',
					['sm:h-[calc((100vh)-(88px+48px))]'],
					['md:h-[calc((100vh)-(108px+48px))]'],
					['lg:h-[calc((100vh)-(128px+48px))]'],
					['xl:h-[calc((100vh)-(160px+48px))]'],
				)}
			>
				<div className='flex justify-center mb-6'>
					<ShieldAlertIcon className='w-[25vw] h-[25vh] max-w-[228px]' />
				</div>
				<div>
					<div className='text-3xl font-extrabold'>{errorTitleContent}</div>
					<div className='italic text-2xl'>{errorContent}</div>
				</div>
			</div>
		</>
	);
}

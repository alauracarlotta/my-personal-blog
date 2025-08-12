import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type HeadingProps = {
	children: React.ReactNode;
	url: string;
	as?: 'h1' | 'h2';
	className?: string;
};

export const Heading = ({
	children,
	url,
	as: Tag = 'h2',
	className,
}: HeadingProps) => {
	const commomClasses = 'font-bold';
	const headingClassesMap = {
		h1: 'text-3xl/tight',
		h2: 'text-[20px]/tight',
	};

	return (
		<Link href={url}>
			<Tag className={clsx(headingClassesMap[Tag], commomClasses)}>
				<div className={className}>
					<div className='group-hover:text-slate-600'>{children}</div>
				</div>
			</Tag>
		</Link>
	);
};

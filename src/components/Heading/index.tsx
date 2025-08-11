import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

type HeadingProps = {
	children: React.ReactNode;
	url: string;
	as?: 'h1' | 'h2';
};

export const Heading = ({ children, url, as: Tag = 'h2' }: HeadingProps) => {
	const commomClasses = 'font-bold';
	const headingClassesMap = {
		h1: 'text-3xl/tight',
		h2: 'text-[20px]/tight',
	};

	return (
		<Link href={url}>
			<Tag className={clsx(headingClassesMap[Tag], commomClasses)}>
				{children}
			</Tag>
		</Link>
	);
};

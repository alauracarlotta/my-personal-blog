import clsx from 'clsx';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className='text-slate-600 text-center pb-6'>
			<span className='group'>
				Copyright &copy; {new Date().getFullYear()} -{' '}
				<Link
					href={'/'}
					className={clsx(
						'group-hover:text-slate-400',
						'group-hover:font-bold',
						'transition-all',
					)}
				>
					My Blog
				</Link>
			</span>
		</div>
	);
};

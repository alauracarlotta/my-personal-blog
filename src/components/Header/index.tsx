import clsx from 'clsx';
import Link from 'next/link';

export const Header = () => {
	return (
		<header>
			<h1
				className={clsx(
					['text-4xl', 'font-extrabold', 'text-center', 'py-8'],
					['sm:text-5xl', 'sm:py-10'],
					['md:text-6xl', 'md:py-12'],
					['lg:text-7xl', 'lg:py-14'],
					['xl:text-8xl', 'xl:py-16'],
				)}
			>
				<Link href='#'>My Blog</Link>
			</h1>
		</header>
	);
};

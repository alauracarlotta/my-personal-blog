import clsx from 'clsx';
import Link from 'next/link';

export const Header = () => {
	return (
		<header>
			<h1
				className={clsx(
					['text-4xl', 'font-extrabold', 'text-center', 'pt-8'],
					['sm:text-5xl', 'sm:pt-10'],
					['md:text-6xl', 'md:pt-12'],
					['lg:text-7xl', 'lg:pt-14'],
					['xl:text-8xl', 'xl:pt-16'],
				)}
			>
				<Link href={'/'}>My Blog</Link>
			</h1>
		</header>
	);
};

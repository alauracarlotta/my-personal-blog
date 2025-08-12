import Image from 'next/image';
import Link from 'next/link';

type CoverImageProps = {
	type: 'mainPost' | 'gridPost';
	href: string;
	src: string;
	alt: string;
};

export const CoverImage = ({ type, href, src, alt }: CoverImageProps) => {
	const linkImageClassesMap = {
		mainPost: {
			link: 'w-full h-full overflow-hidden rounded-xl',
			image:
				'w-full h-full object-cover object-center group-hover:scale-105 transition',
		},
		gridPost: {
			link: '',
			image:
				'rounded-xl mb-4 sm:mb-3 md:mb-2 group-hover:brightness-75 transition',
		},
	};
	return (
		<>
			<Link className={linkImageClassesMap[type].link} href={href}>
				<Image
					className={linkImageClassesMap[type].image}
					src={src}
					width={1200}
					height={720}
					alt={alt}
					priority
				/>
			</Link>
		</>
	);
};

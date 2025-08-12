import { Heading } from '../Heading';
import { PostDate } from '../PostDate';
import { PostExcerpt } from '../PostExcerpt';

type MainContentProps = {
	typePost: 'postFeatured' | 'postList';
	date: string;
	url: string;
	as: 'h1' | 'h2';
	title: string;
	content: string;
};

export const MainContent = ({
	typePost,
	date,
	url,
	as,
	title,
	content,
}: MainContentProps) => {
	const contentClassesNameMap = {
		postFeatured: 'flex flex-col gap-3 sm:justify-center sm:gap-5',
		postList: 'flex flex-col gap-5',
	};
	return (
		<div className={contentClassesNameMap[typePost]}>
			<PostDate postDate={date} typePost={typePost} />
			<Heading className='group' url={url} as={as}>
				{title}
			</Heading>
			<PostExcerpt content={content} />
		</div>
	);
};

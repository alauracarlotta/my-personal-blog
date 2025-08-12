type PostExcerptProps = {
	content: string;
};

export const PostExcerpt = ({ content }: PostExcerptProps) => {
	return (
		<>
			<div className='text-justify'>{content}</div>
		</>
	);
};

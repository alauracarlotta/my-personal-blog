import clsx from 'clsx';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type SafeMarkdownProps = {
	markdown: string;
};

export const SafeMarkdown = ({ markdown }: SafeMarkdownProps) => {
	return (
		<div
			className={clsx(
				[
					'prose',
					'prose-slate',
					'prose-a:transition',
					'prose-a:no-underline',
					'prose-a:text-blue-500',
					'prose-a:hover:text-blue-700',
					'prose-a:hover:underline',
					'prose-img:mx-auto',
					'w-full',
					'max-w-none',
					'overflow-hidden',
				],
				['md:prose-lg'],
			)}
		>
			{/* <div className='my-component'> */}
			<ReactMarkdown
				rehypePlugins={[rehypeSanitize]}
				remarkPlugins={[remarkGfm]}
				components={{
					table: ({ node, ...props }) => {
						if (!node?.children) return '';

						return (
							<div className='overflow-x-auto'>
								<table className='w-full min-w-[600px]' {...props} />
							</div>
						);
					},
				}}
			>
				{markdown}
			</ReactMarkdown>
		</div>
	);
};

import { formatDatetime, formatRelativeDate } from '@/utils/format-datetime';

type PostDateProps = {
	postDate: string;
	typePost: 'postFeatured' | 'postList';
};
export const PostDate = ({ postDate, typePost }: PostDateProps) => {
	return (
		<time className='text-sm/tight text-slate-600' dateTime={postDate}>
			{typePost === 'postFeatured'
				? formatRelativeDate(postDate)
				: formatDatetime(postDate)}
		</time>
	);
};

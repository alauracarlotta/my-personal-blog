import { formatDate } from '@/utils/formatDate';

type PostDateProps = {
	postDate: string;
};
export const PostDate = ({ postDate }: PostDateProps) => {
	return (
		<time
			className='text-sm/tight text-slate-600'
			dateTime='{postFeatured.createdAt}'
		>
			{formatDate(postDate)}
		</time>
	);
};

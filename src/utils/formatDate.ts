import { parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

export const formatDate = (date: string) => {
	const datePost = parseISO(date);
	const dateUTCFormatted = formatInTimeZone(
		datePost,
		'UTC',
		'dd/MM/yyyy HH:mm',
	);
	return dateUTCFormatted;
};

import { formatDistanceToNow, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';

export const formatDatetime = (date: string): string => {
	const datePost = parseISO(date);
	const dateUTCFormatted = formatInTimeZone(
		datePost,
		'UTC',
		'dd/MM/yyyy HH:mm',
	);
	return dateUTCFormatted;
};

export const formatRelativeDate = (date: string): string => {
	const dateRelative = new Date(date);
	return formatDistanceToNow(dateRelative, {
		locale: ptBR,
		addSuffix: true,
	});
};

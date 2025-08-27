import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
// import { unstable_cacheLife as cacheLife } from 'next/cache';
import { unstable_cacheTag as cacheTag } from 'next/cache';

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

export const formatHour = (timestampMs: number): string => {
	const date = new Date(timestampMs);
	return format(date, 'HH:mm:ss', {
		locale: ptBR,
	});
};

export const formatHourCached = async () => {
	'use cache';
	// cacheLife('seconds');
	cacheTag('formatHourCached');
	return formatHour(Date.now());
};

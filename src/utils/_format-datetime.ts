import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
// import { unstable_cacheLife as cacheLife } from 'next/cache';
import { unstable_cacheTag as cacheTag } from 'next/cache';

export const formatDatetime = (rawDate: string): string => {
	const date = new Date(rawDate);
	return format(date, "dd/MM/yyyy 'às' HH:mm", {
		locale: ptBR,
	});
};

export const formatRelativeDate = (rawDate: string): string => {
	const date = new Date(rawDate);
	return formatDistanceToNow(date, {
		locale: ptBR,
		addSuffix: false,
	});
};

export const formatHour = (timestampMs: number): string => {
	const date = new Date(timestampMs);
	return format(date, 'HH:mm:ss', {
		locale: ptBR,
	});
};

export const formatHourCached = async () => {
	// 'use cache';
	// cacheLife('seconds');
	cacheTag('formatHourCached');
	return formatHour(Date.now());
};

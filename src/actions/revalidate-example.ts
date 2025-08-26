'use server';

import { revalidatePath } from 'next/cache';

export const revalidateExampleActions = async (formData: FormData) => {
	const path = (formData.get('path') as string) || '';
	console.log('Essa é a minha server action');
	console.log(path);

	revalidatePath(path);
};

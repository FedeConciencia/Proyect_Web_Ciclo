import dynamic from 'next/dynamic';

export const MaxContainer = dynamic(() => import('./MaxContainer/MaxContainer'));
export const Link = dynamic(() => import('./Link/Link'));
export const Text = dynamic(() => import('./Text/Text'));


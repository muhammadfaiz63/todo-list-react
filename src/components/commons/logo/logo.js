import clsx from 'clsx';
import Link from 'next/link';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function Logo({}) {
	return (
		<Link href='/'>
			<span className='text-white text-2xl font-bold'>To Do List App</span>
		</Link>
	);
}

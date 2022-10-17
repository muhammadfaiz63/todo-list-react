import Link from 'next/link';
import { Logo } from '../../commons';

function HeaderNavbar() {
	return (
		<header className='header h-[105px]'>
			<div className='flex flex-col justify-center items-start px--default py--default max-w-screen-xl mx-auto w-full h-full'>
				<Logo />
			</div>
		</header>
	);
}

export default HeaderNavbar;

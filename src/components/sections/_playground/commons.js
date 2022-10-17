import { BsLink45Deg } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import useAlert, { Alert } from '../../../hooks/use-alert';
import useModal, { Modal } from '../../../hooks/use-modal';
import { Button, Accordion, Carousel, HeadingLink, Breadcrumb } from '../../commons';

export default function Commons() {
	const modal1 = useModal();
	const modal2 = useModal();
	const alert1 = useAlert();

	const list_trending = [
		{
			no: '01',
			title: 'Fitur Xperience untuk Produk Rekreasi dan Gaya Hidup di Rilis',
			date: '19 February 2022',
		},
		{
			no: '02',
			title: 'Solv nama Logo Baru Gojek',
			date: '13 February 2022',
		},
		{
			no: '03',
			title: 'Dirjen Aplikasi Kominfo imbau Masyarakat hati-hati unduh...',
			date: '28 February 2022',
		},
		{
			no: '04',
			title: 'Smartphone Vivo akan ada fitur dual Wi-Fi',
			date: '21 February 2022',
		},
	];

	const breadcumb = [
		{
			label: 'Ekonomi',
		},
		{
			label: 'Dalam Negeri',
		},
	];

	return (
		<div className='flex flex-col space-y-12'>
			<div className='container-components-playground'>
				<span className='text-sm'>Components Breadcrumb</span>
				<Breadcrumb routes={breadcumb} />
			</div>

			<div className='container-components-playground'>
				<span className='text-sm'>Components Heading Link</span>
				<HeadingLink title='Activity' withEdit />
				<HeadingLink title='Activity' />
			</div>

			<div className='container-components-playground'>
				<span className='text-sm'>Components Heading Link</span>
				<HeadingLink title='Activity' withEdit />
				<HeadingLink title='Activity' />
			</div>

			<div className='container-components-playground space-y-2'>
				<span className='text-sm'>Components Modal & Alert</span>
				<div className='flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0'>
					<Button onClick={alert1.open} label='Show alert' />
					<Alert
						{...alert1.props}
						title='Berhasil Atur Kata Sandi Baru'
						description='Anda dapat masuk menggunakan kata sandi baru'
						labelPrimaryButton='Masuk ke Kabarin News'
					/>

					<Button onClick={modal1.open} label='Show modal' />
					<Modal {...modal1.props}>
						<h3 className='font-serif'>Daftar</h3>
						<div className='text-primary'>Buat akun Anda </div>
						<div className='h-48' />
						<Button
							onClick={() => {
								modal1.close();
							}}
							label='Daftar'
							className='w-full'
						/>
					</Modal>

					<Button onClick={modal2.open} label='Show modal with heading' />
					<Modal title='Daftar' {...modal2.props}>
						<div className='h-48' />
						<Button onClick={() => {}} label='Daftar' className='w-full' />
					</Modal>
				</div>
			</div>

			<div className='container-components-playground'>
				<span className='text-sm'>Components Accordion</span>
				<Accordion title='Accordion' className='w-full text-left'>
					<p>Content Accordion</p>
				</Accordion>
			</div>

			<div className='flex flex-col max-w-sm space-y-4 bg-light p-4'>
				<Accordion title='Button Align & Button Icon' className='w-full text-left'>
					<div className='flex flex-col max-w-sm space-y-4 my-4'>
						<Button onClick={() => {}} label='Lihat di olx.com' iconLeft={<BsLink45Deg size={18} />} className='w-full' align='start' />
						<Button
							label='Filter'
							outline
							iconRight={
								<div className='relative'>
									<div className='h-2.5 w-2.5 rounded-full bg-special-warning absolute -right-0.5 -mt-0.5' />
									<FiFilter className='-mb-0.5' size={20} />
								</div>
							}
						/>
					</div>
				</Accordion>

				<Accordion title='Button Primary' className='w-full text-left'>
					<div className='flex flex-col max-w-sm space-y-4 my-4'>
						<Button onClick={() => {}} label='Primary' className='w-full' />
						<Button onClick={() => {}} label='Primary Loading' className='w-full' loading />
						<Button onClick={() => {}} label='Primary Disabled' className='w-full' disabled />
					</div>
				</Accordion>

				<Accordion title='Button Small' className='w-full text-left'>
					<div className='flex flex-col max-w-sm space-y-4 my-4'>
						<Button onClick={() => {}} label='Primary' size='sm' />
						<Button onClick={() => {}} label='Primary Loading' size='sm' loading />
						<Button onClick={() => {}} label='Primary Disabled' size='sm' disabled />
					</div>
				</Accordion>

				<Accordion title='Button Outline' className='w-full text-left'>
					<div className='flex flex-col max-w-sm space-y-4 my-4'>
						<Button onClick={() => {}} label='Outline' className='w-full' outline />
						<Button onClick={() => {}} label='Outline Loading' className='w-full' outline loading />
						<Button onClick={() => {}} label='Outline Disabled' className='w-full' outline disabled />
					</div>
				</Accordion>

				<Accordion title='Button Transparent' className='w-full text-left'>
					<div className='flex flex-col max-w-sm space-y-4 my-4'>
						<Button onClick={() => {}} label='Transparent' className='w-full' variant='transparent' />
						<Button onClick={() => {}} label='Transparent Loading' className='w-full' variant='transparent' loading />
						<Button onClick={() => {}} label='Transparent Disabled' className='w-full' variant='transparent' disabled />
					</div>
				</Accordion>
			</div>
		</div>
	);
}

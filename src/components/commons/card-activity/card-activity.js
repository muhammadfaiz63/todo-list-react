import clsx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import dayjs from "dayjs"
import Card from '../card/card';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';
import { useState } from 'react';
import useModal, { Modal } from '../../../hooks/use-modal';
import useAlert, { Alert } from '../../../hooks/use-alert';
import Button from '../button/button';
import useActivity from '../../../hooks/use-data';

export default function CardActivity({ className, data }) {
	const {deleteDataActivity } = useActivity()
	const router = useRouter();
	const modalDelete = useModal();
	const alertDelete = useAlert();
	const [openModal,setOpenModal] = useState(false)
	const [deleteData,setDeleteData] = useState({})

	return (
		<>
			{data.map((item, index) => (
				<Card className='flex w-full flex-col'>
					<div key={index} className={clsx('flex flex-col justify-between items-start w-full h-52', className)}  onClick={()=>router.push("/activity/"+item.id)}>
						<div className='flex'>
							<span className='text-lg text-black font-bold'>{item?.title}</span>
						</div>
					</div>
					<div className='flex flex-row justify-between items-center w-full'>
						<p className='text-[#888888] text-sm'>{dayjs(item.created_at).format("DD MMMM YYYY")}</p>
						<div className="z-50" onClick={()=>{
							setOpenModal(true)
							setDeleteData(item)
						}}>
							<ImageWithFallback src='/icons/icons-delete.png' className='text-[#888888] cursor-pointer z-fixed' />
						</div>
					</div>
				</Card>
			))}
			
				
			<Modal {...modalDelete.props} isOpen={openModal}>
				<div className="flex flex-col justify-start items-center w-full space-y-8">
					<ImageWithFallback src={'images/modal-delete-icon.png'} />
					<div className="flex flex-col justify-start items-center w-full">
						<span className='text-lg text-black'>Apakah anda yakin menghapus activity</span>
						<span className='text-lg text-black font-bold'>“{deleteData?.title}”?</span>
					</div>
					<div className="flex flex-row justify-between items-center space-x-4">
						<Button
							onClick={() => {
								setOpenModal(false)
							}}
							label='Batal'
							classNameLabel='px-6'
							variant="neutral"
							rounded
						/>
						<Button
							onClick={() => {
								deleteDataActivity(deleteData.id)
								setOpenModal(false)
							}}
							label='Hapus'
							classNameLabel='px-6'
							variant="danger"
							rounded
						/>
					</div>
				</div>
			</Modal>
			<Alert
				{...alertDelete.props}
				description='Anda dapat masuk menggunakan kata sandi baru'
			/>
		</>
	);
}

CardActivity.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
};

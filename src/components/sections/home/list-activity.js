import { useRouter } from "next/router";
import { useEffect } from "react";
import useActivity from "../../../hooks/use-data";
import { CardActivity, ImageWithFallback, Button } from "../../commons";
import useModal, { Modal } from '../../../hooks/use-modal';
import useAlert, { Alert } from '../../../hooks/use-alert';

export default function ListActivity(props) {
	const modalDelete = useModal();
	const alertDelete = useAlert();
	const { data,openDelete } = props

	return (
		<div className='flex flex-col w-full'>
			{data ? (
				<div className='grid grid-cols-4 gap-8 w-full'>
					<CardActivity data={data} />
				</div>
			) : (
				<div className='flex justify-center items-center w-full h-full'>
					<ImageWithFallback src={'/images/todo-empty-state.png'} />
				</div>
			)}
			<Modal {...modalDelete.props} isOpen={openDelete}>
				<div className="flex flex-col justify-start items-center w-full space-y-8">
					<ImageWithFallback src={'images/modal-delete-icon.png'} />
					<div className="flex flex-col justify-start items-center w-full">
						<span className='text-lg text-black'>Apakah anda yakin menghapus activity</span>
						<span className='text-lg text-black font-bold'>“Meeting dengan Client”?</span>
					</div>
					<div className="flex flex-row justify-between items-center space-x-4">
						<Button
							onClick={() => {
								modalDelete.close();
							}}
							label='Batal'
							classNameLabel='px-6'
							variant="neutral"
							rounded
						/>
						<Button
							onClick={() => {
								modalDelete.close();
								alertDelete.open();
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
		</div>
	);
}

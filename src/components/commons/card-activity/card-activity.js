import clsx from 'clsx';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import dayjs from "dayjs"
import Card from '../card/card';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';

export default function CardActivity({ className, data }) {
	const router = useRouter();
	return (
		<>
			{data.map((item, index) => (
				<Card className='flex w-full' onClick={()=>router.push("/activity/"+item.id)}>
					<div key={index} className={clsx('flex flex-col justify-between items-start w-full h-52', className)}>
						<div className='flex'>
							<span className='text-lg text-black font-bold'>{item?.title}</span>
						</div>
						<div className='flex flex-row justify-between items-center w-full'>
							<p className='text-[#888888] text-sm'>{dayjs(item.created_at).format("DD MMMM YYYY")}</p>
							<ImageWithFallback src='/icons/icons-delete.png' className='text-[#888888]' />
						</div>
					</div>
					<div className='absolute bottom-0 right-0 p-6 cursor-pointer' onClick={item.onDelete}>
						<ImageWithFallback src='/icons/icons-delete.png' className='text-[#888888] cursor-pointer z-fixed' />
					</div>
				</Card>
			))}
		</>
	);
}

CardActivity.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
};

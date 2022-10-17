import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { formOptions } from '../../../utils/form-validation';
import Card from '../card/card';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';
import Tags from '../tags/tags';
import InputCheckbox from '../../forms/input-checkbox/input-checkbox'

export default function ListActivity({ className, data }) {
	const { register, formState, handleSubmit } = useForm(formOptions);
    const { errors } = formState;

	return (
		<>
			{data.map((item, index) => (
				<Card className='flex w-full'>
					<div key={index} className={clsx('flex flex-row justify-start items-center w-full py-2', className)}>
						<div className='flex flex-row justify-start items-center w-full space-x-4'>
							<InputCheckbox defaultChecked={false} register={register('acceptTerms')} />
							<div className='flex flex-row justify-start items-center space-x-4'>
								<Tags label={item?.title} variant={item.priority} />
								<div className='cursor-pointer' onClick={item.onClickEdit}>
									<ImageWithFallback src='/icons/icons-edit.png' className='text-[#888888]' />
								</div>
							</div>
						</div>
						<div className='flex cursor-pointer'>
							<ImageWithFallback src='/icons/icons-delete.png' className='text-[#888888]' />
						</div>
					</div>
				</Card>
			))}
		</>
	);
}

ListActivity.propTypes = {
	className: PropTypes.string,
	data: PropTypes.array,
};

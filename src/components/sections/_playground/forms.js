import { useForm } from 'react-hook-form';
import { formOptions } from '../../../utils/form-validation';
import { Button } from '../../commons';
import { InputSelect, InputText, InputSearch } from '../../forms';

export default function Forms() {
	const { register, formState, handleSubmit, control } = useForm(formOptions);
	const { errors } = formState;

	const onSubmit = (val) => {
		console.log('===onsubmit', val);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			<h2>Forms</h2>
			<InputText
				register={register('username')}
				placeholder='Username'
				errors={errors.username?.message}
			/>
			<InputSearch
				label='Search'
				register={register('search')}
				errors={formState.errors}
				placeholder='Search'
			/>
			<InputSelect
				label='Address'
				register={register('fruit')}
				control={control}
				errors={formState.errors}
				placeholder='Address'
				options={[
					{ label: 'Apple', value: 'APPLE' },
					{ label: 'Orange', value: 'ORANGE' },
				]}
			/>
			<Button label='Submit' type='submit' />
		</form>
	);
}

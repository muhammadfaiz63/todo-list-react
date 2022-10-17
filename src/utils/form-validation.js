import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	validateRequired: Yup.string().required('This field is required'),
	username: Yup.string().required('Username is required'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords must match')
		.required('Confirm Password is required'),
	acceptTerms: Yup.bool().oneOf([true, false], 'Accept Ts & Cs is required'),
	title: Yup.string().required('Title is required'),
});

export const formOptions = { resolver: yupResolver(validationSchema) };


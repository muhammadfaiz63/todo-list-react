import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '../button/button';
import ImageWithFallback from '../image-with-fallback/image-with-fallback';
import { useForm } from 'react-hook-form';
import { formOptions } from '../../../utils/form-validation';
import { InputText } from '../../forms';
import { useState,useEffect } from 'react';

export default function HeadingLink({
    className, title, withBack = true, withEdit = false, href = '/', sizeTitle = 'xxl', onClick,
}) {
    const { register, formState, handleSubmit, control } = useForm(formOptions);
	const { errors } = formState;

    const [changeTitle, setChangeTitle] = useState(false);
    const [valueTitle, setValueTitle] = useState("");

    useEffect(()=>{
        setValueTitle(title)
    },[title])

    const styleBySize = {
        xxs: 'text-xxs',
        sm: 'text-xxs md:text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        xxl: 'text-lg md:text-2xl',
        xxxl: 'text-3xl',
    }[sizeTitle];

    return (
        <div className={clsx('flex justify-between items-center w-full py-4', className)}>
            <div className={clsx('flex justify-start items-center w-full max-w-max', withBack ? 'space-x-2' : '')}>
                {withBack && (
                    <Link href={href}>
                        <ImageWithFallback src={'/icons/icons-previous.png'} className='cursor-pointer' />
                    </Link>
                )}
                {withEdit ? (
                    <div className='flex flex-row justify-start items-center'>
                        {changeTitle ? (
                            <div className='flex flex-row justify-start items-center space-x-4'>
                                <InputText
                                    register={register('title')}
                                    errors={errors.title?.message}
                                    value={valueTitle}
                                    onChange={(val) => setValueTitle(val.target.value)}
                                    variant='title'
                                />
                                <div className='cursor-pointer' onClick={() => setChangeTitle(false)}>
                                    <ImageWithFallback src={'/icons/icons-edit.png'} />
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-row justify-start items-center space-x-4'>
                                <span className='text-black text-4xl font-bold'>{valueTitle}</span>
                                <div className='cursor-pointer' onClick={() => setChangeTitle(true)}>
                                    <ImageWithFallback src={'/icons/icons-edit.png'} />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <span className='text-black text-4xl font-bold'>{title}</span>
                )}
            </div>
            <div className='flex justify-end items-center space-x-2'>
                <Button onClick={onClick} label='Tambah' rounded={true} iconLeft={<ImageWithFallback src={'/icons/icons-plus.png'} />} />
            </div>
        </div>
    );
}

HeadingLink.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    withBack: PropTypes.bool,
    withEdit: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    sizeTitle: PropTypes.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
};
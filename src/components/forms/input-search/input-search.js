import clsx from 'clsx';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { Button, Message } from '../../commons';

export default function InputSearch({
  className, label, variant = 'default', withAnimation, register, errors, type, ...props
}) {
  const errMessage = errors[register.name]?.message;

  const [searchAnimation, setSearchAnimation] = useState(false);

  const onSubmit = (val) => {
    if (val.key === 'Enter') {
      setSearchAnimation(false)
    }
  };

  const styleByVariant = {
    default: withAnimation ? 'container-input-search-animation' : 'container-input-search-default',
    mobile: 'container-input-search-mobile',
  }[variant];

  return withAnimation ? (
    <div className={clsx('relative mr-4', styleByVariant, className)}>
      <div className={clsx('w-56', searchAnimation ? 'absolute right-0 opacity-1 transition delay-150 duration-300 ease-in-out' : 'opacity-0 transition duration-300 ease-in-out')}>
        <input
          type='search'
          {...register}
          {...props}
          onKeyDown={onSubmit}
          className='w-full'
        />
      </div>
      <Button
        size={false}
        type='button'
        variant='transparent'
        className={clsx(searchAnimation ? 'opacity-0 transition duration-300 ease-in-out' : 'absolute opacity-1 right-0 transition delay-150 duration-300 ease-in-out')}
        onClick={() => setSearchAnimation(!searchAnimation)}
        iconRight={(
          <MdSearch className='text-light text-2xl' />
        )}
      />
    </div>
  ) : (
    <div className={clsx('flex flex-col space-y-1', styleByVariant, className)}>
      {label && (
        <div className='flex-1'>
          <p className='form-label'>{label}</p>
        </div>
      )}
      <input
        type='search'
        className={clsx('', errMessage && 'form-error')}
        {...register}
        {...props}
      />
      {!!errMessage && <Message className='mt-2'>{errMessage}</Message>}
    </div>
  );
}

InputSearch.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'mobile']),
  withAnimation: PropTypes.bool,
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
  errors: PropTypes.object,
};

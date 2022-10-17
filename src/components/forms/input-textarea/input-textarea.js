import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Message } from '../../commons';

export default function InputTextarea({ 
  className, label, register, errors, type, ...props 
}) {
  const errMessage = errors[register.name]?.message;

  return (
    <div className={clsx('flex flex-col space-y-1 container-input-textarea-default', className)}>
      {label && (
        <div className='flex-1'>
          <p className='form-label'>{label}</p>
        </div>
      )}
      <textarea
        rows='4'
        cols='50'
        className={clsx('', errMessage && 'form-error')}
        {...register}
        {...props}
      />
      {!!errMessage && <Message className='mt-2'>{errMessage}</Message>}
    </div>
  );
}

InputTextarea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.object.isRequired,
  type: PropTypes.string,
  errors: PropTypes.object,
};

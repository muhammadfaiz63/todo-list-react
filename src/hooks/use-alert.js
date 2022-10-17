import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../components/commons/button/button';
import Modal from '../components/commons/modal/modal';
import { RiErrorWarningLine } from 'react-icons/ri';

export default function useAlert(initialIsOpen, { initialData, onRequestClose } = {}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [modalData, setModalData] = useState(initialData || {});

  const open = (data) => {
    setModalData(data);
    setTimeout(() => {
      setIsOpen((prevStateIsOpen) => {
        if (prevStateIsOpen) { // If modal is already opened, close first then open it again
          setTimeout(() => {
            setIsOpen(true);
          }, 200);
          return false;
        }
        return true;
      });
    }, 300);
  };

  const close = () => {
    if (onRequestClose) onRequestClose();
    setIsOpen(false);
  };

  const props = {
    isOpen,
    onRequestClose: close,
  };

  return {
    open,
    close,
    props,
    data: modalData,
  };
}

export function Alert({
  title, description, labelPrimaryButton, onClickPrimaryButton, chidlren, ...props
}) {
  return (
    <Modal {...props} className="max-w-lg">
      <div className="flex flex-col items-center">
        {!!title && (<div className="h3 font-serif">{title}</div>)}
        {!!description && (
          <div className='flex flex-row justify-start items-center space-x-2'>
            <RiErrorWarningLine className='text-success' />
            <div className="text-base text-black">{description}</div>
          </div>
        )}
        {!!labelPrimaryButton && (
          <Button label={labelPrimaryButton} size="lg" className="w-full" onClick={onClickPrimaryButton || props.onRequestClose} />
        )}
      </div>
    </Modal>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success']),
  title: PropTypes.string,
  description: PropTypes.string,
  labelPrimaryButton: PropTypes.string,
  onClickPrimaryButton: PropTypes.func,
  chidlren: PropTypes.node,
  onRequestClose: PropTypes.func,
};

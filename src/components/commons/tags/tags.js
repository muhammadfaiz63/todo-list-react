import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Tags({
  className, label, href = '#', variant = 'very-high',
}) {
  if (!label) return null;

  const styleTag = {
    'very-high': 'bg-[#ED4C5C]',
    'high': 'bg-[#F8A541]',
    'medium': 'bg-[#00A790]',
    'low': 'bg-[#428BC1]',
    'very-low': 'bg-[#8942C1]',
  }[variant];

  return (
    <div className={clsx('flex justify-start items-center space-x-4', className)}>
      <div className={clsx('w-3 h-3 rounded-full', styleTag)} />
      <p className='text-lg text-black font-bold'>{label}</p>
    </div>
  )
}

Tags.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['very-high', 'high', 'medium', 'low', 'very-low']),
};
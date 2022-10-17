import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

export default function Button({
  type = 'button', onClick = () => { }, disabled, loading, size = 'md',
  label, variant = 'primary', align = 'center', outline, iconLeft, iconRight,
  className, classNameLabel, rounded,
  ...props
}) {

  const styleBySize = {
    sm: 'btn-sm',
    md: 'btn-md',
  }[size];

  const styleByVariant = {
    primary: outline ? 'btn-outline-primary' : 'btn-primary' ,
    danger: outline ? 'btn-outline-danger' : 'btn-danger' ,
    neutral: outline ? 'btn-outline-neutral' : 'btn-neutral' ,
    transparent: 'btn-transparent',
  }[variant];

  const loaderColor = {
    primary: outline ? '#CA2629' : '#FFFFFF',
    transparent: '#CA2629',
  }[variant];

  const styleByAlign = {
    start: 'justify-start items-center',
    center: 'justify-center items-center',
    end: 'justify-end items-center',
  }[align];

  return (
    <button
      type={type}
      className={clsx(
        'btn',
        styleBySize,
        styleByVariant,
        disabled && !outline && 'bg-opacity-70 border-opacity-0 cursor-default',
        disabled && outline && 'bg-primary bg-opacity-30 cursor-default',
        className, rounded ? 'rounded-full' : 'rounded',
      )}
      disabled={loading || disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      {...props}
    >
      {loading ? (
        <div className={clsx('flex', styleByAlign)}>
          <ThreeDots
            type="TailSpin"
            color={loaderColor}
            height={19}
            width={19}
          />
        </div>
      ) : (
        <div className={clsx('flex', styleByAlign, classNameLabel)}>
          {iconLeft && <> &nbsp; {iconLeft} &nbsp; </>}
          {label}
          {iconRight && <> &nbsp; {iconRight} &nbsp; </>}
        </div>
      )}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  classNameLabel: PropTypes.string,
  outline: PropTypes.bool,
  label: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'danger', 'neutral', 'transparent']),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  size: PropTypes.oneOf(['sm', 'md']),
  rounded: PropTypes.bool
};

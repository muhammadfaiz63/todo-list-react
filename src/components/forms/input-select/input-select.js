import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Dropdown, Message } from '../../commons';
import withController from '../../hoc/with-controller';

function InputSelect({
  register, control, errors,
  size = 'md',
  onSelectItem = () => { },
  options, optionToReset, label, classNameLabel,
  name, value, onChange,
  ...props
}) {
  const errMessage = errors[name]?.message;

  const remappedOptions = options.map(
    (option) => ({ ...option, isActive: option?.value === value?.value }),
  );

  const hasOptionToReset = optionToReset
    && value.value && (value?.value !== optionToReset?.value);

  const finalOptions = hasOptionToReset
    ? [{ ...optionToReset, isOptionToReset: true }, ...remappedOptions]
    : remappedOptions;

  const styleBySize = {
    md: 'h-10',
    lg: 'h-12',
  }[size];

  return (
    <div className="mb-4">
      {label && (
        <label className={clsx('form-label', classNameLabel)}>
          {label}
        </label>
      )}
      <Dropdown
        options={finalOptions}
        value={value}
        onChange={(val) => {
          onChange(val);
          onSelectItem(val);
        }}
        className={clsx('form-control', styleBySize, 'w-full bg-white', !!errMessage && 'border-danger ring-0')}
        {...props}
      />
      {!!errMessage && <Message className="mt-2">{errMessage}</Message>}
    </div>
  );
}

InputSelect.propTypes = {
  register: PropTypes.object,
  control: PropTypes.object,
  errors: PropTypes.object,
  size: PropTypes.oneOf(['lg', 'md']),
  onSelectItem: PropTypes.func,
  options: PropTypes.array,
  optionToReset: PropTypes.object,
  label: PropTypes.string,
  classNameLabel: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default withController(InputSelect);

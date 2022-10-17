import { Controller } from 'react-hook-form';

function withController(Component, options = {}) {
  return (props) => {
    const { register, control, defaultValue, ...rest } = props;
    return (
      <Controller
        control={control}
        defaultValue={defaultValue ?? options.defaultValue ?? null}
        render={({ field: { onChange, onBlur, value } }) => (
          <Component
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={register.name}
            {...rest}
          />
        )}
        {...register}
      />
    );
  };
}

export default withController;

import React from 'react';
import { Input, Button } from 'antd';
import { Field } from 'formik';
import PropTypes from 'prop-types';

export const SearchInput = ({
  name,
  validate,
  loading,
  buttonText,
  onSearch,
  ...restProps
}) => (
  <Field name={name} validate={validate}>
    {({ field: { value, onChange, onBlur } }) => (
      <Input.Search
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onSearch={onSearch}
        enterButton={
          <Button
            type="primary"
            loading={loading}
            disabled={loading}
            onClick={() => onSearch(value)}
          >
            {buttonText || '검색'}
          </Button>
        }
        {...restProps}
      />
    )}
  </Field>
);
// string | Promise<void> | undefined
SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.any.isRequired,
  loading: PropTypes.bool.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchInput;

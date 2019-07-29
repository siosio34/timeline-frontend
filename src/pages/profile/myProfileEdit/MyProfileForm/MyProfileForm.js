import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormItem, Input, Select } from '@jbuschke/formik-antd';
import { Button } from 'antd';
import cityList from 'utils/cityList';

const { Option } = Select;

const MyProfileForm = ({ loading }) => {
  return (
    <Form style={{ maxWidth: '200px' }}>
      <FormItem label="거주지역" name="state">
        <Select placeholder="선택하기" name="state">
          {cityList.map(city => (
            <Option key={`cityOption_${city}`} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="학교" name="school">
        <Input name="school" />
      </FormItem>
      <FormItem label="생년월일" name="birth">
        <Input
          name="birth"
          placeholder="생년월일 6자를 입력해주세요."
        />
      </FormItem>
      <Button
        style={{ float: 'right', color: '#03cf5d' }}
        htmlType="submit"
        type="link"
        size="small"
        loading={loading}
        disabled={loading}
      >
        저장
      </Button>
    </Form>
  );
};

MyProfileForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default MyProfileForm;

// export default nên không sợ khác tên vs component
// copied from: https://ant.design/components/form
import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { BASE_URL, configHeaders } from '../../api/config';
import axios from "axios"

const onFinish = (values) => {
  console.log('Success:', values);
  axios
    .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {headers: configHeaders()})
    .then((res)=>{
      message.success("Login succeeded");
      console.log(res);
    })
    .catch((err)=>{
      message.error("Username or Password is not correct")
      console.log(err)
    })
  ;
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
// đổi tên từ Form thành FormLogin
// để không trùng với form của ant design
const FormLogin = () => (
  <Form
    className='w-1/2'
    // added
    layout="vertical"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 20,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="taiKhoan"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="matKhau"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 20,
      }}
    >
      <Button type="primary" className='bg-orange-600' htmlType="submit">
        Log in
      </Button>
    </Form.Item>
  </Form>
);
export default FormLogin;
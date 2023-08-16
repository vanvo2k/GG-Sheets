import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, Checkbox, Form, Input, message } from 'antd';
import './App.css'
import { instance } from './api/api';

function App() {
  const [form]=Form.useForm();
  const [set, get] = message.useMessage();
  
  const onFinish = async (values) => {
    await instance.post(`/write`, values);
      form.resetFields();
    const info = () => {
      set.success('Hello, Ant Design!');
    };
    info();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="">
      {get}
      <h1 className='text-4xl font-bold text-sky-500 mb-5'>Choose info row and colum to paste data</h1>
      <Form
        name="basic"
        form={form}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Info-copy"
          name="addressCopy"
          rules={[
            {
              required: true,
              message: 'Please input your address copy as (A2,A3 or B21, vv...)!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Info-paste"
          name="addressPaste"
          rules={[
            {
              required: true,
              message: 'Please input your address paste as (A2,A3 or B21, vv...)!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary3" className='bg-black text-white rounded-md active:scale-90 duration-100' htmlType="submit">
            Practice
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App

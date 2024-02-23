'use client';
import Image from 'next/image';
import Logo from '@/public/logo 1.svg'
import Ellipsebottom from '@/public/Ellipse.svg'
import Ellipsetop from '@/public/Vector.svg'
import logo2 from '@/public/logo color.svg'
import { Button, Input, Form } from 'antd';
// import { Icon } from '@iconify/react'
import './resetStyle.css'
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export default function Reset() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden'>
      <div className='bg-white h-screen '>
        <div className=' flex flex-col items-center justify-start pt-20 md:pt-0 md:justify-center h-full gap-y-6 md:gap-y-10'>
          <Image src={logo2} alt='logo' className='md:hidden ' />
          <h2 className='text-slate-800 text-3xl md:self-start md:ml-32 font-bold'>Reset Password</h2>
          <div className='flex flex-col justify-start w-10/12 md:w-8/12 '>

            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className='flex flex-col gap-y-3'>
                <p className='text-slate-500 text-sm'>Old Password:</p>
                <Form.Item<FieldType>
                  name="oldPassword"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password className="border b-slate-500 bg-slate-50 py-3 rounded-lg md:w-full" placeholder='tell me your password' />
                </Form.Item>
              </div>
              <div className='flex flex-col gap-y-3'>
                <p className='text-slate-500 text-sm'>New Password:</p>
                <Form.Item<FieldType>
                  name="newPassword"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password className="border b-slate-500 bg-slate-50 py-3 rounded-lg md:w-full" placeholder='tell me your password' />
                </Form.Item>
              </div>
              <div className='flex flex-col gap-y-3'>
                <p className='text-slate-500 text-sm'>Confirm password:</p>
                <Form.Item<FieldType>
                  name="confirmPassword"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password className=" border b-slate-500 bg-slate-50 py-3 rounded-lg md:w-full" placeholder='tell me your password' />
                </Form.Item>
              </div>

              <Form.Item >
                <Button className='bg-blue-700 border-none rounded-xl flex justify-center items-center py-6 w-full text-white font-semibold ' htmlType="submit">
                  <p>Reset Password</p>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className='hidden md:block'>
        <div className='bg-blue-800 h-screen flex flex-col justify-center items-center relative'>
          <Image className='absolute bottom-0 left-0' src={Ellipsebottom} alt='ellipse' width={300} height={300} />
          <Image src={Logo} alt='Logo' width={300} height={300} />
          <Image className='absolute top-0 right-0' src={Ellipsetop} alt='ellipse' width={300} height={300} />
        </div>
      </div>

    </div>


  );
}

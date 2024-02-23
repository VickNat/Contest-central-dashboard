'use client';
import Image from 'next/image';
import Logo from '@/public/logo 1.svg'
import Ellipsebottom from '@/public/Ellipse.svg'
import Ellipsetop from '@/public/Vector.svg'
import logo2 from '@/public/logo color.svg'
import { Divider, Checkbox, Button, Input, Form } from 'antd';
import { Icon } from '@iconify/react'
import './loginStyles.css'
const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen overflow-hidden'>
      <div className='bg-white h-screen '>
        <div className=' flex flex-col items-center justify-start pt-20 md:pt-0 md:justify-center h-full gap-y-6 md:gap-y-10'>
          <Image src={logo2} alt='logo' className='md:hidden ' />
          <h2 className='text-slate-800 text-3xl md:self-start md:ml-32 font-bold'>Sign in</h2>
          <div className='flex flex-col justify-start w-10/12 md:w-8/12 '>

            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className='flex flex-col gap-y-3'>
                <p className='text-slate-500 text-sm'>E-mail</p>
                <Form.Item<FieldType>
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input className="border b-slate-500 py-3 bg-slate-50 rounded-lg w-full" placeholder='john.doe@a2sv.org' />
                </Form.Item>
              </div>
              <div className='flex flex-col gap-y-3'>
                <p className='text-slate-500 text-sm'>Password</p>
                <Form.Item<FieldType>
                  name="password"
                  rules={[{ required: true, message: "Please input your password!" }]}
                >
                  <Input.Password className="border b-slate-500 bg-slate-50 py-3 rounded-lg md:w-full" placeholder='tell me your password' />
                </Form.Item>
              </div>

              <div className='flex justify-between items-baseline' >
                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  className=''
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <div>
                  <a className='text-blue-700 font-semibold underline ml-[10px]  md:ml-[130px]' href="#">Forgot password?</a>
                </div>
              </div>

              <Form.Item >
                <Button className='bg-blue-700 border-none rounded-xl flex justify-center items-center py-6 w-full text-white font-semibold ' htmlType="submit">
                  <p>Sign In</p>
                </Button>
              </Form.Item>
            </Form>
            <div className=' text-slate-500 md:mt-2  hidden md:block'>
              <Divider className="border-t-2 border-slate-500 " plain><span className="text-slate-500" style={{ borderColor: 'black' }}>OR</span></Divider>
            </div>
            <Button className='py-6 border-slate-500 rounded-full text-slate-600 m:w-full flex justify-between items-center '>
              <div className=''><Icon className="w-[20px] h-[20px]" icon="flat-color-icons:google" /></div>
              <div>
                Continue with Google
              </div>
              <div></div>
            </Button>
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

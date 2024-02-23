'use client';
import {Button, Input, Form } from 'antd';
import background from '@/public/background_img.png';
import profileimg from '@/public/img& bg.png';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { ChangeEvent, useState } from 'react';

const Profile = () => { 

    const [backgroundImage, setBackgroundImage] = useState<string>(background.src);
    const [profileImage, setProfileImage] = useState<string>(profileimg.src);

    const handleBackgroundChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string | null;
          if (result) {
            setBackgroundImage(result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
    
    
      const openFileInput = () => {
        const fileInput = document.getElementById('backgroundInput');
        fileInput?.click();
      };
      const openFileInputPro = () => {
        const fileInput = document.getElementById('profileInput');
        fileInput?.click();
      };

      const handleProfileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string | null;
            if (result) {
              setProfileImage(result);
            }
          };
          reader.readAsDataURL(file);
        }
      };
    const onFinish = (values: any) => {
        console.log('Success:', values);
        };
        
        const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
        };
        
        type FieldType = {
        old?: string;
        new?: string;
        confirm?: string;
        };
    return (

    <div className="flex flex-col bg-slate-100 h-screen ">
       <div className='bg-white h-[30%] md:h-[50%]'>
  <div className='flex flex-col w-full h-[75%] relative'>
      <div className='h-full' >
      <Image
        src={background}
        alt='background'
        className='w-full h-full'
        priority
      />
    </div>

    <Button
      className='absolute right-0 bottom-0 mb-1 mr-1 text-xs border-blue-600 rounded-m hidden md:block bg-white text-blue-600'
      onClick={openFileInput}
    >
      Edit Cover Photo
    </Button>

    <input
      type='file'
      id='backgroundInput'
      accept='image/*'
      style={{ display: 'none' }}
      onChange={handleBackgroundChange}
    />

<div className='absolute top-[20%] left-1/2 md:left-[13%] md:top-[55%] transform -translate-x-1/2 md:w-[15%] sm:w-[15%] w-[20%] aspect-square rounded-full'>
  <label htmlFor='profileInput' className='relative block cursor-pointer'>
    <Image src={profileImage} 
    alt='background'
     width={1200} 
     height={1000}
     className='w-full h-full object-cover rounded-full' />
    <Icon
      className='w-[20%] h-[20%] bg-blue-700 text-white rounded-full pb-1 pr-1 absolute bottom-0 right-5'
      icon='fluent:image-edit-20-regular'
      onClick={openFileInputPro}
    />
    <input
      type='file'
      id='profileInput'
      accept='image/*'
      style={{ display: 'none' }}
      onChange={handleProfileChange}
    />
  </label>
</div>
  </div>

  <div className='text-blue-600 md:ml-[25%] ml-[45%] '>
    <p className='text-sm md:text-2xl font-bold mb-[0.5%] mt-[1%]'>Anima Agrawal </p>
    <p className='text-xs md:text-xl'>UI/UX Designer</p>
  </div>
</div>


  <div className='flex items-center justify-between h-[50%] flex-wrap md:flex-row'>

      <div className='list-none flex flex-col justify-center items-center md:items-start pl-10 rounded-xl bg-white w-full md:w-[30%] h-[90%]'>
            <h2 className='mb-2 text-blue-500 text-lg  font-bold flex'>About</h2>
          <div>
              <li className='mb-2 text-blue-500 text-m  pt-5 font-light flex'>
              <Icon className='w-[30px] h-[30px] text-blue-600 pb-1 pr-1' icon="ic:round-person"/>Female </li>
              <li className='mb-2 text-blue-500 text-m  pt-5 font-light flex'>
              <Icon className='w-[30px] h-[30px] text-blue-600 pb-1 pr-1' icon="ic:round-cake"/>Born June 12, 1980 </li>
              <li className='mb-2 text-blue-500 text-m  pt-5 font-light flex'>
              <Icon className='w-[30px] h-[30px] text-blue-600 pb-1 pr-1' icon="mdi:location"/>2239 Hog Camp Road</li>
              <li className='mb-2 text-blue-500 text-m  pt-5 font-light flex'> 
              <Icon className='w-[30px] h-[30px] text-blue-600 pb-1 pr-1' icon="ic:round-phone"/>33757005467</li>
          </div>
          
      </div>

      <div className='rounded-xl bg-white w-full md:w-[30%] h-[95%] p-5 mb-4 md:mb-0 flex flex-col justify-center items-center md:flex-col md:flex md:items-start  '>
      <h2 className='mb-2 text-blue-500 text-lg  mt-10 font-bold flex'>Reset Password</h2>
      <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='w-full'
          >
          
          <p className='text-slate-500 text-sm mt-2'>Old Password</p>
          <Form.Item<FieldType>
              name="old"
              rules={[{ required: true, message: 'Please input your password!' }]}
          >
              <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-[300px] md:w-full" />
          </Form.Item>
          
          <p className='text-slate-500 text-sm mt-2'>New Password</p>
          <Form.Item<FieldType>
              name="new"
              rules={[{ required: true, message: 'Please input your password!' }]}
          >
              <Input.Password  className="border b-slate-500 pt-2 pb-2 bg-slate-50 rounded-lg w-[300px] md:w-full" />
          </Form.Item>

          <p className='text-slate-500 text-sm mt-2'>Confirm Password</p>
          <Form.Item<FieldType>
              name="confirm"
              rules={[{ required: true, message: 'Please input your password!' }]}
          >
              <Input.Password  className="border b-slate-500 pt-2  bg-slate-50 rounded-lg w-[300px] md:w-full" />
          </Form.Item>


          <Form.Item >
              <Button className='mt-2 bg-blue-700 border-none rounded-lg w-[300px] md:w-full h-[35px] text-white ' htmlType="submit">
                      Submit
              </Button>
          </Form.Item>
          </Form>
      </div>

      <div className='list-none flex flex-col justify-center pl-10 rounded-xl bg-white w-full items-center md:items-start md:w-[30%] h-[90%]'>
          <div>
              <li className='mb-1 text-blue-500 text-lg  pt-5 font-bold flex'>Work Info</li>
              <li className='text-blue-500 text-lg  pt-3 font-bold flex'>Title</li>
              <li className='mb-1 text-blue-500 text-m  pt-1 font-light flex'>Head of Education </li>
              <li className=' text-blue-500 text-lg  pt-3 font-bold flex'>Group</li>
              <li className='mb-1 text-blue-500 text-m  pt-1 font-light flex'>G4</li>
              <li className=' text-blue-500 text-lg  pt-3 font-bold flex'>Work Location</li>
              <li className='mb-1 text-blue-500 text-m  pt-1 font-light flex'>AASTU</li>
              <li className=' text-blue-500 text-lg  pt-3 font-bold flex'>Organizational Email</li>
              <li className='mb-1 text-blue-500 text-m  pt-1 font-light flex'>jhon.doe@a2sv.org</li>
          </div>
          
      </div>

      </div>

    
    </div>
    )


    
}

export default Profile; // Export the Profile component

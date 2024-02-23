// import React from 'react';
// import { DownOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Dropdown, Space } from 'antd';
// import Link from 'next/link';

// interface DropdownFilterProps {
//  data: {
//     title: string;
//     options: string[];
//  };
// }

// const DropdownFilter: React.FC<DropdownFilterProps> = ({ data }) => {
//     const items: MenuProps['items'] = data.options.map((option, index) => ({
//         label: option,
//         key: index.toString(),
//       }));

//  return (
//     <Dropdown menu={{ items }} trigger={['click']}>
//       <div onClick={(e) => e.preventDefault()}>
//         <Space>
//           <div className='mr-6'>{data.title}</div>
//           <DownOutlined />
//         </Space>
//       </div>
//     </Dropdown>
//  );
// };

// export default DropdownFilter;
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Tag } from 'antd';
// import Link from 'next/link';

interface DropdownFilterProps {
 data: {
    title: string;
    options: string[];
 };
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ data }) => {
 const [selectedOption, setSelectedOption] = useState<string | null>(null);

 const handleClick = (option: string) => {
    setSelectedOption(option);
 };

 const items: MenuProps['items'] = data.options.map((option, index) => ({
    label: (
      <a onClick={() => handleClick(option)}>
        {option}
      </a>
    ),
    key: index.toString(),
 }));

 return (
    <div>
      <Dropdown menu={{ items }} trigger={['click']}  className="border border-gray-300 bg-white rounded-md px-2 py-1 text-sm mb-3">
        <div onClick={(e) => e.preventDefault()}>
          <Space>
            <div className='mr-6'>{data.title}</div>
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
        {selectedOption && (
        <Space>
            <Tag 
                color='processing' 
                closable onClose={() => setSelectedOption(null)} 
                style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    color: 'black',
                    fontSize: '14px',
                    // marginRight: '15px',
                }}>
            {selectedOption}
            </Tag>
        </Space>
        )}
    </div>
 );
};

export default DropdownFilter;
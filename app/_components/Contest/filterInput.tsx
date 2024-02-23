'use client';
import {useState, } from 'react';
import { Select, Space,Tag} from 'antd';
import type { SelectProps,  } from 'antd';

interface FilterInputProps {
    options: SelectProps['options'];
  }
  
export default function FilterInput({options}:FilterInputProps){

    const [selectedCountryItems, setSelectedCountryItems] = useState<string[]>([]);

    const handleChangeCountry = (selectedValues: string[]) => {
        // console.log(`Selected Country: ${selectedValues}`);
        setSelectedCountryItems(selectedValues);
      };
    const handleDeselectCountry = (value: string) => {
        const updatedSelection = selectedCountryItems.filter((item) => item !== value);
        setSelectedCountryItems(updatedSelection);
      };
    return(
        <div>

            <Space direction="vertical" style={{ width: '100%' }}>
                <Select
                    placeholder='Select' className="md:w-[300px] h-[38px] " allowClear
                    mode="multiple"
                    value={selectedCountryItems}
                    onChange={handleChangeCountry}
                    options={options}
                    />
                    <div className=''>
                    {selectedCountryItems.map((item) => (
                        <Tag
                        key={item}
                        closable
                        onClose={() => handleDeselectCountry(item)}
                        style={{ margin: '5px' }}
                        >
                        {item}
                        </Tag>
                    ))}
                    </div>
            </Space>
        </div>
        
    )
    
}
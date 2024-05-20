import React from 'react'

interface InputField1 {
    label: string;
    type: string;
    placeholder: string;
    value: string;
    icon?: JSX.Element;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
}
const InputFeild = ({label, type , placeholder,onChange, value}) => {
  return (
    <div>
        
        <input />
    </div>
  )
}

export default InputFeild
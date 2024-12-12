import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    hoverColor,
    textColor = 'text-white',
    className='',
    ...props
}) {
  return (
    <button type={type} 
    className={`px-4 py-2 rounded-lg font-bold ${bgColor} ${textColor} ${className} hover:bg-${hoverColor}-600`}
    {...props}>
      {children}
    </button>
  )
}

export default Button

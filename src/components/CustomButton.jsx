import React from 'react'

const CustomButton = ({ type, title, customStyles, handleClick }) => {

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {

            }
        } else {
            return {
                borderWidth: '1px',
                borderColor:  "#0582B8",

            }
        }
    }

  return (
    <button
    className={`px-2 py-1.5 flex-1 rounded-full ${customStyles} `}
    style={generateStyle(type)}
    onClick={handleClick}
    >
    {title}
    </button>
  )
}

export default CustomButton
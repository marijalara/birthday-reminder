import React from 'react'

const Button = ({setPeople}) => {
    const onClickClear=() => {
        setPeople([])
    }
    
    return (
        <button className='btn' onClick={onClickClear}>
            Clear All
        </button>
    )
}

export default Button
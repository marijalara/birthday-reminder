import React from "react";
import {PropsPeople} from './App';

interface PropsButton {
    setPeople: React.Dispatch<React.SetStateAction<PropsPeople[]>>
}

const Button: React.FC<PropsButton>=({setPeople}) => {
    const onClickClear=() => {
        setPeople([])
    }
    return(
        <button className="btn" onClick={onClickClear}>
            Clear All
        </button>
    )
}

export default Button
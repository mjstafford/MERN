import { useState } from 'react'

const Tab = props => {
    //Each tab has its state sent in via props
    const classList = ["header"]

    if (props.tab.isSelected) {
        classList.push("active")
    }

    return (
        <div>
            <div className={classList.join(" ")}>
                <h2 onClick={(e) => props.handleTabSelectClick(props.index)}>{props.tab.label}</h2>
            </div>
            {/* {props.tab.isSelected ? <div className='body'><h2>{props.tab.content}</h2></div> : ""} */}
        </div>
    )

}

export default Tab
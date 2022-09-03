import { useState, useEffect } from 'react'

import Tab from './Tab.js';

const Tabs = props => {
    //where props.tabs is an array of items
    //each tabs state is held here as objects
    const [tabs, setTabs] = useState(props.tabsData)    //[ {label,content,isSelected} , {} , ...]

    const handleTabSelectClick = (selectedIndex) => {
        const newTabs = tabs.map((tab, i) => {
            if (selectedIndex === i) {
                return {
                    ...tab,
                    isSelected: true
                }
            }
            return {
                ...tab,
                isSelected: false
            }
        })
        setTabs(newTabs)
    }

    let result = []

    tabs.forEach(tab => {
        if (tab.isSelected) {
            result.push(
                <div>{tab.content}</div>
            )
        }
    })



    return (
        <div className='center-div'>
            <div className='container'>
                {tabs.map((tab, i) => {
                    return (
                        <Tab tab={tab} key={i} handleTabSelectClick={handleTabSelectClick} index={i} />
                    )
                })}

            </div>

            <div className='content'>
                {result}
            </div>
        </div>
    )

}

export default Tabs
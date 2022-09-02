
import { useState } from "react"

import styles from './Box.module.css'

const Box = props => {
    console.log('making box')
    console.log(props.color)

    const [boxColor, setBoxColor] = useState(`${props.color}`)
    const [boxWidth, setBoxWidth] = useState(`${props.width}`)

    return (
        <div className={styles.box} style={{ backgroundColor: boxColor, width: boxWidth + "px", height: boxWidth + "px" }} ></div >
    )

}

export default Box
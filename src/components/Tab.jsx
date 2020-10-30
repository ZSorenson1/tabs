import { useState } from "react"
import React from 'react'

const Tab = (props) => {
    const [content, setContent] = useState(props.items[0].content);
    
    // const onClickHandler = () => {setActive(true)}
    
    const onClickHandler = (e, c) => {
        setContent(c)
    }
    return (
        <>
        <div className="tabs">
        {
        props.items.map( (item, i) => {
            return <h1 onClick={ (e) => onClickHandler(e, item.content) }>{ item.label }</h1>})
        }
        </div>
        <h2>{content}</h2>
        </>
    )

        

    // return (
    //     <div>
    //     <h1 onClick={ onClickHandler }>{props.label}</h1>
    //     { active ? <h2>{props.content}</h2> : ''}
    //     </div>
    // )
}

export default Tab;
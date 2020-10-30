import { useState } from "react"
import react from 'react'

const Tabs = () => {
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const tabs = [
        {label: "Tab 1", content: "Check out this content"}, 
        {label: "Tab 2", content: "Now we're on the second tab"},
        {label: "Tab 3", content: "And here's the last one"}
    ];
    
    const onClickHandler = (tName) => {
        console.log(`pressed ${tName}`);

        if(tName == "Tab 1"){
            setActive1(true);
            setActive2(false);
            setActive3(false);
        }
        if(tName == "Tab 2"){
            setActive1(false);
            setActive2(true);
            setActive3(false);
        }
        if(tName == "Tab 3"){
            setActive1(false);
            setActive2(false);
            setActive3(true);
        }
    }

    return (
        <>
        <div className="tabs">

            <h1 onClick={() => onClickHandler("Tab 1")}>{tabs[0].label}</h1>
            <h1 onClick={() =>  onClickHandler("Tab 2")}>{tabs[1].label}</h1>
            <h1 onClick={() =>  onClickHandler("Tab 3")}>{tabs[2].label}</h1>
        </div>
        <div>
            { active1 ? <h2>{tabs[0].content}</h2> : 
            active2 ? <h2>{tabs[1].content}</h2> : 
            active3 ? <h2>{tabs[2].content}</h2> : ''}
        </div>
        </>
    )
}

export default Tabs;
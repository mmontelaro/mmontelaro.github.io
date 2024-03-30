import NavBar from "../../NavBar";
import useMousePosition from "../homepage/useMousePosition";
import {useState} from "react";
import useWindowDimensions from "../homepage/useWindowDimensions";
import "./LobPage.css"

export default function LobPage() {

    const mousePosition = useMousePosition();
    const [color, setColor] = useState({r: 200, g: 200, b: 255});

    const colorVariety = 2
    const updateChance = 0.7

    const {height, width} = useWindowDimensions();

    function computeBackground () {
        if (Math.random() <= updateChance) {
            setColor({r: Math.max(200, color.r + colorVariety*(Math.random() - 0.5)),
                g: Math.max(200, color.g + colorVariety*(Math.random() - 0.5)),
                b: Math.max(230, color.b + colorVariety*(Math.random() - 0.5))})
        }
        let colors = color.r + ", " + color.g + ", " + color.b
        return "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(" + colors + ", 0.5) " + (100*(mousePosition.x-2)/width) + "%, rgba(" + colors + ", 0.5) "+ (100*(mousePosition.x)/width) + "%, rgba(" + colors +", 0.5) " + (100*(mousePosition.x+2)/width) + "%, rgb(255, 255, 255) 100%), " +
            "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(" + colors + ", 0.5) " + (100*(mousePosition.y-2)/height) + "%, rgba(" + colors + ", 0.5) "+ (100*(mousePosition.y)/height) + "%, rgba(" + colors +", 0.5) " + (100*(mousePosition.y+2)/height) + "%, rgb(255, 255, 255) 100%)"
    }

    const bgStyle = {display: "flex", flexDirection: "column", overflowY: "auto", height: "100vh", padding: "12vh 0 12vh 0"}

    const pageStyle = {display: "flex", flexDirection: "column", height: "100vh", width: "100vw", position: "relative", background: computeBackground()}

    return (<div style={pageStyle}>
        <NavBar />
        <div style={bgStyle} className={"bg"}>
            <p> Lob Ster Fishing does not collect any user data. For support email lobofhousester@gmail.com. </p>
            <a href={"https://apps.apple.com/us/app/lob-ster-fishing/id6469463984"}>
                <img className={"lobApp"} src={"appicon.png"} alt={"Lob Ster Fishing"}/>
            </a>
        </div>
    </div>)
}
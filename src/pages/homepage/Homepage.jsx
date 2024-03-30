import NavBar from "../../NavBar";
import ProjectList from "./ProjectList";
import "./Homepage.css"
import "./useMousePosition"
import useMousePosition from "./useMousePosition";
import useWindowDimensions from "./useWindowDimensions";
import {useState} from "react";

export default function Homepage() {

    const mousePosition = useMousePosition();
    const [color, setColor] = useState({r: 200, g: 200, b: 255});

    const colorVariety = 2
    const updateChance = 0.7

    const {height, width} = useWindowDimensions();

    function computeBackground () {
        if (Math.random() <= updateChance) {
            setColor({r: Math.max(200, color.r + colorVariety*(Math.random() - 0.5)),
                g: Math.max(200, color.g + colorVariety*(Math.random() - 0.5)),
                b: Math.max(200, color.b + colorVariety*(Math.random() - 0.5))})
        }
        let colors = color.r + ", " + color.g + ", " + color.b
        return "linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(" + colors + ", 0.5) " + (100*(mousePosition.x-2)/width) + "%, rgba(" + colors + ", 0.5) "+ (100*(mousePosition.x)/width) + "%, rgba(" + colors +", 0.5) " + (100*(mousePosition.x+2)/width) + "%, rgb(255, 255, 255) 100%), " +
            "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgba(" + colors + ", 0.5) " + (100*(mousePosition.y-2)/height) + "%, rgba(" + colors + ", 0.5) "+ (100*(mousePosition.y)/height) + "%, rgba(" + colors +", 0.5) " + (100*(mousePosition.y+2)/height) + "%, rgb(255, 255, 255) 100%)"
    }

    const pageStyle = {display: "flex", flexDirection: "column", height: "100vh", width: "100vw", position: "relative", background: computeBackground()}

    const bgStyle = {display: "flex", flexDirection: "column", overflowY: "auto", height: "100vh", padding: "12vh 0 12vh 0"}

    const profileStyle = {display: "flex", justifyContent: "space-around"}

    const aboutStyle = {display: "flex", flexDirection: "column"}

    const outerNameStyle = {fontFamily: "Georgia", fontSize: "4.5vmin", margin: "5vmin 0 2vmin 0", display: "flex"}

    const innerNameStyle = {display: "inline-block", borderBottom: "1px solid black"}

    const pStyle = {fontFamily: "Georgia", fontSize: "3vmin", maxWidth: "30vw", marginTop: "0"}

    const titleStyle = {fontFamily: "Georgia", fontSize: "5.5vmin", textAlign: "center"}

    const bottomBar = {display: "flex", justifyContent: "space-around", marginTop: "auto", background: "linear-gradient(to top, rgba(200, 200, 200, 1) 90%, rgba(200, 200, 200, 0) 100%)", position: "absolute", bottom: "0", width: "100vw"}

    const projects = [{name: "Personal Website", years: [2024,2024], description: "The website you are looking at right now", link: "/", tools: ["React", "Javascript", "CSS"]},
        {name: "Nicebreakers", years: [2024,2024], description: "A website for uploading  and finding icebreaker activities and questions", link: "https://main.d3pb2yef2pgy2m.amplifyapp.com/", tools: ["React", "Javascript", "CSS", "AWS Amplify"]}]

    return (<div style={pageStyle}>
        <NavBar/>
        <div style={bgStyle} className={"bg"}>
            Site Under Construction
            <div style={profileStyle}>
                <div style={aboutStyle}>
                    <div style={outerNameStyle}>
                        <div style={innerNameStyle}>
                            Matthew Montelaro
                        </div>
                        <div style={{borderBottom: "1px solid black", width: "4vw"}} />
                    </div>
                    <p style={pStyle}> Hello! I'm Matthew Montelaro, a soon to graduate Computer Science major at UW Seattle.  </p>
                </div>
                <div className={"home__img"}/>
            </div>
            <p style={titleStyle}> Projects </p>
            <ProjectList projects={projects}/>
        </div>
        <div style={bottomBar}>
            <a href={"https://www.linkedin.com/in/matthew-montelaro/"}>
                <img className={"icon"} src={"linkedin.png"} alt={"LinkedIn"}/>
            </a>
            <a href={"https://github.com/mmontelaro"}>
                <img className={"icon"} src={"github.png"} alt={"Github"}/>
            </a>
            <a href={"/resumeForWebsite.pdf"}>
                <img className={"icon"} src={"resumeicon.png"} alt={"Resume"}/>
            </a>
            <a href={"http://www.youtube.com/@puggietaur"}>
                <img className={"icon"} src={"youtube.png"} alt={"Youtube"}/>
            </a>
        </div>
    </div>)
}
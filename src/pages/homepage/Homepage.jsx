import NavBar from "../../NavBar";
import ProjectList from "./ProjectList";
import "./Homepage.css"

export default function Homepage() {

    const bgStyle = {display: "flex", flexDirection: "column", overflowY: "auto", height: "auto", marginTop: "10vh"}

    const profileStyle = {display: "flex", justifyContent: "space-around"}

    const aboutStyle = {display: "flex", flexDirection: "column"}

    const outerNameStyle = {fontFamily: "Georgia", fontSize: "4.5vmin", margin: "5vmin 0 2vmin 0", display: "flex"}

    const innerNameStyle = {display: "inline-block", borderBottom: "1px solid black"}

    const pStyle = {fontFamily: "Georgia", fontSize: "3vmin", maxWidth: "30vw", marginTop: "0"}

    const titleStyle = {fontFamily: "Georgia", fontSize: "5.5vmin", textAlign: "center"}

    const bottomBar = {display: "flex", justifyContent: "space-around", marginTop: "auto"}

    const projects = [{name: "Personal Website", years: [2024,2024], description: "The website you are looking at right now", link: "/", tools: ["React", "Javascript", "CSS"]}, {link: "https://google.com"}, {}, {}]

    return (<div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
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
            <a href={"http://www.linkedin.com/in/matthew-montelaro-742a43296"}>
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
import "./Project.css"

export default function Project({project}) {

    function rangeToString(r) {
        return (r && (r[0] === r[1] ? r[0] : r[0] + "-" + r[1]))
    }

    let rrgb = () => {return "rgba(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ", 0.01)" }

    const projectStyle = {backgroundColor: rrgb()}

    const nameAndYearStyle = {display: "flex"}

    const outerNameStyle = {fontFamily: "Georgia", fontSize: "4vmin", margin: "0 0 2vmin 0", display: "flex"}

    const innerNameStyle = {display: "inline-block", borderBottom: "1px solid black"}

    const yearStyle = {fontSize: "3vmin"}

    const pStyle = {fontFamily: "Georgia", fontSize: "2vmin", maxWidth: "30vw", marginTop: "0"}

    return (<a href={project.link} style={{color: "black", textDecoration: "none"}}>
            <div style={projectStyle} className={"project"}>
                <div style={nameAndYearStyle}>
                    <div style={outerNameStyle}>
                        <div style={innerNameStyle}>
                            {project.name}
                        </div>
                        <div style={{borderBottom: "1px solid black", width: "4vw"}} />
                    </div>
                    <div style={yearStyle}> {rangeToString(project.years)}</div>
                </div>
                <p style={pStyle}> {project.description} </p>
                <ul>
                    {project.tools && project.tools.map((tool) => {return <li>{tool}</li>})}
                </ul>
            </div>
    </a>)
}
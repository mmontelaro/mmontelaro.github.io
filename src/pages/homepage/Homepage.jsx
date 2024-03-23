import NavBar from "../../NavBar";


export default function Homepage() {

    // const rc = (r) => {return (Math.random()*255)*r}
    // const ra = () => {return Math.random()*0.1}
    // const lg = () => {return "linear-gradient(" + Math.random()*365 + "deg, rgba(" + rc(0.7) + "," + rc(1) + "," + rc(1) + "," + ra() + ")," +
    // "rgba(" + rc(0.7) + "," + rc(1) + "," + rc(1) + "," + ra() + "))"}
    // const lgs = () => {
    //     let res = lg();
    //     const max = Math.random()*3
    //     for (let i=0; i<max; i++) {
    //         res += ", " + lg()
    //     }
    //     return res;
    // }

    const bgStyle = {height: "100vh", display: "flex", flexDirection: "column"}

    const bottomBar = {display: "flex", justifyContent: "space-around", marginTop: "auto"}

    const iconStyle = {height: "5vh"}

    return (<div style={bgStyle}>
        <NavBar />
        Site Under Construction
        <div style={bottomBar}>
            <a href={"http://www.linkedin.com/in/matthew-montelaro-742a43296"}>
                <img style={iconStyle} src={"linkedin.png"} alt={"LinkedIn"}/>
            </a>
            <a href={"https://github.com/mmontelaro"}>
                <img style={iconStyle} src={"github.png"} alt={"Github"}/>
            </a>
            <a href={"http://www.youtube.com/@puggietaur"}>
                <img style={iconStyle} src={"youtube.png"} alt={"Youtube"}/>
            </a>
        </div>
    </div>)
}
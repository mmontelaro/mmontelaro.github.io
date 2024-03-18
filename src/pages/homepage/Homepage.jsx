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

    const bgStyle = {height: "100vh"}

    return (<div style={bgStyle}>
        <NavBar />
        Site Under Construction
    </div>)
}
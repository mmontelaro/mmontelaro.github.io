import {useNavigate} from "react-router-dom";

export default function NavBar() {

    const navigate = useNavigate();

    const barStyle = {height: "12vh", background: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(1, 0.3, 0.3, 1) 30%)", position: "absolute", top: "0", width: "100vw"}

    const buttonHolder = {height: "80%", display: "flex", alignContent: "center", justifyContent: "space-around"}

    const buttonStyle = {height: "100%", backgroundColor: "transparent", color: "white", border: "none", fontSize: "6vh", width: "auto", fontFamily: "Courier New", cursor: "pointer"}

    return (
        <div style={barStyle}>
            <div style={buttonHolder}>
                <button style={buttonStyle} onClick={() => navigate('/')}> Homepage </button>
                <button style={buttonStyle} onClick={() => navigate('/lob')}> Lob Ster Fishing </button>
            </div>
        </div>
    )
}
import React from 'react'
import thief from "../assets/thief.png"

const AboutGame = ({ setCurrentPage }) => {
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2rem" }}>
                <div style={{ width: "300px" }}>
                    <img src={thief} width="100%" />
                </div>
                <p style={{ color: "white", fontSize: "2rem", width: "800px" }}>
                    A notorious criminal escape artist has vanished again. However, the criminal may be hiding in only one of the possible 5 neighbouring cities. 3 fearless cops have volunteered in capturing the fugitive hiding and they need your help!
                </p>
            </div >
            <button onClick={() => setCurrentPage(2)} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px" }}>Catch Thief</button>
        </div >
    )
}

export default AboutGame

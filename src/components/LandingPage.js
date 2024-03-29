import React from 'react';


const LandingPage = ({ setCurrentPage }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2 style={{ color: "#A37FB1", fontSize: "5rem" }}>
                Welcome Player
            </h2>
            <p style={{ color: "white", fontSize: "2rem" }}>
                Press  Play To Enter The Story Mode
            </p>
            <button onClick={() => setCurrentPage(1)} style={{ color: "#A37FB1", fontSize: "5rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem" }}>PLAY</button>
        </div >
    );
}

export default LandingPage;
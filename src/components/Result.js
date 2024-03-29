import React, { useEffect, useState } from 'react'

const Result = ({ result }) => {

    const [isFlickering, setIsFlickering] = useState(true);

    useEffect(() => {
        const flickerInterval = setInterval(() => {
            setIsFlickering((prev) => !prev);
        }, 500); // Adjust flicker speed here

        return () => clearInterval(flickerInterval);
    }, []);

    const flickerStyle = {
        opacity: isFlickering ? 1 : 0,
        transition: 'opacity 0.1s ease-in-out', // Adjust transition speed here
        fontSize: "5rem",
        color: result ? "#53E9B2" : "#E6546F"
    };
    return (
        <div style={{ textAlign: "center" }} >
            <h2 style={{ marginBottom: "30px", fontSize: "8rem", color: "#C89AD9" }}>Game Result</h2>
            <h3 style={flickerStyle}>{result ? "Congratulations!" : "Oops!"}</h3>
            <p style={{ fontSize: "2rem", color: result ? "#53E9B2" : "#E6546F" }}>{result ? "You won the game!" : "You lost the game. Better luck next time!"}</p>
            <button onClick={() => window.location.reload()} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px" }}>PLAY AGAIN</button>

        </div >
    )
}

export default Result

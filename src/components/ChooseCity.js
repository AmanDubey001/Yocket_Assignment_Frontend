import axios from 'axios';
import React, { useState } from 'react'

const ChooseCity = ({ setCurrentPage, copData, setCopData, selectedCop, setSelectedCop, cityData, setCityData, setResult }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndexx, setHoveredIndexx] = useState(null);
    const [go, setGo] = useState(true);
    const [loading, setLoading] = useState(false);


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const handleMouseEnterr = (index) => {
        setHoveredIndexx(index);
    };

    const handleMouseLeavee = () => {
        setHoveredIndexx(null);
    };
    const handleChooseCop = (index) => {
        setSelectedCop(index)
    }

    const handleChooseCity = (index) => {
        // setSelectedVehicle(index);
        let nums = [...copData];
        if (!nums[selectedCop]["city"]) {
            nums[selectedCop]["city"] = cityData[index]["name"];
            nums[selectedCop]["distance"] = cityData[index]["distance"];
            setCopData([...nums]);
            let res = [...cityData]
            res[index]["under"] = nums[selectedCop]["name"]
            setCityData([...res])
        } else {
            // let previousVehicle = nums[selectedCop]["vehicle"]
            nums[selectedCop]["city"] = cityData[index]["name"];
            nums[selectedCop]["distance"] = cityData[index]["distance"];
            setCopData([...nums]);
            let res = [...cityData]
            res[index]["under"] = nums[selectedCop]["name"]
            res?.forEach((item, ind) => {
                if ((ind !== index) && (item["under"] === nums[selectedCop]["name"])) {
                    res[ind]["under"] = ""
                }
            })
            setCityData([...res])
        }
    }

    const validate = () => {
        const finalResult = copData.filter((res, index) => {
            return (res.city && res?.vehicle)
        })
        return (finalResult.length === 3)
    }


    const handleGo = async () => {
        if (validate()) {
            try {
                const payload = copData;
                const res = await axios.post('http://localhost:8000/api/post', payload);
                if (res?.data) {
                    setResult(res?.data?.success);
                    setCurrentPage(4)
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            setGo(false);
        }

    }

    return (
        <div>
            <h2 style={{ color: "#A37FB1", fontSize: "4rem" }}>
                Select Cop </h2>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
                {copData?.map((data, index) => (
                    <div style={{
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'border 0.6s ease',
                        border: (hoveredIndex === index) || (selectedCop === index) ? "10px solid #A37FB1" : ""
                    }}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleChooseCop(index)}
                    >
                        <div style={{ width: "200px" }}>
                            <img src={data?.image} width="100%" />
                        </div>
                        <p style={{ fontSize: "1rem" }}>{data?.vehicle}</p>
                        <p style={{ fontSize: "1rem" }}>{data?.city}</p>
                    </div>
                ))
                }
            </div>

            <h2 style={{ color: "#A37FB1", fontSize: "4rem" }}>
                Select City </h2>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
                {cityData?.map((data, index) => (
                    <div style={{
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'border 0.6s ease',
                        border: (hoveredIndexx === index) ? "10px solid #A37FB1" : "",
                        pointerEvents: (data["under"] !== "") ? 'none' : 'auto',

                    }}
                        onMouseEnter={() => handleMouseEnterr(index)}
                        onMouseLeave={handleMouseLeavee}
                        onClick={() => handleChooseCity(index)}
                    >
                        <div style={{ width: "200px" }}>
                            <img src={data?.image} width="100%" />
                        </div>
                        <p style={{ fontSize: "1rem" }}>{data?.under ? data?.under : "Available"}</p>
                    </div>
                ))
                }
            </div>

            <button onClick={() => setCurrentPage(2)} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px" }}>BACK</button>
            <button onClick={handleGo} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px", marginLeft: "2em" }}>{loading ? ". . . ." : "GO"}</button>

            {!go ? (<p style={{ font: "2rem", color: "white" }}>Select the city and Vehicle for All The Cops To GOO!</p>) : (<p style={{ font: "2rem", color: "white" }}> GOO!</p>)}
        </div >
    )
}

export default ChooseCity

import React, { useState } from 'react'

const ChooseCop = ({ setCurrentPage, copData, setCopData, selectedCop, setSelectedCop, vehicleData, setVehicleData }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndexx, setHoveredIndexx] = useState(null);


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

    const handleChooseVehicle = (index) => {
        // setSelectedVehicle(index);
        let nums = [...copData];
        if (!nums[selectedCop]["vehicle"]) {
            nums[selectedCop]["vehicle"] = vehicleData[index]["name"];
            nums[selectedCop]["range"] = vehicleData[index]["range"];
            setCopData([...nums]);
            let res = [...vehicleData]
            res[index]["under"] = nums[selectedCop]["name"]
            setVehicleData([...res])
        } else {
            // let previousVehicle = nums[selectedCop]["vehicle"]
            nums[selectedCop]["vehicle"] = vehicleData[index]["name"];
            nums[selectedCop]["range"] = vehicleData[index]["range"];
            setCopData([...nums]);
            let res = [...vehicleData]
            res[index]["under"] = nums[selectedCop]["name"]
            res?.forEach((item, ind) => {
                if ((ind !== index) && (item["under"] === nums[selectedCop]["name"])) {
                    res[ind]["under"] = ""
                }
            })
            setVehicleData([...res])
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
                Select Vehicle </h2>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
                {vehicleData?.map((data, index) => (
                    <div style={{
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'border 0.6s ease',
                        border: (hoveredIndexx === index) ? "10px solid #A37FB1" : "",
                        pointerEvents: (data["under"] !== "") ? 'none' : 'auto',

                    }}
                        onMouseEnter={() => handleMouseEnterr(index)}
                        onMouseLeave={handleMouseLeavee}
                        onClick={() => handleChooseVehicle(index)}
                    >
                        <div style={{ width: "200px" }}>
                            <img src={data?.image} width="100%" />
                        </div>
                        <p style={{ fontSize: "1rem" }}>{data?.under ? data?.under : "Available"}</p>
                        {/* <p style={{ fontSize: "1rem" }}>{data?.name}</p> */}
                    </div>
                ))
                }
            </div>

            <button onClick={() => setCurrentPage(1)} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px" }}>BACK</button>
            <button onClick={() => setCurrentPage(3)} style={{ color: "#A37FB1", fontSize: "2rem", fontFamily: "Silkscreen", background: "#402F5C", borderStyle: "none", borderRadius: "10px", marginTop: "3rem", width: "300px", padding: "10px", marginLeft: "2em" }}>NEXT</button>


        </div >
    )
}

export default ChooseCop

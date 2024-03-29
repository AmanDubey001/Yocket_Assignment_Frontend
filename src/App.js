import { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage.js';
import AboutGame from './components/AboutGame.js';
import ChooseCop from './components/ChooseCop.js';
import david from "../src/assets/david.png";
import michael from "../src/assets/michael.png";
import bike from "../src/assets/bike.png"
import suv from "../src/assets/suv.png"
import car from "../src/assets/car.png"
import jane from "../src/assets/jane.png"
import ChooseCity from './components/ChooseCity.js';
import Result from './components/Result.js';
import city_1 from "../src/assets/city_1.png";
import city_2 from "../src/assets/city_2.png";
import city_3 from "../src/assets/city_3.png";
import city_4 from "../src/assets/city_4.png";
import city_5 from "../src/assets/city_5.png";



function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCop, setSelectedCop] = useState(0);
  const [result, setResult] = useState(false);

  const [copData, setCopData] = useState([
    {
      id: 0,
      name: "David",
      city: "",
      vehicle: "",
      range: "",
      distance: "",
      image: david
    },
    {
      id: 1,
      name: "Jane",
      city: "",
      vehicle: "",
      range: "",
      distance: "",
      image: jane
    }, {
      id: 2,
      name: "Miachel",
      city: "",
      vehicle: "",
      range: "",
      distance: "",
      image: michael
    }
  ])

  const [vehicleData, setVehicleData] = useState([
    {
      id: 0,
      name: "Bike",
      under: "",
      range: "60",
      image: bike
    },
    {
      id: 1,
      name: "Bike",
      under: "",
      range: "60",
      image: bike
    },

    {
      id: 2,
      name: "Car",
      under: "",
      range: "100",
      image: car
    },
    {
      id: 3,
      name: "Suv",
      under: "",
      range: "120",
      image: suv
    },
  ])

  const [cityData, setCityData] = useState([
    {
      id: 0,
      name: "Yapkashnagar",
      under: "",
      distance: "60",
      image: city_1
    },
    {
      id: 1,
      name: "Lihaspur",
      under: "",
      distance: "50",
      image: city_2
    },
    {
      id: 2,
      name: "Narmis City",
      under: "",
      distance: "40",
      image: city_3
    },
    {
      id: 3,
      name: "Shekharvati",
      under: "",
      distance: "30",
      image: city_4
    },
    {
      id: 4,
      name: "Nuravgram",
      under: "",
      distance: "20",
      image: city_5
    },

  ])


  const getScreens = () => {
    if (currentPage === 0) {
      return (
        <LandingPage setCurrentPage={setCurrentPage} />
      )
    }
    else if (currentPage === 1) {
      return (
        <AboutGame setCurrentPage={setCurrentPage} />
      )
    }
    else if (currentPage === 2) {
      return (
        <ChooseCop setCurrentPage={setCurrentPage} copData={copData} setCopData={setCopData} selectedCop={selectedCop} setSelectedCop={setSelectedCop} vehicleData={vehicleData} setVehicleData={setVehicleData} />
      )
    }
    else if (currentPage === 3) {
      return (
        <ChooseCity setCurrentPage={setCurrentPage} copData={copData} setCopData={setCopData} selectedCop={selectedCop} setSelectedCop={setSelectedCop} cityData={cityData} setCityData={setCityData} setResult={setResult} />
      )
    }
    else if (currentPage === 4) {
      return (
        <Result result={result} />
      )
    }
  }

  return (
    <div className="App">
      {getScreens()}
    </div>
  );
}

export default App;

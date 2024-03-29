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
import ChooseCity from './components/ChooseCity.js';
import Result from './components/Result.js';


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
      image: michael
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
      image: bike
    },
    {
      id: 1,
      name: "Lihaspur",
      under: "",
      distance: "50",
      image: bike
    },
    {
      id: 2,
      name: "Narmis City",
      under: "",
      distance: "40",
      image: suv
    },
    {
      id: 3,
      name: "Shekharvati",
      under: "",
      distance: "30",
      image: car
    },
    {
      id: 4,
      name: "Nuravgram",
      under: "",
      distance: "20",
      image: car
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

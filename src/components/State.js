import React,{useState} from 'react'

export default function State() {
  // const [brand, setBrand] = useState("Ford");
  // const [model, setModel] = useState("Mustang");
  // const [year, setYear] = useState("1964");
  // const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      {/* <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p> */}
       <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

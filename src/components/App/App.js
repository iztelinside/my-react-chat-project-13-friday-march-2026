import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Burgers from "../Bargers/Burgers";
const burgers = [
    {id:1, title:"Cheeseburger", price:5},
    {id:2, title:"Chicken Burger", price:6},
    {id:3, title:"Double Burger", price:8}
]

function App() {
  return (
    <div className="App">
        <Header title = "Title page"/>
        <Main title = "Pry Better"/>

         {burgers.map((burger) => (
            <Burgers
                 key={burger.id}
                 title={burger.title}
                 price={burger.price}
             />
         ))}
        <Footer title = "Fottery Better"/>
    </div>
  );
}

export default App;

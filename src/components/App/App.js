import React from "react";
import {useState} from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Burgers from "../Burgers/Burgers";
import Users from "../Users/Users";
import Projects from "../Projects/Projects";
import Counter from "../Counter/Counter";
import BurgerNew from "../BurgersNew/BurgerNew";
const burgers = [
    {id:1, title:"Cheeseburger", price:5},
    {id:2, title:"Chicken Burger", price:6},
    {id:3, title:"Double Burger", price:8}
]
const projects = [
    {id:1, title:"Chat Budget", budget: 500000},
    {id:2, title:"Double Budget", budget: 2000000},
    {id:3, title:"Drink Budget", budget: 3000000},


]


// 2. Функция для удаления бургеров



function App() {

  return (
    <div className="App">
        <Header title = "Title page"/>
        <BurgerNew/>



        {/*{projects.map((project) => (*/}
        {/*    <Projects*/}
        {/*        key = {project.id}*/}
        {/*        title = {project.title}*/}
        {/*        budget = {project.budget}*/}
        {/*    />*/}
        {/*))}*/}
        {/*<Users name={"Dan"} age={35}/>*/}

        {/*<Counter/>*/}
        {/*<Main title = "Pry Better"/>*/}

         {/*{burgers.map((burger) => (*/}
         {/*   <Burgers*/}
         {/*        key={burger.id}*/}
         {/*        title={burger.title}*/}
         {/*        price={burger.price}*/}
         {/*    />*/}
         {/*))}*/}
        <Footer title = "Fottery Better"/>
    </div>
  );
}

export default App;

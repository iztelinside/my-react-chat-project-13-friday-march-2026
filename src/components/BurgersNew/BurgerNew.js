import React from "react";
import {useState} from "react";


function BurgerNew() {
    const [burgers, setBurgers] = useState([
        {id:1, title:"Cheeseburger", price:5},
        {id:2, title:"Chicken Burger", price:6},
        {id:3, title:"Double Burger", price:8}
    ]);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    function addBurger(e){
        e.preventDefault(); // чтобы форма не перезагружала страницу

        const newBurger = {
            id: Date.now(),
            title: title,
            price: price
        };

        setBurgers([...burgers, newBurger]);

        // очистка input
        setTitle("");
        setPrice("");
    }
 function deleteBurger(id){
        setBurgers(burgers.filter(burger => burger.id !== id));
    }
 function renameBurger(id){

     const newName = prompt("Enter new name");
     const newPrice = prompt("Enter new name");


     setBurgers(
         burgers.map((burger) =>
             burger.id === id
                 ? { ...burger, title: newName, price: newPrice }
                 : burger,
         )
     );

    }
 // function addBurger(){
 //         const newBurger = {
 //            id: Date.now(),
 //            title: "New Burger",
 //            price: 7
 //        };
 //        setBurgers([...burgers, newBurger]);
 //    }
    return(
        <div>
            <h1>Burger Form</h1>
            <form onSubmit={addBurger}>

                <input
                    type="text"
                    placeholder="Burger name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button type="submit">
                    Add Burger
                </button>

            </form>

            <h1>Burger Menu</h1>
            <button onClick={addBurger}>Add Burger</button>

            {/*{burgers.map(burger => (*/}
            {/*    <div key={burger.id}>*/}
            {/*        <h2>{burger.title}</h2>*/}
            {/*        <p>{burger.price}$</p>*/}
            {/*        <button onClick={() => deleteBurger(burger.id)}>Delete</button>*/}
            {/*    </div>*/}
            {/*))}*/}
            {burgers.map(burger => (
                <div key={burger.id}>

                    <h2>{burger.title}</h2>
                    <p>{burger.price}$</p>

                    <button onClick={() => renameBurger(burger.id)}>
                        Rename
                    </button>

                    <button onClick={() => deleteBurger(burger.id)}>
                        Delete
                    </button>

                </div>
            ))}
        </div>


    )
}
export default BurgerNew
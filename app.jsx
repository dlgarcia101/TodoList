import React from 'react';
import { useState } from 'react';


const App = () =>{

    // set the state
    const [items,setItems] = useState([]);


    // remove items function
    const OnRemoveItem = (itemToRemove) =>{
        const newItems = items.filter((item)=>{
            return item !== itemToRemove;
        })
        setItems(newItems);
    };

    // on submit item function
    const onSubmit = (event) =>{
        

    }





}

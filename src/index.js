//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// import React from "react"
// import ReactDOM from "react-dom";
// const React = require("react");
// const ReactDOM = require("react-dom");



// const NAME = "Ade Aderinto";
// const YEAR = new Date().getFullYear();



// ReactDOM.render(
// <div>
// <p>Created by {NAME} </p>
// <p>Copyright {YEAR} </p>


// </div>,
// document.getElementById("root"))


import React from 'react';
import ReactDOM from 'react-dom';

const name = "Derick Howler";
const currentYear = New(Date())

ReactDOM.render(
    <div>
        <P>{name}</P>
        <p>{currentYear}</p>
    </div>,
    document.getElementById('root')
)

import React from "react"; 
const sum = (a,b)=> a+b;
const sub = (a,b)=> a-b;

export{sum, sub};    //named export

const Title = () => {
    return <div>Title</div>
};

export default Title;  //default export it can be one in one page
import React from "react";
import axios from "axios";
import { useState } from "react";


function Axios (){


const [photos, setPhotos] = useState([]);

const getAllPhotos =() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((responsive) => {
        setPhotos(responsive.data)
    })

}


    return <div className="item">
    
        <button  onClick={getAllPhotos}> get date</button>


        {
        photos.map((title,index) => (
    <div className="itemss"> 
    <div className="back">
    <h1 > {title.body} </h1>
        <p> {title.body } </p>
      

      
    </div>
    </div>
        ))
}
</div>
}

export default Axios;
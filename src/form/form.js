import { useState } from "react";


function Form (){


const [item , setItem] =useState("") ;

const [todos , setTodos ] =useState ([]);

const handleItem  = (event) => {
    event.preventDefault();
    if (item) {

        setTodos([...todos , item])
        setItem("")
    }
}


    return <div className ="item">
    
    < div className="form" >

        <h1> Our list of Todos</h1> <br />
      

    <form>

<label>Enter Item</label> <br /> <br />
<input type='text' value={item} onChange={(event) => {
    setItem(event.target.value)
}} /> 
<button onClick={handleItem}>Add</button>
    </form>

  </div> <br />
  {

  todos.map( (newItem,index) => (
    <div className="itemss"> 
    <div className="back">
    <p>{newItem}</p>

  
</div>
  </div>
  ))
}
  </div>

}
export default Form;
import React, {useState, useEffect } from "react";
import { connect } from 'react-redux'
import  {add}  from '../../config/routes'


function criar({add}){
    const [input, setInput] = useState({
        nome: null,
        
    })

    const handleInputChange = function(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

   

    const enviarFormulario = () => {
         /*  e.preventDefault();
     console.log(add(input)) */ 
    (add(input));   
    }

    const cancelar = function(){
        window.location.replace('http://localhost:3000')       
    }

    

   return (
    <div className="container">
        <form className="form-signin">
            <h3>Agregar Categoria</h3>
            <label htmlFor="nombre" className ="sr-only">Nombre</label>
            <input className="form-control" type="text" name="nome" placeholder= "Categoría" onChange={handleInputChange}/>
            <br/>
            <button type="submit" className=" btn btn-lg btn-primary btn-block"  value="Enviar" onClick={enviarFormulario} >Enviar</button>
            <button type="button" className=" btn btn-lg btn-danger btn-block"  value="Cancelar" onClick={cancelar} >Cancelar</button>
            </form>
    </div>
   )
}

export default connect(null, {add})(criar)
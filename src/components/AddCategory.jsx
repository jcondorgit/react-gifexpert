import { useState } from "react"

export const AddCategory = ({ onAddCategory }) => {
    
    const [ inputValue,setInputValue ] = useState('')  
    
    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }

    const onSubmit = ( event ) => {
        event.preventDefault()//evita refresh del navegador al ser enviado
        const newInputValue = inputValue.trim()
        if( newInputValue.length <= 1 ) return
        //setCategories( categories => [ inputValue, ...categories ] )
        onAddCategory( newInputValue )//evento emitido al padre de vuelta
        setInputValue('')
    }

    return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    </>
  )
}

import { useState } from "react"


export const AddCategory = ({onAddCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = (event) =>{

        setInputValue(event.target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();

        if(InputValue.trim().length <1){
            return;
        }
     
        onAddCategory(InputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Search GIF"
                value={InputValue}
                onChange={ (event) =>onInputChange(event)}
                />
        </form>
    )
}



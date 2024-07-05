import { TextField } from "@mui/material";
import './TextInput.css';
export default function TextInput({placeholder,name,value,changeLoginInput,props}){

    return (
        <TextField className="textBoxInput" variant="outlined" size="small" name={name} {...props} placeholder={placeholder} value={value} onChange={changeLoginInput}/>
    )
}
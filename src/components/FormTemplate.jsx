import { formJson } from '../assets/FormJson';
import InputField from './InputField';
import { useState } from 'react';
import "./FormTemplate.css";
import { Box,Button } from '@mui/material';
// import { LocalizationProvider, AdapterDateFns } from '@mui/x-date-pickers';

export default function FormTemplate() {
    const formHeading = formJson["heading"];
    const formPages = formJson["page"];
    function extractNamesFromJson(formPages) {
        return formPages.map((item) => {
            if (item.type === 'BLOCK') {
                return item.elements.map((field) => {
                    return [field.name,field.type];
                })
            }
        }).reduce((acc, list) => {
            return acc.concat(list)
        }, []);
    }
    let formInputNames = extractNamesFromJson(formPages);
    const INITIAL_STATE = {};
    for (const [name,type] of formInputNames) {
        if(type==='CHECK_BOX'){
            INITIAL_STATE[name] = {};
        }
        else{
            INITIAL_STATE[name] = "";
        }
    }
    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    // console.log(formData);
    function changeInputFields(event) {
        if(event.target.type=="checkbox"){
            setFormData((prev)=>({
                ...prev,
                [event.target.name]:{...prev[event.target.name],[event.target.value]:event.target.checked}
            }))
        }
        else{
            setFormData((prev) => ({
                ...prev,
                [event.target.name]: event.target.value
            }))
        }
    }
    function submitData(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        console.log(event.target.value);
        const userInput = {};
        for (const [key, value] of fd) {
            if(userInput[key]){
                userInput[key] = [...userInput[key],value];
            }
            else{
                userInput[key] = value;
            }
        }
        console.log(userInput);
    }
    return (
        <>
            <h2 className='form-heading'>{formHeading}</h2>
            <hr />
            <form onSubmit={submitData}>
                {formPages.map((item) => {
                    if (item.type === 'BLOCK') {
                        return <div className='formBlock' key={item.heading}>
                            <h3>{item.heading}</h3>
                            <Box sx={{display:"flex",width:"100%",flexWrap:"wrap"}}>
                                {item.elements.map((field) => {
                                    return <InputField item={field} key={field.name} inputFieldValue={formData[field.name]} changeInputFields={changeInputFields} required={!field.optional}></InputField>
                                    })}
                            </Box>
                        </div>
                    }
                    })}
                <Button type="submit" color="orangish" sx={{ color:"white",width:"30%",marginTop:"10px"}} className="btn" variant="contained" size='small'>Save</Button>
            </form>
                </>
    );
}
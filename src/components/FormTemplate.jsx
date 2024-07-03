import { formJson } from '../assets/FormJson';
import InputField from './InputField';
import './FormTemplate.css';
import { useState } from 'react';

export default function FormTemplate() {
    const formHeading = formJson["heading"];
    const formPages = formJson["page"];
    function extractNamesFromJson(formPages){
        return formPages.map((item) => {
            if (item.type === 'BLOCK') {
                return item.elements.map((field) => {
                    return field.name;
                })
            }
        }).reduce((acc, list) => {
            return acc.concat(list)
        }, []);
    }
    let formInputNames = extractNamesFromJson(formPages);

    const INITIAL_STATE = {};
    for (const key of formInputNames) {
        INITIAL_STATE[key] = "";
    }

    const [formData, setFormData] = useState({ ...INITIAL_STATE })
    function changeInputFields(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
    }
    function submitData(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const userInput = {};
        for (const [key, value] of fd) {
            userInput[key] = value;
        }
        console.log(userInput);
    }
    return (
        <div className='formContainer'>
            <h2>{formHeading}</h2>
            <form onSubmit={submitData}>
                {formPages.map((item) => {
                    if (item.type === 'BLOCK') {
                        return <div className='formBlock' key={item.heading}>
                            <h3>{item.heading}</h3>
                            {item.elements.map((field) => {
                                return <InputField item={field} key={field.name} inputFieldValue={formData[field.name]} changeInputFields={changeInputFields} required={!field.optional}></InputField>
                            })}
                        </div>
                    }
                })}
                <button type='submit'>Save</button>
            </form>
        </div>
    );
}
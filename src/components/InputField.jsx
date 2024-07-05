import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox, FormGroup } from '@mui/material';
// import { DateField } from '@mui/x-date-pickers/DateField';
import './InputField.css';

export default function InputField({ item, inputFieldValue, changeInputFields, required }) {
    let inputType;
    let content = "";
    switch (item.type) {
        case 'TEXT_BOX':
            content = <TextField className='form-input' size='small' placeholder={item.label} value={inputFieldValue} onChange={changeInputFields} name={item.name} />;
            break;
        case 'RADIO_BUTTON':
            content = (
                <FormControl className='form-input'>
                    <RadioGroup row name={item.name} key={item.label}>
                        {
                            item.values.map((valueItem) => {
                                return (
                                    <FormControlLabel key={`${item.label}_${valueItem}`} value={valueItem} control={<Radio />} label={valueItem} />
                                );
                            })
                        }
                    </RadioGroup>
                </FormControl>
            );
            break;
        case 'CHECK_BOX':
            content = (
                <FormControl className='form-input'>
                    <FormGroup key={item.label} onChange={changeInputFields} >
                        {item.values.map((valueItem) => {
                            return (
                                <FormControlLabel key={`${item.label}_${valueItem}`} control={<Checkbox value={valueItem} name={item.name} checked={inputFieldValue.valueItem} />} label={valueItem} />
                            )
                        })}
                    </FormGroup>
                </FormControl>
            );
            break;
        // case 'DATE_PICKER_BOX':
        //     content = (
        //         <DateField value={inputFieldValue} onChange={changeInputFields}/>
        //     );
        //     break;
    }
    return (
        <div className='form-field-control'>
            <label htmlFor={item.name}>{item.label}<span style={{ color: "red" }}>{required ? "*" : null}</span></label>
            {content}
        </div>
    );
}
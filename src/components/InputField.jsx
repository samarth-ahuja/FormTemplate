export default function InputField({item,inputFieldValue,changeInputFields,required}){
    let inputType;
    switch(item.type){
        case 'TEXT_BOX':
            inputType='text';
            break;
        case 'RADIO_BUTTON':
            inputType='radio';
            break;
    }
    return (
        <>
            <label htmlFor={item.name}>{item.label}{required?" *":null}</label>
            {inputType==='radio'?
            item.values.map((valueItem)=>{
                return (
                    <div key={`${item.label}_${valueItem}`}>
                        <input type={inputType} name={item.name} value={valueItem} onChange={changeInputFields}/>
                        <label value={valueItem}>{valueItem}</label>
                    </div>
                );
            })
            :<input type={inputType} name={item.name} value={inputFieldValue} onChange={changeInputFields}/>} 
        </>
    );
}
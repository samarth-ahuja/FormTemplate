export default function InputField({item,inputFieldValue,changeInputFields}){
    return (
        <>
            <label htmlFor={item.name}>{item.label}</label>
            <input type={item.type} name={item.name} value={inputFieldValue} onChange={changeInputFields}/>
        </>
    );
}
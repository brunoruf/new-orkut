import { StyledTextField } from "./StyledTextField";

const TextField = ({name, type, placeholder, required, label, id, value, onChange}) => {
    return (
        <StyledTextField name={name} type={type} placeholder={placeholder} required={required} label={label} id={id} value={value} onChange={onChange}/>
    )
}

export default TextField;

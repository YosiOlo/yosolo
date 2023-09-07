const FormInput = ({
    label, placeholder, name, value, onChange
}: {
    label: string,
    placeholder: string,
    name: string,
    value: string,
    onChange: (e: any) => void,
}) => {
    return (
        <div className="form-control">
            <label>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                required
                name={name}
                autoComplete="off"
                value={value}
                onChange={onChange}
                className="input input-bordered"
            />
        </div>
    )
}

export default FormInput;
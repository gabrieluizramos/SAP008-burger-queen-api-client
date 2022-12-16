function Select({ text, name, options, onChange, value }) {
    return (
        <div>
            <select className="selectSignup" name={name} id={name} onChange={onChange}>
                <option value="" defaultValue>Cargo</option>
                <option value="garçom">Garçom</option>
                <option value="chefe">Chefe</option>
            </select>
        </div>
    )
}

export default Select;
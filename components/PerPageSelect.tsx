const PerPageSelect = ({
    options, defaultValue, onChange
}: {
    options: number[], defaultValue: number, onChange: (value: number) => void
}) => {
    return (
        <div>
            <label htmlFor="itemsPerPage" className="mr-2">Tampilkan per halaman:</label>
            <select
                id="itemsPerPage"
                value={defaultValue}
                onChange={(e) => onChange(parseInt(e.target.value, 10))}
                className="p-3 rounded-md bg-slate-200"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default PerPageSelect
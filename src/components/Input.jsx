export default function Input({label, id, onChange, initialValue}) {
    console.log("Input component rendered");
    return (
        <p>
            <label>{label}</label>
            <input 
                type="number" 
                placeholder={label}
                id={id}
                min="0"
                // max="100"      // Set upper limit if needed
                // step="0.1"     // For decimal increments
                defaultValue="0"
                value={initialValue}
                onChange={(e) => onChange(id, e.target.value)}
                required
            />
        </p>
    );
}
export default function inputField({label, name}) {
    function handleChange(event) {
        
    }
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type="number"  name={name} value='' onChange={handleChange} />
        </>
    )
}
export default function RegisterSelectInput({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (event: any) => {
    console.log(event.target.value);
    
    event.target.value == "" ? "Cliente" : onSelectChange(event.target.value);
  };
  
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <label htmlFor="">Usted es un?"</label>
      </div>
      <select
        className="select select-primary w-full"
        required
        onChange={handleChange}
      >
        <option disabled selected>usted es un?</option>
        <option>
          Cliente
        </option>
        <option>
          Negocio
        </option>
        <option>
          Repartidor
        </option>
      </select>
    </div>
  )
}



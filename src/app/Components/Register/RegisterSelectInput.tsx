export default function RegisterSelectInput({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (event: any) => {
    console.log(event.target.value);
    if(event.target.value == "Cliente"){
      return onSelectChange("CLIENT")
    }else if(event.target.value == "Negocio"){
      return onSelectChange("LOCAL")
    }else if(event.target.value == "Repartidor"){
      return onSelectChange("DELIVERY")
    }
  };
  
  return (
    <div className="w-full">
      <div className="mb-2 block">
        <label htmlFor="">Usted es un?</label>
      </div>
      <select
        className="select select-primary w-full"
        required
        onChange={handleChange}
      >
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



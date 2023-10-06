
export default function RegisterSelectInputRepartidor({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (e: any) => {
    e.target.value === "" ? "Moto" : onSelectChange(e.target.value)
  }  

  return (
    <div className="w-full">
      <div className="mb-2 block">
        <label htmlFor="">Seleccione su vehiculo</label>
      </div>
      <select
      className="select select-primary w-full"
        id="vehiculo"
        required
        onChange={handleChange}
      >
        <option disabled selected>Seleccione su vehiculo</option>
        <option>
          Moto
        </option>
        <option>
          Bicicleta
        </option>
        <option>
          Auto
        </option>
      </select>
    </div>
  )
}



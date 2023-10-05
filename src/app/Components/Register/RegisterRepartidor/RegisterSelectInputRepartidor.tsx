import { Label, Select } from 'flowbite-react';

export default function RegisterSelectInputRepartidor({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (e: any) => {
    e.target.value === "" ? "Moto" : onSelectChange(e.target.value)
  }  

  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="vehiculo"
          value="Seleccione su vehiculo"
        />
      </div>
      <Select
        id="vehiculo"
        required
        onChange={handleChange}
      >
        <option>
          Moto
        </option>
        <option>
          Bicicleta
        </option>
        <option>
          Auto
        </option>
      </Select>
    </div>
  )
}



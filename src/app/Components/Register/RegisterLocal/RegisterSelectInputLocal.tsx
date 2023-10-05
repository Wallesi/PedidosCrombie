import { Label, Select } from 'flowbite-react';

export default function RegisterSelectInputLocal({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (e: any) => {
    e.target.value === "" ? "Restaurante" : onSelectChange(e.target.value)
  } 

  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="vehiculo"
          value="Ingrese el tipo de negocio (restaurante, rostiseria, kiosko, etc.)"
        />
      </div>
      <Select
        id="tipo"
        required
        onChange={handleChange}
      >
        <option>
          Restaurante
        </option>
        <option>
          Supermercado
        </option>
        <option>
          Kiosko
        </option>
        <option>
          Rostiseria
        </option>
      </Select>
    </div>
  )
}



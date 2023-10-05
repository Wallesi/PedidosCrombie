import { Label, Select } from 'flowbite-react';

export default function RegisterSelectInput({onSelectChange}:{onSelectChange: any}) {

  const handleChange = (event: any) => {
    console.log(event.target.value);
    
    event.target.value == "" ? "Cliente" : onSelectChange(event.target.value);
  };
  
  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="tipo"
          value="Usted es un?"
        />
      </div>
      <Select
        id="tipo"
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
      </Select>
    </div>
  )
}



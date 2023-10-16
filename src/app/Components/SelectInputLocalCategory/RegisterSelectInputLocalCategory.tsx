export default function RegisterSelectInputLocalCategory({ onSelectChange }: { onSelectChange: any }) {

  const handleChange = (e: any) => {
    e.target.value === "" ? "Restaurante" : onSelectChange(e.target.value)
  }

  return (
    <div className="w-full">
      <div className="block">
        <label>Ingrese el tipo de negocio</label>
      </div>
      <select className="select select-primary w-full" onChange={handleChange}>
        <option>restaurante</option>
        <option>rostiseria</option>
        <option>kiosko</option>
        <option>supermercado</option>
        <option>heladeria</option>
        <option>pasteleria</option>
      </select>
    </div>
  )
}



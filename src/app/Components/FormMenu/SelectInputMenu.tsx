export default function SelectInputMenu({
  onSelectChange,
}: {
  onSelectChange: any;
}) {
  const handleChange = (e: any) => {
    e.target.value === "" ? "dulce" : onSelectChange(e.target.value);
  };

  return (
    <div className="w-full max-w-2xl items-center justify-center">
      <div className="block mb-5">
        <label className="font-medium">Nombre del menu</label>
        <input
          type="text"
          className="input input-bordered input-primary w-full"
          placeholder="Hamburguesas con papas"
        />
      </div>

      <div className="block mb-5">
        <label className="font-medium">Descipcion del menu</label>
        <input
          type="text"
          className="input input-bordered input-primary w-full"
          placeholder="hamburguesa de 200g con queso cheddar y papas fritas"
        />
      </div>

      <div className="block mb-5">
        <label className="font-medium">Precio</label>
        <input
          type="number"
          className="input input-bordered input-primary w-full"
          placeholder="2000"
        />
      </div>

      <div className="block mb-5">
        <label className="font-medium">Ingrese una imagen ilustrativa</label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
      </div>

      <div className="block mb-5">
        <label className="font-medium">Ingrese el tipo de comida</label>
        <select
          className="select select-primary w-full"
          onChange={handleChange}
        >
          <option>dulce</option>
          <option>salado</option>
        </select>
      </div>
    </div>
  );
}

'use client'

import { useEffect, useState } from 'react';

interface Provincia {
  centroide: {
    lat: number;
    lon: number;
  };
  id: string;
  nombre: string;
}

type Props = {
  onSelectChange: any;
};

export default function RegisterSelectInputCiudad({ onSelectChange }: Props) {
  const [provincias, setProvincias] = useState<Provincia[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
      const json = await response.json();
      const provincias = json.provincias;
      setProvincias(provincias);
    }
    fetchData();
  }, []);

  const handleChange = (event: any) => {
    event.target.value == "" ? "Misiones" : onSelectChange(event.target.value);
  };
  
  return (
    <div className="w-full">
      <div className="mb-2 block">
       <label htmlFor="">Seleccione su provincia</label>
      </div>
      <select
        className='select select-primary w-full'
        id="provincia"
        required
        onChange={handleChange}
      >
       
        {provincias ? (
          provincias.map((provincia) => (
            <option value={provincia.nombre} key={provincia.id}>{provincia.nombre}</option>
          ))
        ) : (
          <option>Cargando...</option>
        )}
      </select>
    </div>
  )


}
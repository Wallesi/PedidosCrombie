'use client';

export default function LoginSelectInput() {
  return (
    <div className='w-full'>
      <div className="mb-2 block">
        <label htmlFor="">Iniciar sesion como</label>
      </div>
      <select
        id="tipo"
        required
        className="select select-primary w-full"
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
'use client';

import { Label, Select } from 'flowbite-react';

export default function LoginSelectInput() {
  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="tipo"
          value="Iniciar sesion como"
        />
      </div>
      <Select
        id="tipo"
        required
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
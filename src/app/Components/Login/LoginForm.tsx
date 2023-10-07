'use client';

import LoginSelectInput from './LoginSelectInput';

export default function LoginForm() {
  return (
    <div className='max-w-xl w-full'>
      <form className="flex flex-col gap-4">
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Inicia sesion para empezar 🍕</h3>
        </div>
        <div className='w-full'>
          <div className="mb-2 block">
            <label htmlFor="">Ingrese su email</label>
          </div>
          <input
            className="input input-bordered input-primary w-full"
            id="email1"
            placeholder="johndoe@gmail.com"
            required
            type="email"
          />
        </div>
        <div className='w-full'>
          <div className="mb-2 block">
            <label htmlFor="">ingrese su contraseña</label>
          </div>
          <input
            className="input input-bordered input-primary w-full"
            id="password1"
            required
            type="password"
            placeholder='contraseña'
          />
        </div>
        <LoginSelectInput/>
        <button color='purple' type="submit" className='btn btn-primary w-full'>
          Ingresar
        </button>
      </form>
    </div>
  )
}



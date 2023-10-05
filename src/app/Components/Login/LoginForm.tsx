'use client';

import { Button, Card, Label, TextInput } from 'flowbite-react';
import LoginSelectInput from './LoginSelectInput';

export default function LoginForm() {
  return (
    <Card className='max-w-5xl w-full'>
      <form className="flex flex-col gap-4">
        <div>
          <h3 className='text-center text-black text-2xl font-medium leading-9'>Inicia sesion para empezar 🍕</h3>
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="name@flowbite.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
          />
        </div>
        <LoginSelectInput/>
        <Button color='purple' type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}



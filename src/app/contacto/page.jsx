'use client'

import InputUi from '@/app/components/ui/Input'
import { Button } from '@nextui-org/react'
import {Field, Form, Formik } from 'formik'
import React from 'react'

const Contacto = () => {
  return (
    <>
    <h1 className="text-3xl font-bold mb-4">Contactanos</h1>
    <div className="flex justify-center w-1/2 mx-auto p-4 rounded-lg shadow-2xl">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="firstName" className="block font-semibold mb-4">Nombre</label>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Nombre"
              type="text"
              component={InputUi} 
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block font-semibold mb-4">Apellido</label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              component={InputUi}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="E-mail" className="block font-semibold mb-4">E-mail</label>
            <Field
              id="lastName"
              name="email"
              placeholder="Email"
              type="email"
              component={InputUi}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  </>
  )
}

export default Contacto
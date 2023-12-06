import React from 'react';

export default function Contact () {
  
  return (
    <>
      <h2>Contactanos</h2>
      <form>
        <label>Nombre</label>
        <input type='text' placeholder='Nombre'/>
        <label>Apellido</label>
        <input type='text' placeholder='Apellido'/>
        <label>Correo</label>
        <input type='email' placeholder='Email'/>
        <label>Mensaje</label>
        <textarea/>
      </form>
    </>
  )
};
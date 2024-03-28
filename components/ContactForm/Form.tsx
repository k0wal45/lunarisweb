'use client'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',

  })

  const {
    name,  
    email,
    phone,
    message,

  } = formData

  const onMutate = (e: any) => {
    
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    
  }



  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (e.target.validate.checked) {
      toast.error('Cos poszło nie tak, Skontaktuj się mailowo: lunarisweb.pl@gmail.com', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return

    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })

    toast.success('Sukces', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });


  }

  
  return (
    <form action="" className="p-4 border-2 border-base rounded-xl text-white w-full flex-1 h-min max-w-[40rem] bg-black" onSubmit={handleSubmit}>

      <p className="text-lg font-bold text-secondary">Masz pytania?</p>
      <p className="text-4xl font-bold">Napisz tutaj!</p>
      
      <label htmlFor="name" className='translate-y-[50%] translate-x-[1rem] p-2 bg-black w-min whitespace-nowrap rounded-lg'>Imię i Nazwisko</label>
      <input 
        type="text" name='name' 
        id='name' 
        onChange={onMutate} value={name}
        className='w-full bg-black p-4 border-2 border-base rounded-xl focus:bg-black autofill:bg-black outlne-white ring-white' 
        required
      /> 
  
      <label htmlFor="email" className='translate-y-[50%] translate-x-[1rem] p-2 bg-black w-min whitespace-nowrap rounded-lg'>Twój e-mail</label>
      <input 
        type="email" name='email' 
        id='email' 
        onChange={onMutate} value={email}
        className='w-full bg-black p-4 border-2 border-base rounded-xl focus:bg-black autofill:bg-black outlne-white ring-white' 
        required
      /> 
  
      <label htmlFor='phone' className='translate-y-[50%] translate-x-[1rem] p-2 bg-black w-min whitespace-nowrap rounded-lg'>Numer Telefonu</label>
      <input 
        type="number" name='phone' 
        id='phone' 
        onChange={onMutate} value={phone}
        className='w-full bg-black p-4 border-2 border-base rounded-xl focus:bg-black autofill:bg-black outlne-white ring-white' 
        required
      /> 
      
  
      <label htmlFor='message' className='translate-y-[50%] translate-x-[1rem] p-2 bg-black w-min whitespace-nowrap rounded-lg'>Wiadomość</label>
      <textarea 
        name='message' 
        id='message' 
        onChange={onMutate} value={message}
        className='w-full h-48 bg-black p-4 border-2 border-base rounded-xl focus:bg-black autofill:bg-black outlne-white ring-white' 
        required
      /> 

      <input type="checkbox" name="validate" id="validate" className='hidden' />
  
      <button type='submit' className='p-4 px-8 bg-gradient-to-r from-secondary to-primary rounded-xl text-white font-bold grid place-items-center text-xl w-full my-4' > Prześlij</button>


      <ToastContainer />

      
    </form>
  )
}

export default Form

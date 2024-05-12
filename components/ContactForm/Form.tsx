'use client'

import { useState } from 'react';
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
    <form 
      className="p-4 border-2 border-base rounded-xl w-[90vw] lg:w-[40rem] bg-white" 
      onSubmit={handleSubmit}
    >

      <p className="text-lg font-bold text-secondary">Masz pytania?</p>
      <p className="text-4xl font-bold">Napisz tutaj!</p>
      
      <label htmlFor="name" className='translate-y-[50%] translate-x-[1rem] p-2 bg-white w-min whitespace-nowrap rounded-lg'>Imię i Nazwisko</label>
      <input 
        type="text" name='name' 
        id='name' 
        onChange={onMutate} value={name}
        className='w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white' 
        required
      /> 
  
      <label htmlFor="email" className='translate-y-[50%] translate-x-[1rem] p-2 bg-white w-min whitespace-nowrap rounded-lg'>Twój e-mail</label>
      <input 
        type="email" name='email' 
        id='email' 
        onChange={onMutate} value={email}
        className='w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white' 
        required
      /> 
  
      <label htmlFor='phone' className='translate-y-[50%] translate-x-[1rem] p-2 bg-white w-min whitespace-nowrap rounded-lg'>Numer Telefonu</label>
      <input 
        type="number" name='phone' 
        id='phone' 
        onChange={onMutate} value={phone}
        className='w-full bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white' 
        required
      /> 
      
  
      <label htmlFor='message' className='translate-y-[50%] translate-x-[1rem] p-2 bg-white w-min whitespace-nowrap rounded-lg'>Wiadomość</label>
      <textarea 
        name='message' 
        id='message' 
        onChange={onMutate} value={message}
        className='w-full h-48 bg-white p-4 border-2 border-base rounded-xl focus:bg-white autofill:bg-white outlne-white ring-white' 
        required
      /> 

      <input type="checkbox" name="validate" id="validate" className='hidden' />
  
      <button type='submit' className='p-4 px-8 bg-gradient-to-r from-secondary to-primary rounded-md text-white font-bold grid mt-4 place-items-center text-xl w-full transition-all duration-300
      hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_black] 
      active:translate-x-[0px] active:translate-y-[0px] active:shadow-none' > Prześlij</button>


      <ToastContainer />

      
    </form>
  )
}

export default Form

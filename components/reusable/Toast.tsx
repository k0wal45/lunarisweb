'use client'
import React, { useEffect, useState } from 'react'

const Toast = ({message, status, show}: {message: string, status: string, show: any}) => {

  const [color, setColor] = useState('bg-primary')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(status === 'error') {
      setColor('bg-red-500')
    }
  
    if(status === 'success') {
      setColor('bg-lime-600')
    }
  }, [status])

  useEffect(() => {

    if (show) {
      setVisible(true)
    }

  }, [show])

  return (
    <div className={`${color} p-4 w-72 fixed top-[3rem] right-12 text-white font-bold rounded-xl z-[90] ${visible ? '' : 'hidden'}`}>
      {message}
    </div>
  )
}

export default Toast

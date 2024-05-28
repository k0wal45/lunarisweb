import React from 'react'
import WhoAmIImage from './WhoAmIImage'
import WhoAmIDescription from './WhoAmIDescription'

const WhoAmI = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-center justify-center overflow-hidden w-full my-12 p-4">
      <WhoAmIImage />
      <WhoAmIDescription />
    </section>
  )
}

export default WhoAmI
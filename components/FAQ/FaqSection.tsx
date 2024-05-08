import React from 'react'
import FAQ from './FAQ'
import Description from './Description'

const FaqSection = () => {
  return (
    <section className="flex gap-8 flex-col-reverse lg:flex-row items-center justify-center lg:max-w-[90vw] mx-auto p-4 mt-8">
      <FAQ />
      <Description />
    </section>
  )
}

export default FaqSection

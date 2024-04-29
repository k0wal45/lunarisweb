import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="flex flex-col pt-32 p-4">
        
				{children}
			<section className=''>
					
			</section>
    </main>
  )
}

export default layout
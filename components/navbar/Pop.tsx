'use client'
import { SlArrowDown } from "react-icons/sl";
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'



export default function Pop() {
  return (
    <Popover>
      <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none">
        <span className='text-lg font-normal flex items-center justify-center gap-2'>Solutions <SlArrowDown /></span>

      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi qui corporis asperiores amet et? Fugit quos fuga asperiores harum dolorem.</p>
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
      </Transition>
    </Popover>
  )
}

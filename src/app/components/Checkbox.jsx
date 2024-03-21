import React from 'react'
import Image from 'next/image';
const Checkbox = ({label}) => {
  return (
    <div class="inline-flex items-center gap-2">
        <label class="relative flex items-center rounded-full cursor-pointer" htmlFor="check">
            <input type="checkbox" class="bg-[#C1C1C1] before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900"
            id="check" />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <Image src="/tick.svg" alt='tick' width={15} height={15}/>
            </span>
        </label>
        <label class="mt-px font-light text-[#000000] cursor-pointer select-none" htmlFor="check">
            {label}
        </label>
    </div> 
  )
}

export default Checkbox

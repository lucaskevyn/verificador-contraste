'use client'
import { useState } from 'react'

export default function Seletor() {
  const [cor, setCor] = useState('#FFFFFF')

  function mudarCor(e: any) {
    setCor(e.target.value)
  }

  return (
    <div className="">
      <div className='size-10' style={{ backgroundColor: cor }}></div>
      <div className='flex w-64 h-11 border-2'>
        <input type="text" name="" id="" className='h-full w-full' onChange={mudarCor} value={cor} />
        <input type="color" name="" id="" className='h-full w-12 cursor-pointer border-l-2' onChange={mudarCor} value={cor} />
      </div>
    </div>
  );
}
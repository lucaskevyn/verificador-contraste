'use client'
import Seletor from "./components/Seletor";
import { useState } from "react";

export default function Home() {
  const [cores, setCores] = useState({
    corTexto: '#ffffff',
    corFundo: '#000000'
  })

  function mudarCor(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setCores((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className='w-full justify-items-center'>
      <div className='size-10' style={{ backgroundColor: cores.corTexto }}></div>

      <Seletor titulo='Cor do Texto' nome='corTexto' cor={cores.corTexto} onChange={mudarCor} />
    </main>
  );
}

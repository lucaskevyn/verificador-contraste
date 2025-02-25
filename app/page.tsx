'use client'
import Seletor from "./components/Seletor";
import { useState } from "react";

export default function Home() {
  const [cores, setCores] = useState({
    texto: '#ffffff',
    fundo: '#000000'
  })

  const rgbTexto = hexParaRgb(cores.texto)
  const rgbFundo = hexParaRgb(cores.fundo)

  const lumTexto = luminancia(rgbTexto)
  const lumFundo = luminancia(rgbFundo)

  const contraste = lumTexto > lumFundo
    ? ((lumTexto + 0.05) / (lumFundo + 0.05))
    : ((lumFundo + 0.05) / (lumTexto + 0.05))

  function mudarCor(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setCores((prev) => ({ ...prev, [name]: value }))
  }

  function hexParaRgb(hex: string) {
    var regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(regex, function (m, r, g, b) { return r + r + g + g + b + b })

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 }
  }

  function luminancia(rgb: { r: number, g: number, b: number }) {
    var a = [rgb.r, rgb.g, rgb.b].map(function (v) {
      v /= 255
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    console.log(`teste:${a}`)
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
  }

  return (
    <main className='w-full justify-items-center'>
      <div className='size-10' style={{ backgroundColor: cores.texto }}></div>
      <div className='size-10' style={{ backgroundColor: cores.fundo }}></div>
      <Seletor titulo='Cor do Texto' nome='texto' cor={cores.texto} lum={lumTexto} onChange={mudarCor} />
      <Seletor titulo='Cor do Fundo' nome='fundo' cor={cores.fundo} lum={lumFundo} onChange={mudarCor} />
      <div>Contraste: {contraste}</div>
    </main>
  );
}

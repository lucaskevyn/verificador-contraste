"use client";
import Seletor from "./components/Seletor";
import { useState } from "react";
import { Star } from "lucide-react";

export default function Home() {
  const [cores, setCores] = useState({
    texto: "#ffffff",
    fundo: "#375081",
  });

  const rgbTexto = hexParaRgb(cores.texto);
  const rgbFundo = hexParaRgb(cores.fundo);

  const lumTexto = luminancia(rgbTexto);
  const lumFundo = luminancia(rgbFundo);

  const contraste =
    lumTexto > lumFundo
      ? (lumTexto + 0.05) / (lumFundo + 0.05)
      : (lumFundo + 0.05) / (lumTexto + 0.05);

  const nivel = contraste > 7 ? 3 : contraste > 4.5 ? 2 : contraste > 3 ? 1 : 0;

  function mudarCor(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCores((prev) => ({ ...prev, [name]: value }));
  }

  function hexParaRgb(hex: string) {
    const regex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(regex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  function luminancia(rgb: { r: number; g: number; b: number }) {
    const a = [rgb.r, rgb.g, rgb.b].map(function (v) {
      v /= 255;
      return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  return (
    <main className="w-full h-screen justify-center items-center flex flex-col">
      <div className="flex flex-col w-3/5 gap-6 font-bold">
        <h1 className="w-full text-6xl flex flex-col text-azulTexto">
          VERIFICADOR
          <br />{" "}
          <span className="text-5xl font-normal tracking-tight text-azulClaroTexto">
            DE CONTRASTE
          </span>
        </h1>
        <div className="flex rounded-2xl border">
          <div className="flex flex-col w-1/2 p-6 gap-8">
            <div className="flex gap-4">
              <Seletor
                titulo="Cor do Texto"
                nome="texto"
                cor={cores.texto}
                lum={lumTexto}
                onChange={mudarCor}
              />
              <Seletor
                titulo="Cor do Fundo"
                nome="fundo"
                cor={cores.fundo}
                lum={lumFundo}
                onChange={mudarCor}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="">Contraste</span>
              <div className="flex flex-col h-64 gap-1  text-lg">
                <div
                  className={`flex h-3/5 rounded-t-2xl p-8 justify-between items-center ${
                    nivel === 3
                      ? "bg-verde text-verdeTexto"
                      : nivel === 2
                      ? "bg-amarelo text-amareloTexto"
                      : "bg-vermelho text-vermelhoTexto"
                  }`}
                >
                  <span className="text-6xl">
                    {" "}
                    {Math.round(contraste * 100) / 100}{" "}
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <span>
                      {nivel === 3
                        ? "Ótimo"
                        : nivel === 2
                        ? "Bom"
                        : nivel === 1
                        ? "Ruim"
                        : "Muito Ruim"}
                    </span>
                    <div className="flex gap-1">
                      <Star
                        className={nivel > 0 ? "fill-current" : undefined}
                      ></Star>
                      <Star
                        className={nivel > 1 ? "fill-current" : undefined}
                      ></Star>
                      <Star
                        className={nivel > 2 ? "fill-current" : undefined}
                      ></Star>
                    </div>
                  </div>
                </div>
                <div className="flex h-2/5 gap-1">
                  <div
                    className={`flex w-1/2 rounded-bl-2xl p-8 justify-between items-center ${
                      nivel === 3
                        ? "bg-verde text-verdeTexto"
                        : nivel === 2
                        ? "bg-amarelo text-amareloTexto"
                        : "bg-vermelho text-vermelhoTexto"
                    }`}
                  >
                    Texto Pequeno
                    <span className="">
                      {nivel == 3 ? "AAA" : nivel === 2 ? "AA" : ""}
                    </span>
                  </div>
                  <div
                    className={`flex w-1/2 rounded-br-2xl p-8 justify-between items-center ${
                      nivel > 1
                        ? "bg-verde text-verdeTexto"
                        : nivel === 1
                        ? "bg-amarelo text-amareloTexto"
                        : "bg-vermelho text-vermelhoTexto"
                    }`}
                  >
                    Texto Grande
                    <span>{nivel > 1 ? "AAA" : nivel === 1 ? "AA" : ""}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col justify-center w-1/2 rounded-r-2xl p-12 gap-3`}
            style={{ backgroundColor: cores.fundo, color: cores.texto }}
          >
            <h2 className="text-3xl">Como funciona?</h2>
            <div className="flex flex-col text-lg font-light gap-3">
              <p>
                O Verificador de Contraste calcula a relação de contraste entre
                a cor do texto e a cor de fundo, indicando o nível de
                acessibilidade conforme as{" "}
                <a
                  href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
                  className="hover:underline"
                >
                  diretrizes <i>WCAG 2.2</i>
                </a>
                .
              </p>
              <p>
                Texto pequeno {"->"} abaixo de 18pt
                <br />
                Texto grande {"->"} 18pt normal ou 14pt em{" "}
                <span className="font-bold">negrito</span>
              </p>
              <p>
                Desenvolvido por{" "}
                <a
                  href="https://github.com/lucaskevyn"
                  className="font-bold hover:underline"
                >
                  Lucas Fernandes
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

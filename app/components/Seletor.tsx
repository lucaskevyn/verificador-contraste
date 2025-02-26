interface SeletorProps {
  titulo: string
  nome: string
  cor: string
  lum: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Seletor({ titulo, nome, cor, lum, onChange }: SeletorProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold">{titulo}</span>
      <div className='group flex h-11 border border-gray-300 rounded-lg focus-within:border-lime-600 hover:border-lime-600'>
        <input type='text' name={nome} className='h-full w-full pl-3 rounded-l-lg focus:outline-none font-medium' onChange={onChange} value={cor} />
        <input type='color' name={nome} className='h-full w-12 cursor-pointer border-l-2 rounded-r-lg' onChange={onChange} value={cor} />
      </div>
      <div className="font-medium">Luminância: {Math.round(lum * 100) / 100}</div>
    </div>
  );
}
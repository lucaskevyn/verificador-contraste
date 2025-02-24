interface SeletorProps {
  titulo: string
  nome: string
  cor: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Seletor({ titulo, nome, cor, onChange }: SeletorProps) {
  return (
    <div className="">
      {titulo}
      <div className='group flex w-64 h-11 border border-gray-300 rounded-lg focus-within:border-lime-600 hover:border-lime-600'>
        <input type='text' name={nome} className='h-full w-full pl-3 rounded-lg focus:outline-none' onChange={onChange} value={cor} />
        <input type='color' name={nome} className='h-full w-12 cursor-pointer border-l-2 rounded-r-lg' onChange={onChange} value={cor} />
      </div>
    </div>
  );
}
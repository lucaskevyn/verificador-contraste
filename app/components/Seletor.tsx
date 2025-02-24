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
      <div className='flex w-64 h-11 border-2 rounded-md'>
        <input type='text' name={nome} className='h-full w-full pl-3' onChange={onChange} value={cor} />
        <input type='color' name={nome} className='h-full w-12 cursor-pointer border-l-2' onChange={onChange} value={cor} />
      </div>
    </div>
  );
}
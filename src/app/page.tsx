'use client'

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Home() {

  const [input, setInput] = useState('');
  const [cep, setCep]     = useState({});

  async function search() {
    if(input === '') {
      alert("Preencha algum CEP!");

      return;
    }

    const data = await fetch(`https://viacep.com.br/ws/${input}/json`);

    const response = await data.json();

    setCep(response);

    console.log(cep);

    setInput('');
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#121214]">
      <h1 className="text-white text-4xl font-semibold">Ache o Endereço através do CEP</h1>

      <div className='bg-zinc-700 p-4 my-9 mx-0 rounded flex'>
        <input 
        className='bg-transparent border-none text-white text-xl mr-2 outline-none hover:text-gray-300'
        type="text" 
        placeholder="Digite seu CEP" 
        value={input} 
        onChange={ (e) => setInput(e.target.value) } />

        <button className='bg-transparent border-none flex justify-center items-center cursor-pointer transition-transform' onClick={search}>
          <Search className='text-white hover:scale-110' />
        </button>
      </div>

      {Object.keys(cep).length > 1 && (
        <div className='flex justify-center items-start flex-col text-white bg-violet-700 w-96 px-7 rounded'>
          <h2 className='my-4 font-bold text-3xl'>CEP: { cep.cep }</h2>
          <span className='mb-4 font-bold'>{ cep.logradouro }</span>
          <span className='mb-4 font-bold'>Complemento: { cep.complemento }</span>
          <span className='mb-4 font-bold'>Bairro: { cep.bairro }</span>
          <span className='mb-4 font-bold'>{ cep.localidade } - { cep.uf }</span>
        </div>
      )}
    </main>
  )
}

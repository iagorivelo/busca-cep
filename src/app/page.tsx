'use client'

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Home() {

  const [input, setInput] = useState('');

  // const data = await fetch('https://viacep.com.br/ws/50070075/json');
  
  // const result = await data.json();
  
  // console.log(result);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-violet-800">
      <h1 className="text-white text-4xl font-semibold">Ache o Endereço através do CEP</h1>

      <div className='bg-zinc-700 p-4 my-9 mx-0 rounded flex'>
        <input 
        className='bg-transparent border-none text-white text-xl mr-2 outline-none hover:text-gray-300'
        type="text" 
        placeholder="Digite seu CEP" 
        value={input} 
        onChange={ (e) => setInput(e.target.value) } />

        <button className='bg-transparent border-none flex justify-center items-center cursor-pointer transition-transform'>
          <Search className='text-white' />
        </button>
      </div>
    </main>
  )
}

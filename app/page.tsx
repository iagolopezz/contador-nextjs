'use client';

import { useState } from 'react';

export default function Home() {
  const [contador, setContador] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-6">
      <h1 className="text-3xl font-bold">Contador en Next.js</h1>
      <p className="text-xl">Valor actual: {contador}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setContador(contador - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          - Restar
        </button>
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Sumar
        </button>
      </div>
    </main>
  );
}

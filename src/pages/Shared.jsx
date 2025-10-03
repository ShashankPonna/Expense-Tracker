import React, { useState } from 'react'
import Lended from '../components/Lended';
import Borrowed from '../components/Borrowed';

const Shared = () => {
  const [flag, setflag] = useState(0)
  return (
    <>
      <div className="head border-l-8 border-blue-700 text-[22px] p-3 px-10 m-2 text-blue-400 font-semibold">Shared Expense</div>
      <div className="expense justify-between items-center">

        <div className='flex justify-center  gap-5 text-2xl px-20 py-5 text-white font-semibold'>
          <button className='px-4 py-2 rounded-full bg-red-500  hover:bg-red-700 ' onClick={() => { setflag(1) }}>Lend</button>
          <button className='px-4 py-2 rounded-full bg-green-500  hover:bg-green-600' onClick={() => { setflag(2) }}>Borrowed</button>
        </div>

        {flag==0 ? "" : flag==1 ? <Lended /> : <Borrowed/>}

      </div>
    </>
  )
}

export default Shared
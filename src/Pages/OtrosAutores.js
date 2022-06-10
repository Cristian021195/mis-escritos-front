import React from 'react'
import { CustomLoader } from '../Components/CustomLoader';
import { Escrito } from '../Components/Escrito'
import { useFetchAlt } from '../Hooks/useFetch';

export const OtrosAutores = () => {
  const {data,errors,loading} =  useFetchAlt('https://www.poemist.com/api/v1/randompoems');
  return (
    <div className='animate__animated animate__fadeInUp'>
      <h1 className='text-center my-6'>Otros Autores</h1>
      <section className='d-flex justify-content-center row p-4'>
        {loading === true ? <CustomLoader/> : data.length === 0 && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {errors === true && <h1 className='text-center my-6'>¡Sin datos!</h1>}
        {data.map((res, res_i)=><Escrito 
          key={res_i} 
          id_escrito={res_i}
          escrito={res.content}
          fecha={'Sin fecha'}
          autor={res.poet.name}
          contacto={res.poet.url}
          titulo={res.title}/>)}
        
      </section>
    </div>
  )
}

/*



*/

import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/es';

export const Escrito = ({id_escrito, escrito, fecha, autor, contacto, titulo}) => {
  const location = useLocation();
  
  return (//text-center escrito col-md-4 col-12 mb-4 me-2 ms-2 bg-dark p-4
    <article className='w-s-pre m-2 p-3 col-md-3 text-center escrito bg-dark'>
        <h1 className='mb-4'>{titulo}</h1>
        <p>"{escrito}"</p>
        <br/>
        {location.pathname.includes('escritos') ? <Link to={`/escritos/${id_escrito}`} className='leaf'>Abrir</Link> : <></>}
        <br/>
        <br/>
        <small className='mt-4'><b>Autor: &nbsp;</b>{autor}, {moment(fecha).format('dddd Do MMMM YYYY hh:mm')}</small><br/>
        <small className='b-w'><b>Contacto: &nbsp;</b><a href={contacto} target='_blank' alt={`Link a website o red social de ${contacto}`} rel='noopener noreferrer' > {contacto}</a></small>
    </article>
  )
}
import React from 'react'

const Contact = () => {
  return(
    <div className='contact'>
      <h1 className='title'>Contact</h1>
      <div className='body'>
        <p>
          Pulse Networks Limited
        </p>
        <ul>
          <li>PO Box 178, Orewa 0946</li>
          <li>Phone - 64 09 974 4350</li>
          <li>Fax - 64 09 426 0914</li>
          <a href='mailto:info@pulse.co.nz'>
            <li>info@pulse.co.nz</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Contact

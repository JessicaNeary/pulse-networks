import React from 'react'
import { Link } from 'react-router'

const Projects = props => {
  return (
    <div className='projects'>

      <h1 className='title'>Projects</h1>

      <div className='body'>
        <p>
          Pulse Networks has completed many projects over the years since its conception in 1995; these projects cover a diverse range and have required a wide knowledge of Telecommunications technologies and practices. In all instances team work has been behind our success whether it be our staff slotting into the clients team or Pulse pulling together internal and external resources to provide a turnkey solution.
        </p>
        <p>
          We like to spend time with our clients developing a brief and formulating a scope of works that clearly defines project goals and outcomes. No two projects are completely alike and so it is important not to second guess the client but listen carefully while providing them with the benefit of our knowledge and experience.
        </p>
        <p>
          Pulse Networks works with other companies and external contractors, maintaining a close relationship that benefits all. This allows us to ramp up quickly for big projects and demobilise when the project comes to an end.
        </p>
      </div>

      <div className='docs'>
        <a className='link' target='_blank' href='docs/2Degrees-Cell-Site-Design.pdf'>2Degrees Cell Site Planning and Design</a>
        <a className='link' target='_blank' href='docs/PD-CTL-FTTH-Design-Rev2.pdf'>Citylink Auckland Fibre Network Design and Build</a>
        <a className='link' target='_blank' href='docs/PD-VCL-MD-Install.pdf'>Vector Communications Microduct Installation</a>
        <a className='link' target='_blank' href='docs/PD-ENL-Material-Supply.pdf'>Enable Networks Fibre Network Material Supply</a>
        <a className='link' target='_blank' href='docs/PD-TSL-Fibre-Design.pdf'>Vodafone CBD Fibre Network Design</a>
      </div>

    </div>
  )
}

export default Projects

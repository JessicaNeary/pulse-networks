import React from 'react'
import { Link } from 'react-router'

const Projects = props => {
  return(
    <div className='Projects'>
      <Link to='projects'>
        <h1 className='title'>Projects</h1>
      </Link>
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
      <div className='nav'>
        <Link to='projects/1'>Fibre</Link>
        <Link to='projects/2'>Telephony</Link>
        <Link to='projects/3'>CATV</Link>
        <Link to='projects/4'>Radio</Link>
        <Link to='projects/5'>Other</Link>
      </div>
      {props.children}
    </div>
  )
}

export default Projects

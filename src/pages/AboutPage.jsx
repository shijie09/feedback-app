import React from 'react'
import Card from '../shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
      <Card>
        <div className='about'>AboutPage</div>
        <p>This is a React app to leave feedback for our service</p>
        <p>
            Version:1.0.0
        </p>
        <Link to='/'>Back To Home</Link>
    </Card>
  )
}

export default AboutPage
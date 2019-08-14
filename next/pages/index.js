import { useState } from 'react'
import Card from '../components/card'

function Home() {
  const [highlight, setHighlight] = useState(false)
  return (
    <div className="container">
      <Card
        highlight={highlight}
        heading="Card Heading"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget urna eu
        augue ultrices tempor in ut risus. Ut posuere nisi eu egestas maximus.
        Vivamus in viverra mauris. Nunc pulvinar hendrerit consectetur. Morbi
        sodales euismod viverra. Cras et mattis nunc, accumsan suscipit nisi.
        Donec risus ipsum, malesuada vel neque nec, venenatis egestas risus. Sed
        fermentum semper sapien at sodales. Maecenas mollis libero at ipsum
        accumsan porttitor"
        button={{ url: '#', text: 'Click me!' }}
      />
      <a
        className="button"
        href="#"
        onClick={e => {
          e.preventDefault()
          setHighlight(!highlight)
        }}>
        Highlight
      </a>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          width: 100vw;
        }

        .button {
          color: #3498db;
          display: block;
          font-family: sans-serif;
          font-size: 20;
          margin: 40px 20px auto;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}

export default Home

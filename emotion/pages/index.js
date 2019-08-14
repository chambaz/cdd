import { useState } from 'react'
import styled from '@emotion/styled'
import Card from '../components/card'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  width: '100vw'
})

const Button = styled.a({
  color: '#3498db',
  display: 'block',
  fontFamily: 'sans-serif',
  fontSize: 20,
  margin: '40px 20px auto',
  textTransform: 'uppercase'
})

function Home() {
  const [highlight, setHighlight] = useState(false)
  return (
    <Container>
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
      <Button
        href="#"
        onClick={e => {
          e.preventDefault()
          setHighlight(!highlight)
        }}>
        Highlight
      </Button>
    </Container>
  )
}

export default Home

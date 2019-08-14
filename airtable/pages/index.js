import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Card from '../components/card'
import data from '../lib/data'

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
  const [list, setList] = useState([])

  useEffect(() => data.fetch(setList), [])

  const items = list.map((item, key) => (
    <li key={key}>{`👋 ${item.get('Name')}`}</li>
  ))

  return (
    <Container>
      <Card
        heading="Hello there"
        body={<ul>{items}</ul>}
        button={{ url: '#', text: 'Click me!' }}
      />
      <Button
        href="#"
        onClick={e => {
          e.preventDefault()
          data.fetch(setList)
        }}>
        Fetch data!
      </Button>
    </Container>
  )
}

export default Home

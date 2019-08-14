import { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'
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
  const [body, setBody] = useState('⌛Loading cat facts...')

  useEffect(getFacts, [])

  function getFacts() {
    setBody('⌛Loading cat facts...')

    fetch('http://localhost:3000/api/facts')
      .then(response => response.json())
      .then(json => {
        const num = randomNum()
        let bodyTmp = ''
        json.all.slice(num, num + 3).forEach(fact => {
          bodyTmp += `${fact.text} `
        })
        setBody(bodyTmp)
      })
  }

  return (
    <Container>
      <Card heading="😸 Cat Facts" body={body} />
      <Button
        href="#"
        onClick={e => {
          e.preventDefault()
          getFacts()
        }}>
        More Facts
      </Button>
    </Container>
  )
}

function randomNum() {
  return Math.floor(Math.random() * 100)
}

export default Home

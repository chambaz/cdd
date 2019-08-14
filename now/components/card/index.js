import styled from '@emotion/styled'

const Container = styled.div({
  background: '#fff',
  boxShadow: '0 10px 40px 0 rgba(25, 38, 45, 0.2)',
  color: '#000',
  fontFamily: 'sans-serif',
  margin: 'auto auto 0',
  minWidth: 320,
  maxWidth: 320,
  padding: 30,
  transition: '0.3s',

  [':hover']: {
    transform: 'scale(1.03)'
  }
})

const Heading = styled.h2({
  margin: '0 0 20px'
})

const Body = styled.p({
  lineHeight: 1.5,
  margin: '0 0 20px'
})

function Card(props) {
  return (
    <Container>
      <Heading>{props.heading}</Heading>
      <Body>{props.body}</Body>
    </Container>
  )
}

export default Card

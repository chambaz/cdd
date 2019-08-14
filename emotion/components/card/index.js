import styled from '@emotion/styled'

const Container = styled.div(props => ({
  background: props.highlight ? '#3498db' : '#fff',
  boxShadow: '0 10px 40px 0 rgba(25, 38, 45, 0.2)',
  color: props.highlight ? '#fff' : '#000',
  fontFamily: 'sans-serif',
  margin: 'auto auto 0',
  maxWidth: 320,
  padding: 30,
  transition: '0.3s',

  [':hover']: {
    transform: 'scale(1.03)'
  }
}))

const Heading = styled.h2({
  margin: '0 0 20px'
})

const Body = styled.p({
  lineHeight: 1.5,
  margin: '0 0 20px'
})

const Button = styled.a(props => ({
  background: props.highlight ? '#fff' : '#3498db',
  border: 'solid 2px',
  borderColor: props.highlight ? '#3498db' : '#fff',
  color: props.highlight ? '#3498db' : '#fff',
  display: 'inline-block',
  margin: 0,
  padding: '10px 20px',
  textDecoration: 'none',
  transition: '0.3s',

  [':hover']: {
    background: props.highlight ? '#3498db' : '#fff',
    borderColor: props.highlight ? '#fff' : '#3498db',
    color: props.highlight ? '#fff' : '#3498db'
  }
}))

function Card(props) {
  return (
    <Container highlight={props.highlight}>
      <Heading>{props.heading}</Heading>
      <Body>{props.body}</Body>
      <Button highlight={props.highlight} href={props.button.url}>
        {props.button.text}
      </Button>
    </Container>
  )
}

export default Card

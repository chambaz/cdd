import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Card from '../components/card'

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  height: '100vh',
  width: '100vw'
})

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      const entries = await client.getEntries({
        content_type: 'blogPost'
      })

      if (entries.items) {
        console.log('items', entries.items)
        setPosts([...entries.items])
      }
    }
    getPosts()
  }, [])

  useEffect(() => {
    console.log(posts)
  })

  return (
    <Container>
      {posts.map((post, key) => {
        return (
          <Card
            heading={post.fields.title}
            body={post.fields.body}
            button={{ url: '#', text: 'Click me!' }}
          />
        )
      })}
    </Container>
  )
}

export default Home

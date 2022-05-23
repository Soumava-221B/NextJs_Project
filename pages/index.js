import Head from 'next/head'
import Main from '../components/Main'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Post from '../components/Post'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Soumava | Demo Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Post />
      <Message />
    </div>
  )
}

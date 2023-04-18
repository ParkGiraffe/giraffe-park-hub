import Head from 'next/head'
import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>GiraffeHub</title>
        <meta name="GiraffeHub" content="Welcome to Giraffe Park" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage/>
      </main>
    </>
  )
}

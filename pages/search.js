import Head from 'next/head'
import Image from 'next/image'
import Mobilenav from '../components/Mobilenav'
import Sidenav from '../components/Sidenav'
import Topnav from '../components/Topnav'
import SearchComponent from '../components/SearchComponent'

export default function Home() {
  return (
    <div className="font-vietnam" >
      <Head>
        <title>Clone</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/spotify.ico" />
      </Head>
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav />
          <SearchComponent />
        </div>
      </div>
     
      

      {/*Top Nav*/}

      {/*Feed*/}

    </div>
    
  )
}
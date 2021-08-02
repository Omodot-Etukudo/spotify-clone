import Head from 'next/head'
import Image from 'next/image'
import MediaController from '../components/MediaController'
import Mobilenav from '../components/Mobilenav'
import Sidenav from '../components/Sidenav'
import Topnav from '../components/Topnav'
import Feed from '../components/Feed'

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
          <Topnav className=" hidden" />
          <Feed className=" lg:-z-10"/>
        </div>
        <MediaController/>
      </div>
     
      

      {/*Top Nav*/}

      {/*Feed*/}

    </div>
    
  )
}

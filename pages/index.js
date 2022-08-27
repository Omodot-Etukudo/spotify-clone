import Head from 'next/head'
import MediaController from '../components/MediaController'
import Mobilenav from '../components/Mobilenav'
import Sidenav from '../components/Sidenav'
import Feed from './Feed'

export default function Home() {
  return (
    <div className="font-vietnam" >
      <Head>
        <title>Clone &#8211; Web Player</title>
        <meta name="description" content="Spotify Clone" author="Omodot EtukudoS" />
        <link rel="icon" href="/spotify.ico" />
      </Head>
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">       
          <Feed className=" lg:-z-10"/>
        </div>
        <MediaController/>
      </div>
     
      

      {/*Top Nav*/}

      {/*Feed*/}

    </div>
    
  )
}

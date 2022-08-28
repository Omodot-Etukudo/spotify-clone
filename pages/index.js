import Head from 'next/head'
import MediaController from '../components/MediaController'
import Mobilenav from '../components/Mobilenav'
import Sidenav from '../components/Sidenav'
import Feed from './Feed'

export default function Home() {
  return (
    <div className="font-vietnam" >
      
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

import Head from 'next/head'
import Image from 'next/image'
import PodcastComponent from '../../components/CollectionWrappers/PodcastComponent'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'

function podcasts() {
    return (
        <div className="font-vietnam" >
      <Head>
        <title>Clone &#8211; Web Player</title>
        <meta name="description" content="Spotify Clone" />
        <link rel="icon" href="/spotify.ico" />
      </Head>
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav isCollection />
          <PodcastComponent />
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default podcasts

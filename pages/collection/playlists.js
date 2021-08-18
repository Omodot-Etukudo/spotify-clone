import Head from 'next/head'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'
import PlaylistComponent from '../../components/PlaylistComponent'
function playlists() {
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
          <Topnav tabClass="flex" className="hidden" />
          <PlaylistComponent />
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default playlists

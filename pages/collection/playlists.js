import Head from 'next/head'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'
import PlaylistComponent from '../../components/CollectionWrappers/PlaylistComponent'
import Footer from '../../components/Footer'
function playlists() {
    return (
    <div className="font-vietnam" >
     
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav isCollection />
          <PlaylistComponent />
          <Footer/>
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default playlists

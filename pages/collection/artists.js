import Head from 'next/head'
import Image from 'next/image'
import ArtistComponent from '../../components/CollectionWrappers/ArtistComponent'
import PodcastComponent from '../../components/CollectionWrappers/PodcastComponent'
import Footer from '../../components/Footer'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'

function artists() {
    return (
        <div className="font-vietnam" >
      
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav isCollection />
          <ArtistComponent/>
          <Footer/>
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default artists

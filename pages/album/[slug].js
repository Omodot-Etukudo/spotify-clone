import Head from 'next/head'
import Image from 'next/image'
import DefaultAlbum from '../../components/DefaultAlbum'
import DefaultPlaylist from '../../components/DefaultPlaylist'
import Footer from '../../components/Footer'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'

function album() {
    return (
        <div className="font-vietnam" >
     
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav />
          <DefaultAlbum/>
          <Footer/>
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default album

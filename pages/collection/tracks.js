import LikedComponent from '../../components/CollectionWrappers/LikedComponent'
import Footer from '../../components/Footer'
import MediaController from '../../components/MediaController'
import Mobilenav from '../../components/Mobilenav'
import Sidenav from '../../components/Sidenav'
import Topnav from '../../components/Topnav'

function tracks() {
    return (
        <div className="font-vietnam" >
     
      {/*Bottom Nav*/}

      <Mobilenav />

      {/*Side Nav*/}
      <div>
        <div className="lg:grid lg:col-span-2"><Sidenav/></div>
        <div className="lg:grid lg:col-span-9">
          <Topnav />
          <LikedComponent/>
          <Footer/>
        </div>
        <MediaController/>
      </div>
     

    </div>
    )
}

export default tracks

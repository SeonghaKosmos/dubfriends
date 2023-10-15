import './page.css'
import './header.css'
import './divider-line.css'
import Navbar from "./nav-bar/NavBar";
import Map from './map/Map';




export default function Home() {

  return (

      <div className="main">
        <header className='thick-header' style={{ padding: '10px' }}>
          <div className='logo-container'>
            <img src='/logo/logo_uw_colors.svg' style={{ height: '50px' }} />
            <img src='/logo/Dub_Friends.svg' style={{ height: '40px' }} />
          </div>
        </header>
        <hr className='divider-line' />
        <Map />
        <Navbar />
      </div>
    

  );
}

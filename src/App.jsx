import React from 'react'
import './App.css'
import Landingpage from './stores/pages/Landingpage'
import {Routes ,Route} from 'react-router-dom'
import AcPage from "./stores/pages/AcPage";
import MobilePage from "./stores/pages/MobilePage";
import BooksPage from "./stores/pages/BooksPage";
import ComputerPage from "./stores/pages/ComputerPage";
import FridgePage from "./stores/pages/FridgePage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/KitchenPage";
import MenPage from "./stores/pages/MenPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import TvPage from "./stores/pages/TvPage";
import WatchPage from "./stores/pages/WatchPage";
import WomenPage from "./stores/pages/WomenPage";
import MobileSingle from './singles/MobileSingle';
import AcSingle from './singles/AcSingle';
import BooksSingle from './singles/BooksSingle';
import ComputerSingle from './singles/ComputerSingle';
import FridgeSingle from './singles/FridgeSingle';
import FurnitureSingle from './singles/FurnitureSingle';
import KitchenSingle from './singles/KitchenSingle';
import MenSingle from './singles/MenSingle';
import SpeakerSingle from './singles/SpeakerSingle';
import TvSingle from './singles/TvSingle';
import WatchSingle from './singles/WatchSingle';
import WomenSingle from './singles/WomenSingle';
import UserCart from './stores/UserCart';
import Login from './login/Login';
import Profile from './login/LoginList/Profile';
import Orders from './login/LoginList/Orders';
import Rewards from './login/LoginList/Rewards';
import GiftCard from './login/LoginList/GiftCard';
import Wishlist from './login/LoginList/Wishlist';




const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Landingpage />}/>
        <Route path="/ac" element={<AcPage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/computer" element={<ComputerPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/women" element={<WomenPage />} />

        <Route path='/mobile/:id' element = {<MobileSingle/>}/>
        <Route path='/ac/:id' element={<AcSingle/>}/>
        <Route path='/books/:id' element={<BooksSingle/>}/>
        <Route path='/computer/:id' element={<ComputerSingle/>}/>
        <Route path='/fridge/:id' element={<FridgeSingle/>}/>
        <Route path='/furniture/:id' element={<FurnitureSingle/>}/>
        <Route path='/kitchen/:id' element={<KitchenSingle/>}/>
        <Route path='/men/:id' element={<MenSingle/>}/>
        <Route path='/speaker/:id' element={<SpeakerSingle/>}/>
        <Route path='/tv/:id' element={<TvSingle/>}/>
        <Route path='/watch/:id' element={<WatchSingle/>}/>
        <Route path='/women/:id' element={<WomenSingle/>}/>
        <Route path='/cart' element={<UserCart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/giftcard' element={<GiftCard/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/> 

      </Routes>
       
    </div>

  )
}

export default App
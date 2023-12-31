import { Card } from '@mui/material'
import React from 'react'
import Video from "../Video/Video"
import Mapp from "../Map/Mapp"
import Cards from "../Cards/Cards"
import Info from "../Info/Info"
import Main from "../HelpLink/Main/Main"

const Home = () => {
  return (
    <div> 
        <div>
        <Video/>
    </div>

    <div>
        <Mapp/>
    </div>

    <div>
        <Cards/>
    </div>

    <div>
        <Info/>
    </div>

    <div>
        <Main/>
    </div>

    </div>
   
  )
}

export default Home

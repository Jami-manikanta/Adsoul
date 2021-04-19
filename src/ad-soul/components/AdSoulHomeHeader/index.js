import React, { Component } from 'react'
import {
   HeaderPart
   } from './styledComponent'
import { withRouter } from 'react-router-dom'

class AdSoulHomeHeader extends Component {

   render() {
      return (
         <HeaderPart>
            ADSOUL APPS
         </HeaderPart>
      )
   }
}

export default withRouter(AdSoulHomeHeader)

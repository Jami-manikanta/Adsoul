import React, { Component } from 'react'
import {
   AppDiv
} from '../ListOfProjects/StyledComponents'
import { withRouter } from 'react-router-dom'
//import { toJS } from 'mobx'

class Apps extends Component {
   // onClickApp = () => {
   //    const { eachProject, history } = this.props
   //    history.push(`pmp/${eachProject.project_id}`)
   // }
   render() {
      const { eachProject } = this.props
      console.log(eachProject)
      //console.log(eachProject)
      return (
         // <div>hi</div>
         <AppDiv
            eachProject={eachProject.project_id}
            onClick={this.onClickApp}
         >
            Hello
      </AppDiv>
      )
   }
}

export default withRouter(Apps)

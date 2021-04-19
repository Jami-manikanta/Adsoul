import React from "react";
import { Component } from "react"
import { withRouter } from "react-router"
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import AdSoulHomeHeader from "../AdSoulHomeHeader"
import { inject } from "mobx-react";

@inject('listOfAppsStore')
class AdSoul extends Component {
 
    componentDidMount() {
       this.doNetworkCalls()
    }
 
    componentWillUnmount() {
       const { clearStore } = this.getListOfAppsStore()
       clearStore()
    }
 
    getListOfAppsStore() {
       return this.props.listOfAppsStore
    }
 
     renderProjectsList = () => {
    //    const myResponse = JSON.parse(window.localStorage.getItem('myResponse'))
       return (
          <ListOfApps>
             <div className='px-24 py-12 bg-gray-100'>
                <ListOfProjects />
                <ListOfApps/>
             </div>
          </ListOfApps>
       )
    }
 
    render() {
    //    const { getPmpApiStatus, getPmpApiError } = this.getPmpStore()
       return (
          <div>
              <AdSoulHomeHeader/>
             <LoadingWrapperWithFailure
                apiStatus={getListOfAppsApiStatus}
                apiError={getListOfAppsApiError}
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderProjectsList}
             />
          </div>
       )
    }
 }
 
 export default withRouter(AdSoul)
 
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'
import {
   ListOfTasksDiv,
   SeeListOfTasks,
   ListOfTasksHeading
} from './styledComponents'
import ShowListOfTasks from '../ShowListOfTasks'
import ModalExampleCloseIcon from '../ModalExampleCloseIcon'
import AdSoulHomeHeader from "../AdSoulHomeHeader"
import ShowListOfAppsData from "../ShowListOfAppsData"
// import CreateTask from '../CreateTask'
// import { Pagination } from 'semantic-ui-react'
// import { observable } from 'mobx'

@inject('appsDataStore')
@observer
class AppsData extends Component {
   // @observable projectid
   componentDidMount() {
      // console.log(this.props.match.params.id)
      this.doNetworkCalls()
   }

   componentWillUnmount() {
      const { clearStore } = this.getAppsDataStore()
      clearStore()
   }

   getAppsDataStore() {
      return this.props.appsDataStore
   }

   doNetworkCalls = () => {
      // console.log(this.props.match.params)
      const projectid = this.props.match.params.id
      //console.log(projectid)
      this.getAppsDataStore().getAppsDataAPI(projectid)
   }

   renderTasksList = () => {
      return (
         <div>
            <div className='px-24 py-12 bg-gray-100'>
               <ShowListOfAppsData />
            </div>
         </div>
      )
   }

   render() {
      const {
         getAppsDataApiStatus,
         getAppsDataApiError
      } = this.getAppsDataStore()
      return (
         <div>
            <AdSoulHomeHeader />
            <LoadingWrapperWithFailure
               apiStatus={getAppsDataApiStatus}
               apiError={getAppsDataApiError}
               onRetryClick={this.doNetworkCalls}
               renderSuccessUI={this.renderTasksList}
            />
            {/* <Pagination /> */}
         </div>
      )
   }
}

export default withRouter(AppsData)

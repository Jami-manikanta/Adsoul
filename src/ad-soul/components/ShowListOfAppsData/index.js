import React, { Component } from 'react'
import {
   TaskTitle,
   CreatedBy,
   Description,
   TaskState,
   IssueType,
   Info
} from './styledComponents'
import { observer, inject } from 'mobx-react'
import Task from '../Task/index'

@inject('appsDataStore')
@observer
class ShowListOfAppsData extends Component {
   render() {
      const {appsDataList } = this.props.appsDataStore
      console.log(appsDataList)
      return (
         <div className='flex flex-col'>
            <div className='flex border border-gray-300'>
               <TaskTitle className='font-bold'>Date</TaskTitle>
               <CreatedBy className='font-bold'>Revenue</CreatedBy>
               <Description className='font-bold'>Ad Requests</Description>
               <TaskState className='font-bold'>Ad Response</TaskState>
               <IssueType className='font-bold'>Impressions</IssueType>
               <Info className='font-bold'>Clicks</Info>
               <TaskTitle className='font-bold'>Render Rate</TaskTitle>
            </div>
            <div>
               {appsDataList.length > 0 ? (
                  appsDataList.map(eachTask => (
                     <Task key={eachTask.task_id} eachTask={eachTask} />
                  ))
               ) : (
                  <div className='h-screen border-solid border-red text-bold text-4xl flex justify-center items-center'>
                     Data Not Found !
                  </div>
               )}
            </div>
         </div>
      )
   }
}

export default ShowListOfAppsData

import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL } from '@ib/api-constants'

class AppsDataStore {
   @observable getAppsDataApiStatus
   @observable getAppsDataApiError
   @observable appsDataService
   @observable appsDataList = []
   
   constructor(appsDataService) {
      this.appsDataService = appsDataService
      this.init()
   }

   init() {
      this.getAppsDataApiStatus = API_INITIAL
      this.getAppsDataApiError = null
   }

   @action.bound
   setListOfTasksAPIResponse(appsDataResponse) {
      console.log(appsDataResponse)
      this.appsDataList = []
      appsDataResponse.map(eachProduct =>
         this.appsDataList.push(eachProduct)
      )
   }

   @action.bound
   setAppsDataAPIError(error) {
      this.getListOfTasksApiError = error
   }
   @action.bound
   setAppsDataAPIStatus(apiStatus) {
      this.getAppsDataApiStatus = apiStatus
   }

   @action.bound
   getAppsDataAPI(projectid) {
      console.log(projectid)
      const appsDataPromise = this.appsDataService.getAppsDataAPI(
         projectid
      )
      //  console.log(listOfTasksPromise)
      return bindPromiseWithOnSuccess(appsDataPromise)
         .to(this.setAppsDataAPIStatus, this.setAppsDataAPIResponse)
         .catch(this.setAppsDataAPIError)
   }

   @action.bound
   clearStore() {
      this.init()
   }
}

export default AppsDataStore

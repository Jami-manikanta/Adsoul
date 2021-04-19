import { API_INITIAL } from "@ib/api-constants"
import { action } from "@storybook/addon-actions"
import { observable } from "mobx"
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class ListOfAppsStore {
    @observable getListOfAppsApiStatus
    @observable getListOfAppsApiError
    @observable listOfAppsService
    @observable listOfAppsList = []
    @observable isDisabled
    numberOfProjects
 
    constructor(listOfAppsService) {
       this.listOfAppsService = listOfAppsService
       this.init()
    }
 
    init() {
       this.getListOfAppsApiStatus = API_INITIAL
       this.getListOfAppsApiError = null
    }
 
    @action.bound
    setListOfAppsAPIResponse(listOfAppsResponse) {
       //  this.numberOfProjects = total_projects
       console.log(this.numberOfProjects)
       this.listOfAppsList = listOfAppsResponse.map(eachProject => eachProject)
    }
 
    @action.bound
    setListOfAppsAPIError(error) {
       this.getListOfAppsApiError = error
    }
    @action.bound
    setListOfAppsAPIStatus(apiStatus) {
       this.getListOfAppsApiStatus = apiStatus
    }
     
    @action.bound
    getListOfAppsAPI() {
       const listOfAppsPromise = this.listOfAppsService.getListOfAppsAPI()
       return bindPromiseWithOnSuccess(listOfAppsPromise)
          .to(this.setListOfAppsAPIStatus, this.setListOfAppsAPIResponse)
          .catch(this.setListOfAppsAPIError)
    }
 
    @action.bound
    clearStore() {
       this.init()
    }
 }
 
 export default ListOfAppsStore
 
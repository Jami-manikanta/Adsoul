import { networkCallWithApisauce } from '../../../utils/APIUtils'
import { apiMethods } from '../../../constants/APIConstants'
import { action } from 'mobx'
import { create } from 'apisauce'

class AppsDataService {
   api
   constructor() {
      this.api = create({
         baseURL: BASE_URL
      })
   }

   @action.bound
   getAppsDataAPI() {
      console.log('projectid', projectid)
      return networkCallWithApisauce(
         this.api,
         `api.npoint.io/d734975d2aee62d197ef`,
         {},
         apiMethods.get
      )
   }
}

export default AppsDataService

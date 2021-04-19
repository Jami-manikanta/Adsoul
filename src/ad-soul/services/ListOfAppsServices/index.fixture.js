import { action } from "@storybook/addon-actions"
import { create } from "apisauce"
import { networkCallWithApisauce } from "../../../utils/APIUtils"

class ListOfAppsService {
    api
    constructor() {
       this.api = create({
          baseURL: BASE_URL
       })
    }
 
    @action.bound
    getListOfAppsAPI() {
       return networkCallWithApisauce(
          this.api,
          `api.npoint.io/4ca5aaf459a573940672`,
                   {},
          apiMethods.get
       )
    }
 }
 
 export default ListOfAppsService
 
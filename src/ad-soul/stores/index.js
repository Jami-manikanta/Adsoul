import AppsDataService from "../services/AppsDataServices/index.fixture"
import ListOfAppsService from "../services/ListOfAppsServices/index.fixture"
import ListOfAppsStore from "./ListOfAppsStore"


const listOfAppsService = new ListOfAppsService()
const listOfAppsStore = new ListOfAppsStore(listOfAppsService)
const appsDataService = new AppsDataService()
const appsDataStore = new AppsDataStore(appsDataService)


export { listOfAppsService,listOfAppsStore,appsDataService,appsDataStore}
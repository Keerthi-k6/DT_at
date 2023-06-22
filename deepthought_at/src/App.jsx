import Data from "./Data.json"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import Nav_bar from "./Nav_bar";
import Assetcontainer from "./Assetcontainer";
import AssetCards from "./AssetCards";
import Assetlist from "./Assetlist";
import Lasticons from "./Lasticons";
function App() {

  return (
    <>
    <Nav_bar/>
    <Sidebar/>
    <Assetcontainer/>
    <Assetlist/>
    <Lasticons/>
    

    </>
  )
}

export default App

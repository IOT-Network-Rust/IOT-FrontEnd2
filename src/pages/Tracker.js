import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import DeviceCardList from "../components/DeviceCardList.tsx";

let device_names = ["Device1", "Device2", "Device3", "Device1", "Device2", "Device3", "Device1", "Device2", "Device3"]
let device_ids = ["124", "2424", "14253", "124", "2424", "14253", "124", "2424", "14253"]
let device_subtitles = ["grsgs", "fesgseg", "wgeeg", "grsgs", "fesgseg", "wgeeg", "grsgs", "fesgseg", "wgeeg"]
function Tracker() {
    return (<>
        <TopNav/>
        <div style={{height: "81vh"}}>
            <DeviceCardList item_names={device_names} item_ids={device_ids} item_subtitles={device_subtitles}></DeviceCardList>
        </div>
        <Footer/>
    </>)
}

export default Tracker;

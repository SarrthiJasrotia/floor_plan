import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./Bath"

function FloorPlan(){
    return(
        <>
        <Bedroom bedNum="1"/>
        <Kitchen/>
        
        <Bath bathNum="Full Bath"/>
        <Bedroom bedNum="2"/>
        <LivingRoom/>
        <Bath bathNum="Half Bath"/>
        <Bedroom bedNum="3"/>
        </>
    )
}

export default FloorPlan;
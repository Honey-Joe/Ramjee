import ChooseUs from "../ChooseUs/ChooseUs"
import ReviewSection from "../ReviewSection/ReviewSection"
import Homepage from "./Homepage/Homepage"
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent"

const Body = () => {
  return (
    <>  
        <Homepage/>
        <UpcomingEvent/>
        <ChooseUs></ChooseUs>
        <ReviewSection></ReviewSection>
    </>
  )
}

export default Body
import ChooseUs from "../ChooseUs/ChooseUs"
import ReviewSection from "../ReviewSection/ReviewSection"
import Homepage from "./Homepage/Homepage"
import SearchNav from "./SearchNav/SearchNav"
import UpcomingEvent from "./UpcomingEvent/UpcomingEvent"

const Body = () => {
  return (
    <>  
        <Homepage/>
        <UpcomingEvent/>
        <SearchNav/>
        <ChooseUs></ChooseUs>
        <ReviewSection></ReviewSection>
    </>
  )
}

export default Body
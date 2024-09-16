import { Star } from "lucide-react"

const ReviewCard = (props) => {
  return (
    <>
     <div className="w-[90%] grid grid-cols-1 px-5 py-5 border bg-[#F8F8FE] mx-auto">
        <div className="flex flex-col gap-5">
            <div className="flex gap-1">
                <Star color="#553CDF" fill="#553CDF" size={16}></Star>
                <Star color="#553CDF" fill="#553CDF" size={16}></Star>
                <Star color="#553CDF" fill="#553CDF" size={16}></Star>
                <Star color="#553CDF" fill="#553CDF" size={16}></Star>
                <Star color="#553CDF" fill="#553CDF" size={16}></Star>
            </div>
            <div>
                <p className="text-[20px] font-[Pro] text-[#110c2d] ">{props.content}</p>
            </div>
            <div className="flex gap-5">
                <div >
                    <img src={props.imgurl} alt="" className="w-[50px] h-[50px] rounded-full"/>
                </div>
                <div>
                    <div>
                        <p className="text-[18px] text-[#110c2d] font-bold font-[Pro]">{props.name}</p>
                    </div>
                    <div>
                        <p>{props.desig}</p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default ReviewCard

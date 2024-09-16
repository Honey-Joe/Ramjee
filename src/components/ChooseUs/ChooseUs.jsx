import { choose1 } from "../../assets/image"

const ChooseUs = () => {
  return (
    <>
     <div className="max-w-[100%] bg-[url(https://ik.imagekit.io/HoneyJoe/Skiil%20grow/bg.jpg?updatedAt=1726475274326)] bg-cover bg-no-repeat">
        <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 mx-auto">
            <div className="">
                <div>
                    <img src={choose1} alt="" />
                </div>

            </div>

        </div>
    </div> 
    </>
  )
}

export default ChooseUs

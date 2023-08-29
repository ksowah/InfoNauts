import Image from "next/image"

const Goals = () => {
  return (
    <div className="w-full space-x-8 text-white bg-white flex items-center justify-center py-[3rem] px-[5rem] ">
        
        <div className="relative flex-1 h-[22rem] rounded-xl overflow-hidden" >
            <Image 
                src={"/assets/goals.jpg"}
                layout="fill"
                objectFit="cover"
                alt=""
            />
        </div>
        <div className="flex-1 h-[22rem] rounded-xl bg-primary p-[1.5rem] " >
            <h2 className="font-extrabold text-[1.8rem] " >GOALS</h2>
            <div className="pl-[1rem] space-y-4" >
                <p className="text-[1.2rem]" >- Align Education with Industry Needs</p>
                <p className="text-[1.2rem]" >- Empower Informed Decision-Making</p>
                <p className="text-[1.2rem]" >- Enhance Student Employability</p>
                <p className="text-[1.2rem]" >- Optimize Resource Allocation</p>
                <p className="text-[1.2rem]" >- Bridge Education-Employability Gap</p>
                <p className="text-[1.2rem]" >- Transform Education Paradigms</p>
            </div>
        </div>
       
    </div>
  )
}

export default Goals
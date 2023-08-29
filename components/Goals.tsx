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
                <p className="text-[1.14rem]" >- Understand enrollment trends and patterns to allocate resources effectively.</p>
                <p className="text-[1.14rem]" >- Identify age groups and districts with the highest enrollment in various education levels.</p>
                <p className="text-[1.14rem]" >- Develop strategies for accommodating expected enrollment shifts.</p>
                <p className="text-[1.14rem]" >- Assess alignment between university programs and industry demands.</p>
                <p className="text-[1.14rem]" >- Determine if graduates are entering occupations relevant to their field of study.</p>
                <p className="text-[1.14rem]" >- Inform curriculum updates to ensure programs remain industry-relevant.</p>
            </div>
        </div>
       
    </div>
  )
}

export default Goals
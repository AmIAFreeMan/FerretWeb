import Image from "next/image";
import Link from "next/link";

export default function ContactInfoComponent(){
    return(
        <>
            <div className=" bg-[#58585e] grid place-content-center rounded-br-2xl">
                <div className="grid grid-cols-[20px_auto] gap-2  ml-8 mr-8 mt-4 mb-4 ">
                    <Image src={"/github.svg"} alt="githubSVG" height={20} width={20}></Image>
                    <h2 className=" sm:text-[18px]  text-[12px] text-indigo-400 duration-130 ease-in-out">Github: <span className="no-underle"><Link className="hover:text-blue-500 hover:underline underline-offset-4 text-[#F4F7F5] from-[#F4F7F5] to-blue-500 duration-130 ease-in-out" href={"https://github.com/AmIAFreeMan"}>https://github.com/AmIAFreeMan</Link></span></h2>
                </div>
                <div className="grid grid-cols-[20px_auto] gap-2  ml-8 mr-8 mt-4 mb-4 ">
                    <Image src={"/linkedin.svg"} alt="LinkedinSVG" height={20} width={20}></Image>
                    <h2 className="sm:text-[18px]  text-[12px] text-indigo-400 duration-130 ease-in-out">Linkedin: <span><Link className="hover:text-blue-500 hover:underline underline-offset-4 text-[#F4F7F5] from-[#F4F7F5] to-blue-500 duration-130 ease-in-out" href={"https://www.linkedin.com/in/yan-chizhevskiy-2b2338311/"}>https://www.linkedin.com/in/yan-chizhevskiy-2b2338311/</Link></span></h2>
                </div>
                <div className="grid grid-cols-[20px_auto] gap-2  ml-8 mr-8 mt-4 mb-4 ">
                    <Image src={"/envelope.svg"} alt="EmailSVG" height={20} width={20}></Image>
                    <h2 className=" sm:text-[18px]  text-[12px] text-indigo-400 ">Email:<span className="text-[#F4F7F5]"> l7739298@gmail.com</span></h2>
                </div>
                <div className="grid grid-cols-[20px_auto] gap-2  ml-8 mr-8 mt-4 mb-4 ">
                    <Image src={"/chat-bubble-call.svg"} alt="githubSVG" height={20} width={20}></Image>
                    <h2 className="  sm:text-[18px]  text-[12px] text-indigo-400 ">Phone:<span className="text-[#F4F7F5]"> +39 376 169 5528</span></h2>
                </div>
                
            </div>
        </>
    )
}
"use client"


import AboutMeComponent from "@/components/AboutMeComponent";
import ContactInfoComponent from "@/components/ContactInfoComponent";
import ProjectsInfoComponent from "@/components/ProjectsInfoComponent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    
    const [isVisible, setVisible] = useState(false)

    const [AboutMeInfo, setAboutMeInfo] = useState(true)

    const [ContactInfo, setConatctInfo] = useState(false)

    const [ProjectsInfo, setProjectsInfo] = useState(false)

    const AboutMeClick = ()=>{
        setAboutMeInfo(true)
        setConatctInfo(false)
        setProjectsInfo(false)    
    }

    const ContactMeClick = ()=>{
        setAboutMeInfo(false)
        setConatctInfo(true)
        setProjectsInfo(false)
        
    }

    const ProjectsClick = ()=>{
        setAboutMeInfo(false)
        setConatctInfo(false)
        setProjectsInfo(true)
        
    }

    

    return (
        <>
        
        
            <div className="h-screen w-screen bg-[#051923]">
                <div className="h-screen w-screen grid lg:grid-cols-[80px_auto_80px] grid-cols-[20px_auto_20px] bg-[url('/newFerret.jpg')] bg-cover bg-center bg-no-repeat]">
                <div></div>
                <div className="grid grid-rows-[80px_auto_80px]">
                    <div></div>
                    <div>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#F4F7F5] font-monocraft lg:mt-75 md:mt-50 sm:mt-50 mt-55 ml-4">I know exactly who you have been looking for.</h1>
                    <h2 className=" md:text-2xl sm:text-[20px] text-[18px] text-[#F4F7F5] mt-5 ml-4">Believe me, I am worth the wait.</h2>
                    <button className="lg:text-2xl md:text-[18px] text-[#F4F7F5] lg:mt-5 lg:ml-3 md:mt-3.5 md:ml-3 sm:mt-3 sm:ml-3 mt-5 ml-3 rounded-2xl bg-[#666A86] hover:bg-[#0d3f58] active:bg-[#58585e] border-2 border-[#777777] hover:border-[#F4F7F5] transition-colors duration-300 delay-50 lg:p-3 md:p-3 sm:p-2 p-1 cursor-pointer" onClick={()=>setVisible(!isVisible)}>Come see for yourself.</button>
                    </div>
                    <div></div>
                </div>
                <div></div>
                </div>
            </div>

            
            <div 
                className={`absolute inset-0 z-50 h-screen w-screen backdrop-blur-md grid place-content-center from-transparent to-white/10 duration-600 transition-opacity ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            >           
                <div className="bg-[#666A86] border-2 border-[#58585e] sm:h-135 h-160 lg:w-300 md:w-200 sm:w-160 rounded-2xl  grid sm:grid-cols-[80px_auto] grid-cols-[50px_auto] ml-2 mr-2">
                <div className="grid grid-rows-3">    
                    <button className={`rounded-tl-[14px] p-3 pl-3 pr-3  grid place-content-center cursor-pointer ${AboutMeInfo ? 'bg-[#414147] transition-colors duration-300 delay-50 border-r-2 border-[#F4F7F5]': 'bg-[#666A86] hover:bg-[#0d3f58] border-r-2 border-[#414147] transition-colors duration-300 delay-50'}`} onClick={AboutMeClick}><Image src={"/profile.png"} alt="githubSVG" height={20} width={20}></Image></button>                              
                    <button className={`p-3 pl-3 pr-3 grid place-content-center cursor-pointer ${ProjectsInfo ? 'bg-[#414147] transition-colors duration-300 delay-50  border-r-2 border-[#F4F7F5]' : 'bg-[#666A86] hover:bg-[#0d3f58] border-r-2 border-[#414147] transition-colors duration-300 delay-50'}`} onClick={ProjectsClick}><Image src={"/graduation-hat.png"} alt="githubSVG" height={20} width={20}></Image></button>            
                    <button className={`rounded-bl-[14px] grid place-content-center cursor-pointer ${ContactInfo ? 'bg-[#414147] transition-colors duration-300 delay-50  border-r-2 border-[#F4F7F5]' : 'bg-[#666A86] hover:bg-[#0d3f58] border-r-2 border-[#414147] transition-colors duration-300 delay-50'}`} onClick={ContactMeClick} ><Image src={"/chat.png"} alt="githubSVG" height={20} width={20}></Image></button>                  
                </div>
                <div className=" grid sm:grid-rows-[50px_auto] grid-rows-[45px_auto] h-full overflow-hidden rounded-br-2xl">
                    <div className="bg-[#58585e]  rounded-tr-2xl grid grid-cols-[auto_80px]">
                        <div></div>
                        <div className=" grid place-items-center rounded-tr-2xl">
                            <button className="bg-[#666A86] hover:bg-[#0d3f58] hover:text-[#F4F7F5] active:bg-[#58585e] border-2 border-[#414147] hover:border-[#F4F7F5] transition-colors duration-300 delay-50 p-2 pl-6 pr-6 rounded-2xl cursor-pointer" onClick={()=>setVisible(!isVisible)}>X</button>
                        </div>
                    </div>
                    
                    
                    {AboutMeInfo==true && (
                        <AboutMeComponent/>
                    )}
                                                                                                  
                    {ProjectsInfo==true && (
                        <ProjectsInfoComponent/>
                    )}

                    {ContactInfo==true && (
                        <ContactInfoComponent/>
                    )}

                </div>
                </div>
            </div>
        
        
        
        </>
    );
}

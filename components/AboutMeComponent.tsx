export default function AboutMeComponent(){
    return(
        <>
            <div className=" bg-[#58585e] overflow-y-auto scrollbar-thin scrollbar-track-transparent ">
                            
                <h1 className="m-8 sm:ml-8 mt-4 ml-4 text-[18px] text-[#F4F7F5]"><span className="text-yellow-300">Hello</span>, my name is <span className="text-[#47f56d] text-[20px]">Yan</span>, <span className="underline underline-offset-4">I am a 20-year-old software architect, builder and problem solver</span> who has been <span className="text-blue-300">obsessed</span> with the <span className="text-blue-300"> "how"</span> and <span className="text-blue-300">"why"</span> of technology since I was <span className="text-[#f5a147]">16</span>. What started as a hobby quickly evolved into a <span className="text-[#f5a147]"> four-year run of freelancing and full-stack development</span>, turning abstract ideas into functional, high-performance systems.</h1>
                
                <h2 className="m-8 sm:ml-8 ml-4 text-[18px] text-[#F4F7F5]">My technical foundation is built on a <span className="text-pink-300">deep love for mathematics</span> and the kind of challenges that make people sweat — I’m the person who finds clarity in a <span className="text-pink-300">LeetCode Hard</span> and finds pure joy in the low-level mechanics of building a Raytracer from scratch in C++/Qt.</h2>
                
                <h2 className="m-8 sm:ml-8 ml-4 text-[18px] text-[#F4F7F5]">I don’t just write code; <span className="text-[#b6e2c4]">I engineer solutions</span>. My experience spans the entire stack, <span className="text-[#b6e2c4]">from</span> distributed microservices and robust API design <span className="text-[#b6e2c4]">to</span> high-performance desktop applications and intricate CGI pipelines. I have even built my own version of SQL—not because I had to, but because I wanted to understand the engine under the hood.</h2>
                <h1 className="m-8 sm:mt-10 sm:ml-8 ml-4 text-[20px] text-[#f5a147] underline underline-offset-6">My tech Stack:</h1>
                <div className="grid sm:mt-4 lg:grid-cols-[240px_auto] grid-cols-[100px_auto] gap-8">
                    <p className="m-8 sm:ml-8 ml-4 text-[#4597f4] underline underline-offset-4">Frontend & Full-Stack:</p>
                    <p className="sm:mt-8 mt-7.5 text-[18px] text-[#b6e2c4]">Next.js (React), Nuxt (Vue.js), Angular, Blazor, Expo.</p>
                </div>
                <div className="grid lg:grid-cols-[240px_auto] grid-cols-[100px_auto] gap-8 mt-1">
                    <p className="m-8 sm:ml-8 ml-4 text-[#4597f4] underline underline-offset-4">Desktop & Cross-Platform:</p>
                    <p className="sm:mt-8 mt-12 text-[18px] text-[#b6e2c4]"> Electron.js, WPF, Qt, JavaFX/Swing.</p>
                </div>
                <div className="grid lg:grid-cols-[240px_auto] grid-cols-[110px_auto] lg:gap-8 gap-6 mt-1">
                    <p className="m-8 sm:ml-8 ml-4 text-[#4597f4] underline underline-offset-4">Backends:</p>
                    <p className="sm:mt-8 mt-4 text-[18px] text-[#b6e2c4]"> Express.js, ASP.NET Core, Aspire.NET, Spring Boot, Django, Laravel.</p>
                </div>
                <div className="grid lg:grid-cols-[240px_auto] grid-cols-[100px_auto] gap-8 mt-1">
                    <p className="m-8 sm:ml-8 mt-8 ml-4 text-[#4597f4] underline underline-offset-4">Cloud & Ecosystem:</p>
                    <p className="sm:mt-8 mt-4 text-[18px] text-[#b6e2c4]"> AWS, Google Cloud Platform, Azure, Stripe, Clerk, OAuth, and distributed messaging with RabbitMQ.</p>
                </div>                           
                
            </div>
        </>
    )
}
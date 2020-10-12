import React from "react"
const Bio = () => {
    return (
        <div className="relative ">
            <div id="section2" className="rounded-lg shadow-lg bg-white-101 sm:mb-6 mb-4 shadow-lg pb-4 px-4">
            
                <h1 className="text-gray-900 font-megrim text-4xl font-extrabold text-center pt-4 pb-6">Bio</h1>
               
                <div id="section1" className="flex sm:flex-col md:flex-row lg:flex-row xl:flex-row">

                    <img className=" md:h-64 md:w-64 object-cover sm:h-48 sm:w-48 h-20 w-20 m-10 mt-0 rounded-full  " src="/portfolio/assets/AlvaroIH.jpg" alt="Alvaro picture"/> 
                    <div className="font-electro tracking-wider sm:text-lg md:text-lg text-gray-900 text-justify">
                        <p className="pb-4 ">I am a Full Stack Web Developer with a background in mechanical engineering, manufacturing and automation. I hold a MS in Industrial Automation where I learnt that programming and developing web applications is my passion. I graduated from IronHack a prestigious web development bootcamp and since then I have been working as a freelance developing websites and learning new technologies. </p>
                        <p className="pb-4 ">As an engineer with experience in lean manufacturing and continuous improvements I find programming and web development the perfect playground to apply my existing skills. My passion is to create clean code, minimalist designs and more importantly develop creative optimal solutions to help people and companies solve problems.     </p>
                    
                    </div>
                
             </div>

            </div>
        </div>
    )
}

export default Bio;

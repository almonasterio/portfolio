import React from "react"


const Header = () => {


    return (
        <header className="bg-gray-900 relative pb-20 sm:pb-20 md:pt-20 ">
            <div className="text-center">
                <h1 className="text-5xl sm:text-4xl text-white-101 font-megrim font-black  md:text-6xl  lg:text-9xl pt-6 ">Alvaro Monasterio</h1>
                <h3 className="text-xs sm:text-base  md:text-lg lg:text-4xl text-white-101 font-syncopate sm:mb-4" >Full-Stack Web Developer</h3>
            </div>
            
            <div className="mt-8 text-center">
                <h2 className="text-lg text-orange-920 sm:text-3xl lg:text-5xl  font-syncopate font-thin" >Personal Portfolio</h2>
                {/*  sm:text-3xl lg:text-5xl md:pr-24 sm:mr-16 */}
                
            </div>
        </header>
    )

}

export default Header
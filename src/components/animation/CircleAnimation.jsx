import React from 'react'

function CircleAnimation() {
  return (
    <div className="absolute flex items-center justify-center w-full h-screen">
        <div className="w-[250px] h-[250px] md:w-[440px] md:h-[440px] top-[20%] md:top-[20%] bg-pblue md:left-[25%] rounded-full absolute blur-[75px] md:blur-[200px] animate-circle-blue-bg scale-10"></div>
        <div className="w-[250px] h-[250px] md:w-[440px] md:h-[440px] top-[40%] right-[10%] bg-ppink md:right-[25%] md:top-[20%]rounded-full absolute blur-[75px] md:blur-[200px] animate-circle-pink-bg scale-20"></div>
        <div className="w-[250px] h-[250px] md:w-[440px] md:h-[440px] bottom-[30%] left-[10%] bg-plime/50 md:left-[25%] md:bottom-[5%] rounded-full absolute blur-[75px] md:blur-[200px] animate-circle-lime-bg scale-10"></div>
        <div className="w-[250px] h-[250px] md:w-[440px] md:h-[440px] bottom-[10%]  bg-ppurple/60 md:right-[25%] md:top-[20%] md:buttom-[5%] rounded-full blur-[75px] absolute md:blur-[200px] animate-circle-purple-bg"></div>  
    </div>
  )
}

export default CircleAnimation

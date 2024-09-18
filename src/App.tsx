import React from 'react';

const App: React.FC = () => {
  return (
    <div className='flex justify-center bg-black h-fit'>
    <div className='grid lg:grid-cols-8 gap-5 p-[20px] md:grid-cols-4 sm:grid-cols-1'>

      <div className=" bg-white rounded-2xl lg:col-span-5 h-[540px] p-[33px] md:col-span-2 sm-col-span-1 ">
        <div className="flex gap-4 items-center">
          <img src="https://i.ibb.co/vshDSbX/square-icon.png" className="w-10 h-auto" alt='square-icon'/>
          <p className="text-[15px] font-mono font-semibold">TIME FOR FITNESS - 23</p>
        </div>
        <div>
          <p className="text-[45px] lg:text-[75px] font-bold leading-[75px] pt-[15px] md:text-[52px] sm:text-[40px] min-[320px]:text-center md:text-start">OWN YOUR STRENGTH, OWN YOU</p>
        </div>
        <div className="sm:mt-[180px] md:mt-[60px] lg:mt-[153px] flex flex-col mt-[110px] lg:flex-row md:flex-col gap-4 md:w-[500px] sm:flex-row">
          <button className="bg-black text-white text-sm md:w-[240px] md:w-[300px] min-[320px]:w-[300px] md:h-[40px] sm:w-[300px] px-13 py-3 md:p-1 font-bold rounded-full">START YOUR JOURNEY</button>
          <button className="p-2 w-[220px] flex gap-4 items-center">
            <img src="https://i.ibb.co/mC7cGGD/luxury-icon.png" className="w-10 h-7" alt="luxury icon"/>
            <p className="text-[10px] font-bold text-start w-[100px]">LUXURY FITNESS EXPERIENCE</p>
          </button>
        </div>
      </div>

      <div className="rounded-2xl h-[540px] lg:col-span-3 md:col-span-2 sm-col-span-1">
        <img src="https://i.ibb.co/V3RQ9gT/male-icon.png" className="w-12 h-12 absolute m-[27px]" alt="male-icon" />
        <p className="text-white text-[27px] font-bold mt-[440px] mx-[33px] absolute w-[250px]">TRAIN ON YOUR OWN TIME</p>
        <img src="https://i.ibb.co/MCtHY1y/male.jpg" className="w-full h-full object-cover rounded-2xl" alt="male"/>
      </div>

      <div className="items-center flex flex-row rounded-xl bg-red-200 lg:col-span-5 h-[190px] pl-[12px] md:col-span-2 sm-col-span-1">
        <div className="flex h-full w-4/12 flex-col justify-center">
          <div className="relative h-36 w-full py-[1px] ml-[-20px] lg:ml-3 lg:py-5">

            <div className="absolute left-1 top-0 z-10 h-36 w-36 rounded-xl scale-[0.6] lg:scale-[0.9] mt-[-5px] bg-yellow-400">
              <img src="https://i.ibb.co/brtMXWX/yellow.png" className="rounded-xl object-cover" alt="yellow" />
            </div> 

            <div className="absolute left-7 top-0 h-36 w-36 scale-[0.5] lg:scale-[0.85] rounded-xl bg-black"></div>

          </div>
        </div>

        <div className="flex h-full w-8/12 flex-col justify-between py-6 ml-5 lg:ml-0">
          <div className="flex sm:flex-row md:flex-col gap-4 lg:gap-0 lg:flex-row justify-between text-[10px] pr-[30px]">

            <div>
              <p className="font-bold">24/7 SUPPORT</p>
            </div>

            <div className="flex ">
              <div>
                <p className="text-right font-bold">12834 FITNESS LN</p>
                <p className="sm:text-left text-right font-bold">BROOKLYN, NY</p>
              </div>
              <img src="https://i.ibb.co/6FrSRmr/location.png" className="ml-4 h-7 w-7" alt="location" />
            </div>
          </div>
          <div>
            <p className="text-[25px] font-bold leading-8  md:text-[20px]">CONTACT US & RISE <br/> STRONGER</p>
          </div>
        </div> 
      </div>

      <div className="bg-white rounded-xl flex flex-col justify-between h-[190px] p-[13px] lg:col-span-3 md:col-span-2 sm-col-span-1">
        <div className="flex justify-between">
          <div className="flex mt-[-10px] ml-3 space-x-4 items-center">
            <div>
              <p className="text-[45px] font-bold">4.98</p>
            </div>
            <div>
              <img src="https://i.ibb.co/L0nm3Qk/stars.png" className="mt-[4px] w-[55px] h-auto" alt="stars"/>
              <p className="text-[9px] text-gray-500">BASED ON 619 REVIEWS</p>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/F8gqcWj/logo.png" className="w-7 h-auto mr-3 mt-[10px]" alt="logo"/>
          </div>
        </div >
          <div>
            <div className="flex flex-row text-[12px] text-nowrap flex-wrap px-[12px] gap-2 ">
              <button className="border rounded-full px-[13px] py-[7px]">BOXING RING</button>
              <button className="border rounded-full px-[13px] py-[7px]">BASKETBALL COURT</button>
              <img src="https://i.ibb.co/MRSHZZH/muscle-gear.png" className="w-[40px] h-full border p-[10px] object-contain rounded-full" alt="muscle-gear"/>
              <button className="border rounded-full px-[13px] py-[7px]">JUICE BAR</button>
              <button className="border rounded-full px-[13px] py-[7px]">PERSONAL TRAINERS</button>
              <img src="https://i.ibb.co/HqdVC4H/baseball.png" className="w-[40px] h-full border p-[10px] object-contain rounded-full" alt="muscle-gear"/>
              <button className="border rounded-full px-[13px] py-[7px]">LOCKERS</button>
              <button className="border rounded-full px-[13px] py-[7px]">FREE PARKING</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

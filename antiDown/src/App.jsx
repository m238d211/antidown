
import { motion } from "framer-motion";
import { useState } from 'react';
import GooeyNav from './component/GooeyNav';
import TextType from './component/Text.jsx';
import Countup from './component/countup.jsx';




function App() {
  const name = localStorage.getItem("username") || "Guest";
  const items = [
    { label: "Home", href: "#Home" },
    { label: "About", href: "#About" },
    { label: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState(items[0].href.slice(1));



  return (

    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen  flex-col  pb-30  bg-gray-900 "
      >




        {/* NavBar */}
        <div className="    flex justify-center mb-10 py-20">

          <div
            className="relative bg-gray-800 py-2 px-5 rounded-full  "
          >

            <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={active}
              onChange={index => setActive(items[index].href.slice(1))}
              animationTime={600}
              timeVariance={300}
              colors={[1, 4, 3, 3, 2, 3, 1, 4]}


            />
          </div>
        </div>
        {/* NavBar */}


        {active === 'Home' && (

          <div className="  w-full  flex justify-center items-center   h-full " id="Home">  {/* hero*/}
            {/* text */}
            <div className="flex  w-full h-125    justify-center rounded-xl  text-white ">



              <div className="w-full h-full justify-center items-center ml-10 flex flex-col  ">
                <TextType
                  text={["Welcome " + name + "\n to AntiDown", "The Best Team", "Fast, Reliable"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="py-10 text-7xl text-white font-bold"
                />
                <button className=" mt-10 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-4xl w-40 cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById('About');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActive('About');
                  }}
                >
                  Get Started
                </button>








              </div>

            </div>


          </div>
        )}




        {active === 'About' && (
          <div className=" w-full  flex    h-full  " id="About">
            
            <div className="flex justify-around items-center flex-col h-auto w-full text-white text-2xl font-medium">
           <div className="w-auto h-auto flex justify-center hover:scale-105 transition-transform duration-300 ">
              <span className="text-white font-bold text-4xl  "> About AntiDown.sq </span>
              
              
            </div>

            <div className="grid md:grid-cols-3  grid-cols-1 gap-6  md:mx-20 mx-10 mt:10 mt-20 mb-20 md:mb-60 ">

              {/* Project Card 1 */}
              <div className="bg-gray-800 rounded-lg p-20  md:m-5 md:h-125  shadow-blue-800  justify-center items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" ><Countup from={2020} to={2025} duration={2} separator="" /></span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4">Created In  </h3>
           
              </div>
              {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg p-20   md:m-5 shadow-violet-950 justify-center  items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" >+<Countup from={0} to={8} duration={2} separator="," /></span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4"> Memmbers </h3>
           
              </div>
              {/* Project Card 3 */}
           <div className="bg-gray-800 rounded-lg p-20   md:m-5 shadow-blue-400 justify-center  items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" >+<Countup from={0} to={4} duration={2} separator="," /></span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4">Active Memmber</h3>
           
              </div>
            </div>
            </div>
            
          </div>
        )}

        {/* contact */}
        {active === 'contact' && (
          <div className=" mx-auto w-[90%] md:w-[60%] mt-30 h-[700px] rounded bg-gray-800 " id="contact">
     
            <div className="flex justify-center h-auto w-full text-white text-2xl font-medium">
              <label className="">
                this is contact page
              </label>
            </div>
          </div>
        )}


      </motion.div>
{/* projects */}
      <div className="flex   w-full h-auto md:gap-0 gap-10 pb-60  relative  bg-gray-900  ">


        <div className="w-full h-full flex justify-around flex-col items-center ">

          <div className=" ">

            <span className="text-white text-7xl font-medium mt-10">
              Projects 
            </span>

          </div>

          

            <div className="grid md:grid-cols-3 grid-cols-1 gap-6  md:mx-20 mx-10 mt:10 mt-20 mb-10 ">

              {/* Project Card 1 */}
              <div className="bg-gray-800 rounded-lg p-20 md:m-5  shadow-blue-800 justify-around  items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" >+<Countup from={0} to={15} duration={2} separator="," /></span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4">Projects Completed  </h3>
           
              </div>
              {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg p-20  md:m-5 shadow-violet-950 justify-between  items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" ><Countup from={0} to={50} duration={2} separator="," />%</span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4"> TeamDevlopment  </h3>
           
              </div>
              {/* Project Card 3 */}
           <div className="bg-gray-800 rounded-lg p-20 md:m-5 shadow-blue-400 justify-around  items-center flex flex-col hover:shadow-xl transition-shadow duration-300">
               <span className="text-white text-4xl" >+<Countup from={0} to={0} duration={2} separator="," /></span> 
                <h3 className="md:text-2xl text-md text-white font-semibold mb-4">Customers  </h3>
           
              </div>
            </div>





       


        </div>



      </div>
    </>
  );

}

export default App;

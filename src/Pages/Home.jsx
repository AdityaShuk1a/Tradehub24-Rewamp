import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    
      <div className='container-1 h-full bg-purple-800 flex flex-col z-10 rounded-b-[7vh] rounded-bl-[7vh]'>
        <div className='container-2 h-full bg-blue-800 flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
          <div className='container-3 h-full bg-green-800 flex flex-col rounded-b-[7vh] rounded-bl-[7vh]'>
            <div className="container-4 h-full w-screen bg-orange-200 flex flex-col overflow-x-hidden rounded-b-[7vh] rounded-bl-[7vh]">
              <div className="container-5 h-[110vh] w-screen bg-pink-400 justify-center rounded-b-[7vh] rounded-bl-[7vh]">
                <Navbar />
                <div className='flex w-screen' style={{ marginTop: "7vh" }}>
                  <div className="container-7 h-[50vh] bg-cyan-950 w-1/2">
                    <div className='flex flex-wrap w-[57vh] bg-amber-100 text-[7vh] gap-[1vh]' style={{ padding: "1.44vh" , marginLeft : "3vh"}}>
                      <span>Find</span>
                      <span>a</span>
                      <span>local</span>
                      <span>trusted</span>
                      <span>Roofer</span>
                    </div>
                    <div className='' style={{ marginTop: "2.88vh", padding: "1.44vh", fontSize: "1.92vh" ,  marginLeft : "3vh"}}>
                      <h1>The idea framework to learn how to</h1>
                      <h1>manage all aspects of startup</h1>
                      <button className='bg-amber-100 rounded-full' style={{ marginTop: "1.92vh", padding: "0.96vh", fontSize: "1.92vh", width: "19.23vh" }}>start for free</button>
                    </div>
                  </div>
                  <div className="container-8 h-[50vh] bg-amber-50 w-1/2 flex justify-center items-center">
                    <img src="https://tradehub24.com/profile_images/headr-image1bg.png" alt="" style={{ width: "38.46vh" }} />
                  </div>
                </div>
                <div className=' h-[23vh]  bg-amber-100 ' style={{ margin : "8vh" }}>
                  <div className='flex flex-wrap w-full h-[26.92vh] bg-red-500 rounded-[7vh] items-center justify-evenly'>
                  </div>
                </div>
              </div>

              <div className="container-6 h-[100vh] w-screen flex rounded-b-[7vh] rounded-bl-[7vh] overflow-hidden">
                <div className="container-7 h-[100vh] w-1/2">
                </div>
                <div className="container-8 h-[100vh] w-1/2">
                </div>
              </div>
            </div>
            <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh]">
            </div>
          </div>
          <div className="container-10 h-[100vh] w-1/2">
          </div>
        </div>
        <div className="container-11 h-[100vh] w-1/2">
        </div>
      </div>
      <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh]">
            </div>
      <div className="container-9 h-[100vh] rounded-b-[7vh] rounded-bl-[7vh] z-[-1] fixed bottom-0 ">
        <Footer />
      </div>
    </>
  );
};

export default Home;

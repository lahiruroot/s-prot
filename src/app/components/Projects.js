import React from 'react'
import Image from "next/image";
import images from '../../../public/card--image.jpg'

function Projects() {
    return (
        <div className='project pt-28' id='project'>
            <div className='tech--text font-poppins  text-customColor'>
                <h1 className='text-4xl font-bold'>Projects</h1>
                <p className='text-2xl '>Things I’ve built so far</p>
            </div>
            <div className="flex justify-center text-poppins text-customColor">
                <div className="grid gap-16 grid-cols-2">


                    {/* <div>
                    <a href="https://github.com/movinigamage/casual-work-web">
                        <div className="w-112 h-120 max-w-md rounded-lg overflow-hidden shadow-2xl">
                            <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
                            <div className="px-12 py-6 h-72 rounded-b-lg flex flex-col justify-between">
                                <div className="font-semibold text-xl text-center"> CasualWork 2023</div>
                                <ul className="list-disc text-s">
                                    <li className="py-1">Implemented a recruitment system that provides a platform for temporary workers- employee and manpower companies- employer.</li>
                                    <li className=""> Elevated user experience through user interfaces and data management, demonstrating proficiency in full-stack development.</li>
                                </ul>
                                <div class="pt-4 pb-100">
                                    <p className="text-xs font-bold text-gray-400">Technologies:React JS, Flutter, Firebase </p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div> */}


                    {/* <div>
                        <div className="w-112 h-120 max-w-md rounded-lg overflow-hidden shadow-2xl">
                            <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
                            <div className="px-12 py-6 h-72 rounded-b-lg flex flex-col justify-between">
                                <div className="font-semibold text-xl text-center"> E-Vote 2023</div>
                                <ul className="list-disc text-s">
                                    <li className="py-1">Contributed to a Voting management system that followed distributed system architecture to ensure fault-tolerant operations.</li>
                                    <li className=""> My main contributions include implementing frontend development of the web application.</li>
                                </ul>
                                <div class="pt-4 pb-4">
                                    <p className="text-xs font-bold text-gray-400">Technologies:React JS, React Native, Node JS, MongoDB </p>
                                </div>
                            </div>
                        </div>
                    </div> */}




                    {/* <div>
                        <div className="w-112 h-120 max-w-md rounded-lg overflow-hidden shadow-2xl">
                            <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
                            <div className="px-12 py-6 h-72 rounded-b-lg flex flex-col justify-between">
                                <div className="font-semibold text-xl text-center"> HealthNeed 2022</div>
                                <ul className="list-disc text-s">
                                    <li className="py-1">Worked in an agile team to develop a Hospital management system that allows hospitals to manage information and data related to healthcare processes.</li>
                                </ul>
                                <div class="pt-4 pb-4">
                                    <p className="text-xs font-bold text-gray-400">Technologies:Java servlets, Java server pages (JSPs), HTML, CSS, MySQL </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                    
                    {/* <div>
                        <div className="w-112 h-120 max-w-md rounded-lg overflow-hidden shadow-2xl">
                            <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
                            <div className="px-12 py-6 h-72 rounded-b-lg flex flex-col justify-between">
                                <div className="font-semibold text-xl text-center"> Nova 2022</div>
                                <ul className="list-disc text-s">
                                    <li className="py-1">IOT based plant monitoring smart pot. Develop a solution that uses real-time monitoring and automated controls to enhance plant care.</li>
                                    <li className=""> My main contributions include implementing frontend development of the mobile application.</li>
                                </ul>
                                <div class="pt-4 pb-4">
                                    <p className="text-xs font-bold text-gray-400">Technologies:C++, Flutter, Firebase </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                
                
                <div>
            <a href="https://github.com/movinigamage/casual-work-web">
              <div className="w-112 h-152 max-w-md rounded-lg overflow-hidden shadow-2xl">
                <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
                <div className="px-12 py-6 h-80 rounded-b-lg flex flex-col justify-between">
                  <div className="font-semibold text-xl text-center">CasualWork 2023</div>
                  <ul className="list-disc text-s">
                    <li className="py-1">Implemented a recruitment system that provides a platform for temporary workers- employee and manpower companies- employer.</li>
                    <li className="">Elevated user experience through user interfaces and data management, demonstrating proficiency in full-stack development.</li>
                  </ul>
                  <div className="pt-4">
                    <p className="text-xs font-bold text-gray-400">Technologies: React JS, Flutter, Firebase</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div>
            <div className="w-112 h-152 max-w-md rounded-lg overflow-hidden shadow-2xl">
              <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
              <div className="px-12 py-6 h-80 rounded-b-lg flex flex-col justify-between">
                <div className="font-semibold text-xl text-center">E-Vote 2023</div>
                <ul className="list-disc text-s">
                  <li className="py-1">Contributed to a Voting management system that followed distributed system architecture to ensure fault-tolerant operations.</li>
                  <li className="">My main contributions include implementing frontend development of the web application.</li>
                </ul>
                <div className="pt-4 pb-4">
                  <p className="text-xs font-bold text-gray-400">Technologies: React JS, React Native, Node JS, MongoDB</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-112 h-152 max-w-md rounded-lg overflow-hidden shadow-2xl">
              <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
              <div className="px-12 py-6 h-80 rounded-b-lg flex flex-col justify-between">
                <div className="font-semibold text-xl text-center">HealthNeed 2022</div>
                <ul className="list-disc text-s">
                  <li className="py-1">Worked in an agile team to develop a Hospital management system that allows hospitals to manage information and data related to healthcare processes.</li>
                </ul>
                <div className="pt-4 pb-4">
                  <p className="text-xs font-bold text-gray-400">Technologies: Java servlets, Java server pages (JSPs), HTML, CSS, MySQL</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="w-112 h-152 max-w-md rounded-lg overflow-hidden shadow-2xl">
              <Image src={images} className="w-full h-35 object-cover rounded-t-lg" alt="Sunset in the mountains" />
              <div className="px-12 py-6 h-80 rounded-b-lg flex flex-col justify-between">
                <div className="font-semibold text-xl text-center">Nova 2022</div>
                <ul className="list-disc text-s">
                  <li className="py-1">IOT based plant monitoring smart pot. Develop a solution that uses real-time monitoring and automated controls to enhance plant care.</li>
                  <li className="">My main contributions include implementing frontend development of the mobile application.</li>
                </ul>
                <div className="pt-4 pb-4">
                  <p className="text-xs font-bold text-gray-400">Technologies: C++, Flutter, Firebase</p>
                </div>
              </div>
            </div>
          </div>
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                </div>
            </div>

        </div>
    )
}

export default Projects




import getNavLinks from "./links"
import Image from "next/image";

import { LinkContent } from "@/components/link-content"


export default async function IndexPage() {
  
  const navResources = await getNavLinks();
  const navItems = navResources.map(n => {
    return {
      title: n.title,
      icon: n.icon,
      id: n.id,
    }
  })
  return (
    <>
  <div className=" z-10 w-full  px-5 xl:px-0">

        <div className="mx-auto flex items-center justify-center">
          <h1 className="text-primary text-2xl font-bold md:text-6xl">
            {process.env.HOME_MAIN_HEADING}
              </h1>
        </div>
        <div
        >
          <h2 className="mt-4 mb-4 text-gray-500 text-xl md:mt-4 md:mb-4 md:text-3xl text-center">
          {process.env.HOME_SUBTITLE}
          </h2>
        </div>
        
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center  space-x-5"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href={process.env.FOLLOW_GITHUB}
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            
            <p>
              GitHub
            </p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href={process.env.FOLLOW_X}
            target="_blank"
            rel="noopener norefferer nofollow"
          >
            
            <p>
              Twitter/X
            </p>
          </a>

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href={"mailto:"+process.env.FOLLOW_MAIL}
            target="_blank"
          >
            
            <p>
              Submit
            </p>
          </a>
          
          
        </div>
        
      </div >
      
      <LinkContent navResources={navResources} />
      

      </>
      )
  
}



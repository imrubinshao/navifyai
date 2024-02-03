
"use client";

import Image from "next/image"
import { CategoryWithLinks } from "@/app/links"
import { Link as SiteLink } from "@prisma/client"
import Link from "next/link"

export function LinkItem({ link }: { link: SiteLink }) {
  
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="nofollow"
    >
      
      <div className="relative mb-2 flex min-h-[122px] min-w-0 cursor-pointer flex-col break-words rounded-lg border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg  xl:mb-0" title={link.description}
      >
        <div className="flex items-center">
          <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
            {
              link.icon 
                ? <Image
                    src={link.icon}
                    className="object-fill"
                    alt=""
                    width={40}
                    height={40}
                  /> 
                : <span className="h-full w-full rounded-full  text-center font-bold leading-10">{ link.title.slice(0, 1) }</span>
            }
          </div>
          <span className="text-xl font-bold text-primary">{ link.title }</span>
        </div>
        <div className="mt-2 line-clamp-2 text-sm text-primary">
          
          
          {link.monthPv?"MonthPV:"+link.monthPv.toLocaleString()+" ":''} 
          
          {link.lang!=null?"Lang:"+link.lang+" ":''} 
          { link.description }   
        </div>
      </div>
      
    </Link>
  )
}

export function LinkContent({ navResources }: { navResources: CategoryWithLinks }) {
  return (
    <div className="w-full pt-2">
      <div className="mx-auto w-full px-4 md:px-6">
        {
          navResources.map((category) => {
            return (
              <div id={category.id} key={category.id} className="mb-2">
                <div className="my-2">
                  <h2 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">{ category.title }</h2>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
                  {
                    category.links.map((link) => (
                      <LinkItem link={link} key={link.id} />
                    ))
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

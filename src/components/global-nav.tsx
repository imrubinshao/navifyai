'use client';

import { demos, type Item } from '@/lib/demos';

import { useEffect, useState } from "react"
import Image from "next/image";
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';

import { Category } from "@prisma/client"


import clsx from 'clsx';

export interface SidebarProps {
  siteName: string
  siteLogo: string
  navItems: Pick<Category, "title" | "icon" | "id">[]
}

export function GlobalNav({ siteName, siteLogo, navItems }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const [activeTabId, setActiveTabId] = useState(navItems[0].id)
  
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-white bg-white lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-white">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          
          <Image
            src={siteLogo}
            alt={siteName}
            width="180"
            height="90"
          />
          

          
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-400 group-hover:text-gray-800">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-800" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pb-24 pt-5">
        <div>
          {navItems.map((item) => {
            return (
              <div key={item.id} className='mt-0'>
                     <Link
                    onClick={() => {setActiveTabId(item.id);setIsOpen(false); }  }
                    href={"#"+item.id}
                    className={
                      `block rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-300 ' 
                      ${
                        activeTabId === item.id?
                        'text-gray-600 bg-gray-300'
                        :'text-gray-600'
                      } 
                      `}
                  >
                    {item.title}
                  </Link>
              </div>
            );
          })}
        </div>
        </nav>
       
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      // onClick={() => setActiveTabId(category.id)}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-gray-400 hover:bg-blue-500': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}

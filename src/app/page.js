'use client';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { PiFramerLogoFill } from 'react-icons/pi';
import profile from '../../public/3dperson.png';
import frontend from '../../public/frontend.png';
import uiux from '../../public/uiux.png';
import burger1 from '../../public/burger1.png';
import work1 from '../../public/work1.png';
import work2 from '../../public/work2.png';
import { useState } from 'react';
export default function Home() {
  const [darkmode, setDarkMode] = useState(false);
  return (
    <div className={darkmode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-5 flex justify-between '>
            <h1 className='text-xl font-burtons dark:text-white'>
              durgaShetty
            </h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkmode)}
                  className='cursor-pointer text-xl dark:text-white'
                />
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-pretty px-4 py-2 rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Durga Shetty
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Developer and designer.
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
              I'm a frontend maestro, crafting visually captivating screens with
              a knack for killer UX.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-1 text-gray-600 dark:text-gray-300'>
            <AiFillLinkedin />
            <AiFillTwitterCircle />
            <PiFramerLogoFill />
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image src={profile} layout='fill' objectFit='cover' />
          </div>
        </section>

        {/* 2nd section */}
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              what i got to offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I'm a frontend maestro, crafting visually captivating screens with
              a knack for killer UX.
              <span className='text-teal-500'>company</span>worked for blah blah{' '}
              <span className='text-teal-500'>blah blah</span>
              frontend maestro, crafting visually captivating screens with a
              knack for killer UX.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              frontend maestro, crafting visually captivating screens with a
              knack for killer UX.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center flex flex-col justify-center items-center  shadow-lg p-10 rounded-xl my-10'>
              <Image src={frontend} width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white '>
                frontend development
              </h3>
              <p className='py-2 dark:text-gray-400'>
                frontend maestro, crafting visually captivating screens with a
                knack for killer UX.
              </p>
              <h4 className='py-4 text-teal-600'>frontend tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>react</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>next</p>
            </div>
            <div className='text-center  flex flex-col justify-center items-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={uiux} width={200} height={200} />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>
                frontend development
              </h3>
              <p className='py-2 dark:text-gray-400'>
                frontend maestro, crafting visually captivating screens with a
                knack for killer UX.
              </p>
              <h4 className='py-4 text-teal-600'>frontend tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>react</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>next</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              I'm a frontend maestro, crafting visually captivating screens with
              a knack for killer UX.
              <span className='text-teal-500'>company</span>worked for blah blah{' '}
              <span className='text-teal-500'>blah blah</span>
              frontend maestro, crafting visually captivating screens with a
              knack for killer UX
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image
                src={burger1}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={work1}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={work2}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image
                src={work2}
                className='rounded-lg object-cover '
                width={'100%'}
                height={'100%'}
                layout='responsive'
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

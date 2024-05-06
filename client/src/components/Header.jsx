
import { Navbar, TextInput,Button } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-black'>
        <span className='px-2 py-1 rounded-lg' style={{ backgroundImage: 'linear-gradient(to right, #4F46E5, #D83A7C)', color: 'white' }}> Jyoti's</span>
          Blog
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
         <Button className='w-12 h-10 lg:hidden' color='gray'pill>
            <AiOutlineSearch/>
        </Button>
        <Navbar.Collapse> 
            <Navbar.Link active={path === "/"} >
                <Link to='/'>
                    Home
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"}>
                <Link to='/about'>
                    About
                </Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/projects"} >
                <Link to='/projects'>
                   Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
         <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 lg:hidden' color='gray'pill>
                <FaMoon/>
            </Button>
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
                Sign In
            </Button>
            </Link>
            <Navbar.Toggle pill/>
         </div>
    </Navbar>
  )
}

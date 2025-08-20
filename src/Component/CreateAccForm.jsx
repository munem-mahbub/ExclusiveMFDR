import React from 'react'
import ColoredButton from './ColoredButton'
import List from './List'
import ListItems from './ListItems'
import Image from './Image'
import googleIcon from '../assets/googleIcon.svg'
import Flex from './Flex'

const CreateAccForm = () => {
  return (
    <div>
        <h1 className='text-4xl font-semibold'>Create an account</h1>
        <h5 className='pt-6 pb-12 text-[16px]'>Enter your details below</h5>
        <List>
            <ListItems className={`pb-2 border-b-1 border-gray-400 hover:border-gray-300`}><input type="text" className='w-full hover:placeholder-gray-300 focus:outline-none' placeholder='Name'/></ListItems>
            <ListItems className={`pb-2 mt-10 mb-10 border-b-1 border-gray-400`}><input type="email" className='w-full hover:placeholder-gray-300 focus:outline-none' placeholder='Email or Phone Number'/></ListItems>
            <ListItems className={`pb-2 border-b-1 border-gray-400`}><input type="password" className='w-full hover:placeholder-gray-300 focus:outline-none' placeholder='Password'/></ListItems>
        </List>
        <div className='mt-10 cursor-pointer'>
            <ColoredButton className={`py-4 px-30.5 `}>Create Account</ColoredButton>
            <Flex className={`items-center gap-4 py-4 px-20.75 rounded-sm border-2 border-gray-400 mt-4`}>
                <Image src={googleIcon}/>
                <button className='cursor-pointer'>Sign up with Google</button>
            </Flex>
            <Flex className={`gap-4 pt-8.5 justify-center items-center`}>
                <h5 className='text-gray-600'>Already have an account?</h5>
                <h5 className='border-b-2 border-gray-400 text-gray-600 font-semibold'>Log in</h5>
            </Flex>
        </div>
    </div>
  )
}

export default CreateAccForm
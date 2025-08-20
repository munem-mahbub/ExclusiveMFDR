import React from 'react'
import BreadCrumb from '../Component/BreadCrumb'
import CreateAccForm from '../Component/CreateAccForm'
import Flex from '../Component/Flex'
import Image from '../Component/Image'
import exclusiveSignUp from '../assets/exclusiveSignUp.png'

const SignUp = () => {
  return (
    <>
        <Flex className={`mt-15 gap-32.25 items-center`}>
          <Image src={exclusiveSignUp}/>
          <CreateAccForm/>
        </Flex>
    </>
  )
}

export default SignUp
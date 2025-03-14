import React from 'react'
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container '>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up"> Get in touch</h2>
            <p className='text-gray-500 text-[18px] pt-2' data-aos="zoom-in-up"> 
                Drop me a line, give me call, or send me a message by submitting the form
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <LuMail  size={25}/> shahwaizalam76@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BsTelephone size={25}/> (+92) 345-8975859
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <CiLinkedin size={25}/> Shahwaiz Alam
            </div>   
        </div>
        <div className='space-y-8'> 
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"  className='h-[40px] bg-transparent border border-teal-600'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">E-mail</label>
                <input type="text"  className='h-[40px] bg-transparent border border-teal-600'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea className='bg-transparent border border-teal-600'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-teal-600 p-2 px-6' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact

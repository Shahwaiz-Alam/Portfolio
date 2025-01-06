import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: " A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
        img: "/resume.jpg", 
        tags: ["HTML", "CSS", "TypeScript"],
    },
    {
        id: 1,
        title: "Simple Calculator Project",
        desc: "A basic HTML,CSS and Typescript preject to perform essential aritmatic operations.",
        img: "/calculator.jpg", 
        tags: ["HTML","CSS","Typescript","Node"],
      },
      {
        id: 2,
        title: "Currency Converter Project",
        desc: "A simple HTML and Typescript powered tool for converting currencier with real-time rates. ",
        img: "/currency_converter.jpg", 
        tags: ["HTML","CSS","Typescript","Node"],
      },
      {
        id: 3,
        title: "Countdown Timer",
        desc: "A next.js and Typescript poowered website to track time with an interactive counntdown feature.",
        img: "/timer.jpg", 
        tags: ["Next.js","CSS","Typescript","Node"],
      },
      {
        id:4,
        title: "Todo List",
        desc: "A react and Typescript based app for managing and organising your task efficiently.",
        img: "/to_do_list.jpg", 
        tags: ["React","CSS","Typescript","Node"],
      },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grip-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        decs={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects

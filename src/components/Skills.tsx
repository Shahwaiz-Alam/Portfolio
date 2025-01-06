import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>
I am skilled in web development with expertise in Next.js, HTML, CSS, and JavaScript, enabling me to create dynamic and responsive user interfaces. My design acumen is enhanced by proficiency in tools like Canva and Figma for prototyping and visual design. Additionally, I have experience working with Adobe software, which allows me to integrate creative elements seamlessly into my projects.
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-20 text-teal-600 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">HTML, CSS</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              </div>
              <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Video Editing</h2>
              <h2 data-aos="zoom-in-up">Content Writing</h2>
              <h2 data-aos="zoom-in-up">Canva</h2>
              </div>            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

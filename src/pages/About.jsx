import React from 'react'

const About = () => {
  return (
    <div className="w-full bg-[#0e1117] h-full">
      <div className="flex flex-col justify-center text-center px-60 py-24 gap-4">
        <h3 className="font-bold text-4xl mt-16 mb-8 text-gray-300">
          About Us
        </h3>
        <h5 className='font-semibold text-2xl tracking-wide text-gray-300'>"Empowering Communities Through Knowledge: Ensuring Clean Water for All"</h5>
        <br />
        <hr />
        <p className="font-small text-lg tracking-wide text-gray-400 indent-10 leading-loose">
          At AquaInsight, our mission is clear: to empower individuals and communities with reliable, actionable insights into water quality. Water is our most precious resource, essential for health, recreation, and sustainability. That's why we’re committed to delivering accurate, real-time data on critical water parameters such as turbidity, pH, dissolved oxygen, and beyond.
        </p>
        <br />
        <p className="font-small text-lg tracking-wide text-gray-400 indent-10 leading-loose">
          Whether you’re checking drinking water safety, assessing environmental impacts, or planning recreational activities, AquaInsight provides the data you need to make informed decisions. Our platform combines easy-to-use interactive tools, educational content, and expert-backed analysis to help you understand water quality in your area.
        </p>
        <br />
        <br />
        <p className="font-small text-lg tracking-wide text-gray-400 leading-loose text-left">
          <h4 className='font-bold text-xl tracking-wide text-gray-300'>Why AquaInsight?</h4>
          <br />
          <ul className='list-disc marker:text-gray-400'>
            <li><b className='text-slate-400 text-xl'>Comprehensive Quality Checks : </b> Dive into detailed reports that cover all essential water quality indicators.</li>
            <li><b className='text-slate-400 text-xl'>Salt Calculator : </b> Customize your water profile by entering your source’s mineral levels, helping you understand water's mineral content for various needs.</li>
            <li><b className='text-slate-400 text-xl'>Educational Resources : </b>Access our extensive knowledge base to learn more about water quality, environmental stewardship, and sustainable practices.</li>
            <li><b className='text-slate-400 text-xl'>Community Impact : </b>Join us in our mission to protect and improve water quality for future generations.</li>
          </ul>
        </p>
        <p className="font-small text-lg tracking-wide text-gray-400 leading-loose text-left">With AquaInsight, you have the knowledge to act—because safeguarding water quality starts with awareness.</p>
        <br />
        <br />
        <hr />
        <br />
        <h4 className='font-bold text-xl tracking-wide text-gray-300'>Explore, Learn, and Act. Together, we can make a difference.</h4>
      </div>
    </div>
  )
}

export default About
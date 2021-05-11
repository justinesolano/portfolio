import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'


// import { FaReact } from 'react-icons/fa'
// import { FaSass } from 'react-icons/fa'
// import { SiBulma } from 'react-icons/si'

const Contact = () => {
  return (
    <>
      < hr />
      <h2 className="contact-me">contact me</h2>
      <div className="rows">
        <div className="columns">
          <p className="icon node"> <a href="https://www.linkedin.com/in/justine-solano/" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <FaLinkedin size={50} /></a> </p>
        </div>
        <div className="columns">
          <p className="icon node"> <a href="mailto:justinesolano2370@gmail.com" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <HiOutlineMail size={50} /></a> </p>
        </div>
        <div className="columns" >
          <p className="icon node"> <a href="https://twitter.com/jsolano_dev" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <AiOutlineTwitter size={50} /></a> </p>
        </div>
        <div className="columns" >
          <p className="icon node"> <a href="https://github.com/justinesolano" style={{ color: 'white' }} target="_blank" rel="noreferrer" > <AiFillGithub size={50} /></a> </p>
        </div>
      </div>
      <p className="copyright"><span>&#169;</span>&nbsp;justinesolano.com</p>
    </>
  )
}

export default Contact

import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { CameraIcon, EnvelopeIcon, ArrowUpTrayIcon } from '@heroicons/react/24/solid'
import {Link} from 'react-scroll';
import LinkedIn from '../assets/skills/linkedIn.png';
import GitHub from '../assets/skills/git-hub.png';

const Contact = () => {
  const [done, setDone] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
      e.preventDefault();
      emailjs
          .sendForm('service_pr4mzuh', 'template_sqq3q9g', form.current, 'gylnWLT4ZM7jiCre7')
          .then(
              () => {
                  console.log('SUCCESS!');
                  setDone(true);
              },
              (error) => {
                  console.log('FAILED...', error.text);
              }
          );
  };
  return(
    <div id='Contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>get in touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left side */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
              <div className='lg:p-4 h-full'>
                  <div>
                      <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://wallup.net/wp-content/uploads/2018/03/17/540089-programmers-AutoHotkey-code-programming-laptop-ThinkPad.jpg" alt='/' />
                      <div>
                          <h2 className='py-2'>Name here</h2>
                          <p>Full-Stack Developer</p>
                          <p className='py-4'>I am available for freelance or full-time position. Contact me and let's talk.</p>
                      </div>
                  </div>
                  <div>
                      <p className='uppercase pt-8'>Connect With Me</p>
                      <div className='flex items-center justify-between py-4'>
                        <a href="https://www.linkedin.com/in/ahamed-raza-9a5968222/" target="_blank" rel="noopener noreferrer">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                              <img src={LinkedIn} alt='in' height='20' width='20' />
                          </div>
                        </a>
                        <a href="https://github.com/mdahmedraza" target="_blank" rel="noopener noreferrer">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                              <img src={GitHub} alt='in' height='20' width='20' />
                          </div>
                        </a>
                        <a href="mailto:ahamedraza2233@gmail.com" target="_blank" rel="noopener noreferrer">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                              <EnvelopeIcon className='h-5 w-5' />
                          </div>
                        </a>
                        <a href="https://www.instagram.com/ahmedraza6020/" target="_blank" rel="noopener noreferrer">
                          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                              <CameraIcon className='h-5 w-5' />
                          </div>
                        </a>
                      </div>
                  </div>
              </div>
          </div>
          {/* right side */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Name</label>
                        <input name="user_name" className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2'>Phone Number</label>
                        <input name="user_phone" className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                    </div>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input name="user_email" className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input name="subject" className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea name="message" className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                </div>
                <button type="submit" value="Send" className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                <span className="text-green-600">{done && "Thanks for contacting me"}</span>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link spy={true} to="Main" smooth={true}>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <ArrowUpTrayIcon className='h-5 w-5' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact;
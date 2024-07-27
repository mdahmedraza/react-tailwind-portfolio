import { CameraIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import LinkedIn from '../assets/skills/linkedIn.png';
import Github from '../assets/skills/git-hub.png';

const Main=()=>{
    return(
        <div id='Main' className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                    <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ahmed raza</span></h1>
                    <h1 className='py-2 text-gray-700'>A Full-Stack Web Developer (MERN)</h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I'm full-stack web developer specializing in building (and occasionally designing) 
                        exceptional firebase experiences. Currently, I'm focused on building chatting 
                        or video calling applications while learning react-native technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/ahamed-raza-9a5968222/" target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <img src={LinkedIn} alt='in' height='20' width='20' />
                        </div>
                    </a>
                    <a href="https://github.com/mdahmedraza" target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <img src={Github} alt='in' height='20' width='20' />
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
    )
}
export default Main;
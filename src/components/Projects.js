import ProjectItem from "./ProjectItem";
import chat from '../assets/projects/chatapp.jpg';
import course from '../assets/projects/coursepurchase.jpg';
import e_com from '../assets/projects/e-commerce.jpg';
import socialnetwork from '../assets/projects/socialnetwork.jpg';

const Projects=()=>{
    return(
        <div id='Projects' className='w-full'>
            <div className='max-w-[1248px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                    backgroundImg={socialnetwork}
                    />
                    <ProjectItem
                    backgroundImg={e_com}
                    />
                    <ProjectItem
                    backgroundImg={chat}
                    />
                    <ProjectItem
                    backgroundImg={course}
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects;
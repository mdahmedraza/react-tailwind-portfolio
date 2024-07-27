
const ProjectItem=({backgroundImg})=>{
    return(
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group '>
            <img className='rounded-xl' src={backgroundImg} alt='/' />
        </div>
    )
}
export default ProjectItem;
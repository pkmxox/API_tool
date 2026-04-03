import React from 'react'

const Sidebar = () => {
  return (
    <aside className=' shrink-0 w-[20%] h-full border-r border-border bg-bg-secondary p-4 flex flex-col gap-4 overflow-y-auto '>
        <header className='header_end'>
            <div className='NexDev'>
                NexDev
            </div>
        </header>
        <div className='flex-1 middle_content'>
            <div className='Collections'>
                Collections 
            </div>
        </div>
        <div className=' footer_end'>
            version 0.1.0
        </div>  
    </aside>
  )
}

export default Sidebar
import React from 'react'

const RightSideBar = () => {
  return (
    <aside className='w-[20%] shrink-0 h-full bg-bg-secondary border-l border-border flex flex-col'>
        <header className='header_end text-center h-fit p-2 border-b border-border'>
            AI Assistant
        </header>
        <div className='flex-1 text-center middle_content p-2 overflow-y-auto'>
            Context panel   
        </div>
        <footer>

        </footer>

    </aside>
  )
}

export default RightSideBar
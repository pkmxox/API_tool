
import RequestEditor from '../modules/request/editor/RequestEditor'

const MainPane = () => {
  return (
  <main className=' w-full flex flex-1 flex-col overflow-hidden'>
  
    <div className=' px-4 p-2 overflow-y-auto text-center bg-bg-secondary h-[20%] border-b border-border'>
        Workspace
    </div>
      <div className=' w-full flex-1 flex items-center flex-col text-center h-[50vh] border-b border-border p-2 bg-bg-secondary'>

        <RequestEditor />
    </div>
  </main>
  )
}

export default MainPane
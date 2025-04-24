import { useSelector } from 'react-redux';
import './App.css'
import { Card } from './components/CardComponent'
import { RootState } from './store';
import { ModalAddTask } from './components/ModalComponentAddTasks';
import { useState } from 'react';

function App() {
  const tasks = useSelector((state: RootState) => state.task);

  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <ModalAddTask isOpen={isOpenModal} onClose={() => setIsOpenModal(!isOpenModal)} />
      <div className='flex justify-between mx-3'>
        <h1 className='text-5xl font-bold ml-1'>Tasks</h1>
        <button
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setIsOpenModal(!isOpenModal)}
        >
          Add Task
        </button>
      </div>
      {tasks.map(task => <Card description={task.task} title={task.title} status={task.status} id={task.id} key={task.id} />)}
    </>
  )
}

export default App

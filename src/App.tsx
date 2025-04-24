import { useSelector } from 'react-redux';
import './App.css'
import { Card } from './components/CardComponent'
import { RootState } from './store';
import { ModalAddTask } from './components/ModalComponentAddTasks';

function App() {
  const tasks = useSelector((state: RootState) => state.task);

  return (
    <>
      {/* <ModalAddTask /> */}
      {tasks.map(task => <Card description={task.task} title={task.title} status={task.status} id={task.id} key={task.id} />)}
    </>
  )
}

export default App

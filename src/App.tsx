import { useSelector } from 'react-redux';
import './App.css'
import { Card } from './components/CardComponent'
import { RootState } from './store';

function App() {
  const tasks = useSelector((state: RootState) => state.task);

  return (
    <>
    {tasks.map(task => <Card description={task.task} title={task.title} status={task.status} id={task.id} key={task.id}/>)}
    </>
  )
}

export default App

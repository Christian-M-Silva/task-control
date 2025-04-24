import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { deleteTask, toggleStatusTask } from "../../store/slices/tasksSlice";

type cardProp = {
  title: string;
  description: string;
  status: boolean;
  id: string
};

export function Card({ title, description, status, id }: cardProp) {
  const dispatch = useDispatch<AppDispatch>();

  return (<div className={`max-w-md mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200 ${status ? 'bg-green-500' : 'bg-red-500'} mb-1`}>
    <div className="flex items-start p-4">
      <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={status} onClick={()=> dispatch(toggleStatusTask({id}))}/>

      <div className="flex-1 ml-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <button className="text-white hover:text-red-800 cursor-pointer" onClick={()=> dispatch(deleteTask({id}))}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>

        <p className="mt-2 text-white text-opacity-90">
          {description}
        </p>
      </div>
    </div>
  </div>)
}
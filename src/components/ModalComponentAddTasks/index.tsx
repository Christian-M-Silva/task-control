import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addTask } from "../../store/slices/tasksSlice";
import { useState } from "react";

export function ModalAddTask() {
    const dispatch = useDispatch<AppDispatch>();
    const [title, setTitle] = useState<string>('')
    const [task, setTask] = useState<string>('')
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={task}
                    className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setTask(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                    <button
                        className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                        onClick={()=> dispatch(addTask({task, title}))}
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    );
};


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Itasks, ParamPayloadAddTask, ParamPayloadIdTask } from '../../interfaces';


const initialState: Itasks[] = [
  {
    id: '1',
    status: false,
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: 'testetet'
  },
  {
    id: '2',
    status: true,
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: 'testetet'
  },
  {
    id: '3',
    status: false,
    task: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    title: 'testetet'
  },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: { 
    addTask: (state, action: PayloadAction<ParamPayloadAddTask>) => {
      state.push({
        status: false,
        task: action.payload.task,
        title: action.payload.title,
        id: crypto.randomUUID()
      })
    },
    toggleStatusTask: (state, action: PayloadAction<ParamPayloadIdTask>) => {
      state.map((task) => {
        if (task.id === action.payload.id) {
          task.status = !task.status
        }
      })
    },
    deleteTask: (state, action: PayloadAction<ParamPayloadIdTask>) => {
      const index: number = state.findIndex(task => task.id === action.payload.id)

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

// Exporta as ações
export const { addTask, deleteTask, toggleStatusTask } = tasksSlice.actions;
//Exportar o reducer desse slice
export default tasksSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Itasks, ParamPayloadAddTask, ParamPayloadIdTask } from '../../interfaces';


const initialState: Itasks[] = []

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

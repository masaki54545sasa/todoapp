import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 型定義
interface Task {
  id: number;
  name: string;
}

export const useStore = defineStore({
  id: 'task',
  state: () => ({
    serialId: 0,
    items: [] as Task[]
  }),
  actions: {
    addtask(name: string) {
      const task = useStore();
      task.serialId++;
      task.items.push({ id: this.serialId, name: name });
    },
    taskdelete(num:number){
      const task = useStore();
      for(let i= 0;i<task.items.length;i++){
        
        if(task.items[i].id == num){
            task.items.splice(i,1);
        }
      }
    }
  },

})

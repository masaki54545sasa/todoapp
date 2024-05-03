<script setup>
import { storeToRefs } from "pinia";
const task = useStore();
const coutentRef = ref("");
const deletetasknum = ref("");
const resetCotentRef =() =>{
  coutentRef.value = "";
};
const adddeletetaskRef =() =>{
  console.log(event.currentTarget.value);
  task.taskdelete(event.currentTarget.value);
}
</script>

<template>
  <v-app>
    <h1>TO doリスト</h1>
    <v-container>
      <v-text-field v-model="coutentRef" label="タスクを入力してください"></v-text-field>
      <v-btn  @click="task.addtask(coutentRef)">追加</v-btn>
      <v-btn @click="resetCotentRef">リセット</v-btn>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">タスクID</th>
            <th class="text-left">タスク名</th>
            <th class="text-left">タスク削除</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in task.items" :key="item.id" class="text-left">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td><v-btn v-bind:value="item.id" @click="adddeletetaskRef" density="compact" icon="mdi-delete-outline"></v-btn></td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </v-app>
</template>

<template>
    <div>
        <h1>Todo List</h1>
        <input type="text" placeholder="Add something" v-model="newTodo"/>
        <button @click="addTodo">Add</button>

        <ul v-for="item in todoList" :key="item.id">
            <li>{{ item.text }}
                <button @click="removeTodo(item.id)">Remove</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todoList = ref([])

const addTodo = () => {
    if (!newTodo.value) return
    todoList.value.push({
        text: newTodo.value,
        id: Math.random()
    })
    newTodo.value = ''
}

const removeTodo = (id) => {
    todoList.value = todoList.value.filter(item => item.id !== id)
}

</script>
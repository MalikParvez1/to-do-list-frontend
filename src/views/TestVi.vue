<template>
    <div>
      <h1>To-Do List</h1>
      <input v-model="taskInput" type="text" placeholder="Add a task..." />
      <button @click="addTask">Add Task</button>
      <ul>
        <li v-for="(task, index) in tasks" :key="index" @click="toggleTaskCompletion(index)"
          :class="{ completed: task.completed }">
          {{ task.name }}
        </li>
      </ul>
    </div>
  </template>

<script>
import TestView from './TestView.vue'

export default {
  name: TestView,
  data () {
    return {
      taskInput: '',
      tasks: []
    }
  },
  created () {
    this.loadTasks()
  },
  methods: {
    addTask () {
      if (!this.taskInput) {
        return
      }
      this.tasks.push({
        name: this.taskInput,
        completed: false
      })
      this.taskInput = ''
      this.saveTasks()
    },
    toggleTaskCompletion (index) {
      this.tasks[index].completed = !this.tasks[index].completed
      this.saveTasks()
    },
    loadTasks () {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || []
      this.tasks = tasks
    },
    saveTasks () {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>

  <style>
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background-color: lightgray;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
  }

  li.completed {
    background-color: lightgreen;
    text-decoration: line-through;
  }
  </style>

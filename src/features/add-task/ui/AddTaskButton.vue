<script setup lang="ts">
import { useTasksStore } from 'entities/task'

const tasksStore = useTasksStore()

function add(): void {
  const id = _size(tasksStore.tasks) + 1
  tasksStore.add({ id, title: `Task ${id}` })
}
</script>

<template>
  <button class="size-fit animate-in fade-in zoom-in" @click="add">
    <Icon name="i:arxiv" class="text-green-800" />
  </button>
</template>

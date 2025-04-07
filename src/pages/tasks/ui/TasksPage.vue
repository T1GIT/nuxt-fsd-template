<script setup lang="ts">
import { useTasksStore } from 'entities/task'
import { TasksList } from 'widgets/tasks-list'

const tasksStore = useTasksStore()

const rootRef = shallowRef<HTMLElement>()
const size = toReactive(useElementSize(rootRef))
</script>

<template>
  <div ref="rootRef" class="flex pt-5">
    <TasksList :tasks="tasksStore.tasks" />

    {{ size }}
  </div>
</template>

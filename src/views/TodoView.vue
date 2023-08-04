<template>
  <div class="about">
    <h1>Todos from user {{ props.id }}</h1>
    <hr />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodo } from '@/composables/useTodo'

const props = defineProps<{ id: string }>()

const localId = ref('')

watch(
  () => props.id,
  (v) => (localId.value = v),
  { immediate: true }
)
const { todos } = useTodo(localId)
</script>

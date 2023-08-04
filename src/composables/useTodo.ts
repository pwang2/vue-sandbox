import { computed } from 'vue'
import type { Ref } from 'vue'
import { useFetch } from '@vueuse/core'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export function useTodo(idRef: Ref<string>) {
  const url = computed(() => `https://jsonplaceholder.typicode.com/todos?userId=${idRef.value}`)
  const { data } = useFetch(url, { refetch: true }).json<Todo[]>()
  return { todos: data }
}

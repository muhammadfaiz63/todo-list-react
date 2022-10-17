import React, { useCallback, createContext, useState } from 'react'
import { getTodo } from '../api/todo'

export const TodoContext = createContext({})

export default function TodoProvider(props) {
  const [todo, setTodo] = useState([])
  const [filterTodo, setFilterTodo] = useState([])
  const [detailTodo, setDetailTodo] = useState({})

  const getDataTodo = useCallback(async (params) => {
    if (todo.length === 0) {
      getTodo(params).then((result) => {
          setTodo(result)
          setFilterTodo(result)
          return { status: 'OK', result }
        })
        .catch((error) => {
          return { status: 'Failed', error }
        })
    }
  }, [])

  return (
    <TodoContext.Provider
      value={{
        setTodo,
        todo,
        filterTodo,
        setFilterTodo,
        getDataTodo,
        detailTodo,
        setDetailTodo,
      }}
      {...props}
    />
  )
}

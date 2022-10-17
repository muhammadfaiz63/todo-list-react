import { useContext, useState } from 'react'
import { ActivityContext,TodoContext } from '../contexts/index'
import _ from "lodash"

export default function useActivity(props) {
  const { getDataActivity, activity,setActivity,setFilterActivity,createDataActivity,filterActivity,getDetailActivity,detailActivity } = useContext(ActivityContext)
  const { getDataTodo, todo,setTodo,setFilterTodo,filterTodo } = useContext(TodoContext)

  return {
    getDataActivity,
    createDataActivity,
    filterActivity:_.orderBy(filterActivity,["created_at"],["desc"]).slice(0,10),
    activity:_.orderBy(activity,["created_at"],["desc"]).slice(0,10),
    getDetailActivity,detailActivity,getDataTodo,
    setActivity,setFilterActivity
  }
}

import React, { useCallback, createContext, useState } from 'react'
import { getActivity,getIdActivity,postActivity } from '../api/activity'

export const ActivityContext = createContext({})

export default function ActivityProvider(props) {
  const [activity, setActivity] = useState([])
  const [filterActivity, setFilterActivity] = useState([])
  const [detailActivity, setDetailActivity] = useState({})

  const getDataActivity = useCallback(async () => {
    if (activity.length === 0) {
      getActivity()
        .then((result) => {
          setActivity(result.data)
          setFilterActivity(result.data)
          return { status: 'OK', result: result.data }
        })
        .catch((error) => {
          return { status: 'Failed', error }
        })
    }
  }, [])

  const getDetailActivity = (id) => {
    getIdActivity(id).then((result) => {
        setDetailActivity(result)
        return { status: 'OK', result: result }
    })
    .catch((error) => {
        return { status: 'Failed', error }
    })
  }

  const createDataActivity = () => {
    postActivity({title:"New",email:"muhammadfaiz7130@gmail.com"}).then((result) => {
        let activityData = [...activity,result]
        let filterActivityData = [...filterActivity,result]
        setActivity(activityData)
        setFilterActivity(filterActivityData)
        return { status: 'OK', result: result }
    })
    .catch((error) => {
        return { status: 'Failed', error }
    })
  }

  return (
    <ActivityContext.Provider
      value={{
        setActivity,
        activity,
        filterActivity,
        setFilterActivity,
        getDataActivity,
        getDetailActivity,
        createDataActivity,
        detailActivity,
        setDetailActivity,
      }}
      {...props}
    />
  )
}

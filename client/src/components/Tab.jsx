import React from 'react'

import state from '../store'
import { useSnapshot } from 'valtio'



const Tab = () => {
  const snap = useSnapshot(state);
  return (
    <div>Tab</div>
  )
}

export default Tab
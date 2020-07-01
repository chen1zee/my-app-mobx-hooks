import React, {useCallback} from "react";
import {useHistory} from 'react-router-dom'

type Props = {
  aaa: string
}

function Home({
  aaa
              }: Props) {
  const history = useHistory()
  const goLogin = useCallback(() => {
    history.push("/login")
    console.log(aaa)
  }, [aaa, history])
  return (
    <div>
      home {aaa}
      <button onClick={goLogin}>login</button>
    </div>
  )
}

export default Home

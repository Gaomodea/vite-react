import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addToNum } from "./store/modules/counterStore"

export default function EffectComponent () {
  const { count } = useSelector((state: any) => state.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('effect component effect call')
  }, [])

  console.log('effect component call')

  return (
    <div>
      this. is EffectComponent -- { count }
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(addToNum(10))}>+ 10 </button>
      <button onClick={() => dispatch(addToNum(20))}>+ 20 </button>
    </div>
  )
} 
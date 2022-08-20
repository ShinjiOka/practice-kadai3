import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync } from './counterSlice'
import { useAppDispatch } from '../../app/hooks'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  //useSelectorとuseDispatchを使うことでstoreの中身を使えるようにできる。
  //storeを子コンポーネントで使いたいときに使用するのがuseSelectorとuseDispatchになる。

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment amount value"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          increment amount
        </button>
        <button
          aria-label="increment async value"
          onClick={() => dispatch(incrementAsync())}
        >
          increment async
        </button>
      </div>
    </div>
  )
}
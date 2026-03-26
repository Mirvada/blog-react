import { useState } from "react";
import style from './Counter.module.scss';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className={style.btn} onClick={() => setCount(count + 1)}>Click</button>
    </div>
  )
}
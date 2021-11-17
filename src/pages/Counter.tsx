import { Component, createSignal } from 'solid-js';
import st from './counter.module.css';

// const Counter: Component = () => {
export default () => {
  const [count, setCount] = createSignal(0);
  const increment = (by = 1) => setCount(count() + by);
  const decrement = (by = 1) => setCount(count() - by);

  return (
    <div class={st.counter}>
      <button type="button" onClick={() => decrement(10)}>--</button>
      <button type="button" onClick={() => decrement()}>-</button>
      <span>{count()}</span>
      <button type="button" onClick={() => increment()}>+</button>
      <button type="button" onClick={() => increment(10)}>++</button>
    </div>
  );
};

// export default Counter;

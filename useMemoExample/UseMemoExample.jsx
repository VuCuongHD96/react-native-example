import { useState, useMemo } from 'react';

function slowSquare(number) {
  console.log('Đang tính toán bình phương (chậm)...');
  const start = performance.now();
  for (let i = 0; i < 1_000_000_000; i++) { } // giả lập tác vụ nặng
  const end = performance.now();
  const duration = end - start;
  console.log(`slowSquare mất ${duration.toFixed(2)}ms`);
  return { result: number * number, duration };
}

function renderView({ number, square, duration, count, onIncreaseNumber, onIncreaseCount }) {
  return (
    <div>
      <p>
        Bình phương của {number} là {square}
      </p>
      <p>Thời gian tính toán: {duration.toFixed(2)}ms</p>
      <button onClick={onIncreaseNumber}>Tăng number</button>

      <p>Count: {count}</p>
      <button onClick={onIncreaseCount}>
        Tăng count
      </button>
    </div>
  );
}

export default function UseMemoExample() {
  const [number, setNumber] = useState(2);
  const [count, setCount] = useState(0);

  const { result: square, duration } = slowSquare(number)

  return renderView({
    number,
    square,
    duration,
    count,
    onIncreaseNumber: () => setNumber(number + 1),
    onIncreaseCount: () => setCount(count + 1),
  });
}

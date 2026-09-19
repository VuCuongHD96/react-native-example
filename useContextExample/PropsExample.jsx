function GrandChild({ message }) {
  return <p>GrandChild nhận: {message}</p>;
}

function Child({ message }) {
  return (
    <div>
      <p>Child nhận: {message}</p>
      <GrandChild message={message} />
    </div>
  );
}

export default function PropsExample() {
  const message = 'Hello from Parent';

  return (
    <div>
      <p>Parent gửi: {message}</p>
      <Child message={message} />
    </div>
  );
}

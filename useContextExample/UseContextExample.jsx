import { createContext, useContext } from 'react';

const MessageContext = createContext();

function GrandChild() {
  const message = useContext(MessageContext);
  return <p>GrandChild nhận (qua useContext): {message}</p>;
}

function Child() {
  return (
    <div>
      <p>Child không cần nhận message qua props nữa</p>
      <GrandChild />
    </div>
  );
}

export default function UseContextExample() {
  const message = 'Hello from Context Provider';

  return (
    <MessageContext.Provider value={message}>
      <div>
        <p>Parent gửi (qua Context): {message}</p>
        <Child />
      </div>
    </MessageContext.Provider>
  );
}

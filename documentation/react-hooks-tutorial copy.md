# React Hooks Tutorial: useState and useEffect

## Example Component

```typescript
import React, { useState, useEffect } from 'react';

interface SimpleComponentProps {
  name: string;
}

function SimpleComponent({ name }: SimpleComponentProps) {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('Hello World');

  useEffect(() => {
    console.log('Component rendered!');
    console.log('Current count:', count);
  });

  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  useEffect(() => {
    console.log('Name prop changed to:', name);
    setMessage(`Hello ${name}!`);
  }, [name]);

  useEffect(() => {
    console.log('Component mounted!');
    
    return () => {
      console.log('Component will unmount!');
    };
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{message}</h2>
      
      <div>
        <p>Count: {count}</p>
      </div>
      
      <div>
        <button onClick={handleIncrement}>
          Increment
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
      
      <p>
        Open browser console to see useEffect logs!
      </p>
    </div>
  );
};

export default SimpleComponent;
```

---

## Study Questions

### Question 1: useEffect without Dependencies
**What happens with the first useEffect that has no dependency array?**

A) It runs only once when the component mounts  
B) It runs after every render of the component  
C) It never runs  
D) It causes an infinite loop

---

### Question 2: useEffect with Dependencies
**When will the useEffect with `[count]` dependency run?**

A) Only when the component mounts  
B) Only when the count state changes  
C) After every render  
D) Only when the component unmounts

---

### Question 3: useState Hook
**What happens when you click the Increment button?**

A) The count increases and a console log appears  
B) Only the count increases  
C) Only a console log appears  
D) Nothing happens

---

### Question 4: Cleanup Functions
**When does the cleanup function in the last useEffect run?**

A) Every time the component re-renders  
B) Only when the component is about to unmount  
C) When the count changes  
D) When the name prop changes

---

### Question 5: Prop Changes
**What happens when the `name` prop changes from "John" to "Jane"?**

A) Only the message state updates  
B) Only a console log appears  
C) Both the message updates and a console log appears  
D) The component re-renders but nothing else happens

---

### Question 6: useState Initial Value
**What is the initial value of the `count` state when the component first renders?**

A) undefined  
B) null  
C) 0  
D) 1

---

### Question 7: State Updates
**What happens if you call `setCount(5)` followed immediately by `setCount(10)` in the same function?**

A) count becomes 5  
B) count becomes 10  
C) count becomes 15  
D) An error occurs

---

### Question 8: State and Re-renders
**Why does the component re-render when `setMessage` is called?**

A) Because console.log is called  
B) Because the message state has changed  
C) Because useEffect forces a re-render  
D) Because the name prop changed

---

### Question 9: Props
**What happens when the parent component passes a different value for the `name` prop?**

A) Nothing happens, props cannot change  
B) The component re-renders and the useEffect with [name] dependency runs  
C) Only the state updates but no useEffect runs  
D) The component unmounts and remounts

---

### Question 10: Open Question
**Describe how useEffect works. Include in your answer when it runs, what the dependency array does, and what cleanup functions are for.**
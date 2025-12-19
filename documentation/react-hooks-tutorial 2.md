
## Example Component

```typescript
type CounterProps = {
  start: number;
};

function Counter({ start }: CounterProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

```

---


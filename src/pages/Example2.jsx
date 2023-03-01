import { useState, useMemo, useCallback } from "react";

const sum = (persons) => {
  console.log("sums...");
  return persons.map((person) => person.age).reduce((l, r) => l + r, 0);
};

export default function Example2() {
  const [value, setValue] = useState("");
  const [persons] = useState([
    {
      name: "mark",
      age: 39,
    },
    {
      name: "annark",
      age: 20,
    },
  ]);
  const change = (e) => {
    setValue(e.target.value);
  };
  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <button onClick={click}>Click</button>
      <p>{count}</p>
    </div>
  );
}

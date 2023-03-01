import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "PLUS") {
    return {
      count: state.count + 1,
    };
  }
  return state;
};

export default function Example6() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const click = () => {
    dispatch({ type: "PLUS" });
  };
  //reducer
  //dispatch
  return (
    <div>
      <p>you clicked {state.count} times</p>
      <button onClick={click}>click me</button>
    </div>
  );
}

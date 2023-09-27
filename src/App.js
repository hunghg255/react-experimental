
import  React, {useEffect, useState, unstable_act} from '@hunghg255/react';

const Child = () => {
  useEffect(() => {
    console.log('Child useEffect');
  });

  return <div>Child</div>
}


const delay = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 10_000);
  })
}

export default function App() {
  const [count, setCount] = useState(0);

  const act = unstable_act(() => {
    console.log('Hello');
  });

  useEffect(() => {
    // const r = cache()
    act.then(r => {
      console.log({r})
    })
  }, [])


  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>


    </>
  );
}

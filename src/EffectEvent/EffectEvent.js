import React, { useState, experimental_useEffectEvent, useEffect } from '@hunghg255/react';

const EffectEvent = ({ data }) => {

  const [count, setCount] = useState(0);

  // const addCount = () => {
  //   console.log(data);
  // }

  // useEffect(() => {
  //   addCount();

  //   // cần add addCount vào dependencies => add useCallback cho addCount và add props data vào dependencies
  // }, [addCount])

  // Fix: dùng experimental_useEffectEvent
  const addCount = experimental_useEffectEvent(() => {
    console.log(data);
  });

  useEffect(() => {
    addCount();
  }, [])

  return (
    <>
      <h1>useEffectEvent</h1>
    </>
  );
}

export default EffectEvent;

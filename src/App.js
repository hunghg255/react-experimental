import React, { useEffect, useState, unstable_act } from '@hunghg255/react';
import Optimistic from './Optimistic/Optimistic';


export default function App() {
  return (
    <>
      <Optimistic />

      <EffectEvent />
    </>
  );
}

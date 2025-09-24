import { Suspense } from 'react';
import './App.css'
import Bottles from './component/bottles/bottles'
// import { add, diff as sub} from './component/math/math'

function App() {
  // const sum = add(2,3);
  // const diff = sub(10,4);
  const bottlesPromise = fetch('../public/bottles.json').then(res => res.json());
  return (
    <>
      <h1>Bye awesome Bottles</h1>
      <Suspense fallback={<p>Loading.....</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App

// import logo from './logo.svg';
import { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
// import Test from './Components/Test';
// import Weather from './Components/Weather';

function App() {
  return (
    <>
    <Suspense fallback={<Loading/>}>

    <Navbar/>

    </Suspense>
    {/* <Weather/> */}
    {/* <Test/> */}
    </>
  );
}
function Loading() {
  return <h2>🌀 Working...</h2>;
}
export default App;

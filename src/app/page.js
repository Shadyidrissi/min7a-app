import './globals.css'
import LastThree from '../components/LastThree'
import Home from '../components/Home';

export default function page() {
  return (
    <div style={{minHeight:'100vh'}}>
      <LastThree/>
      <Home/>
    </div>
  );
}

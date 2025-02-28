import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
    const [memberData, setMemberData] = useState(null);
    
{/**
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);

    if (loading) return <h1></h1>
    if (err) return <h1></h1>
*/}

    useEffect(() => {

    }, [])

    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-r from-twicemagenta to-newjeansblue">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
                Once & Bunnys
            </h1>
            <h1 className=''>this page is a Twice and newJeans fan page</h1>
            <h1 className='font-bold font-size-5'>Is not official</h1>
            
      </div>
    );
  }
  
  export default App;
  
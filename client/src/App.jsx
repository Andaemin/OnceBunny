import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';

function App() {
    const [memberData, setMemberData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        console.log("요청확인");
        axios.get('http://localhost:5001/member')
            .then((res) => {
                console.log("응답 완료.", res.data)
                setMemberData(res.data);
                setLoading(false);
            }) 
            .catch((err) =>{
                setErr(err);
                setLoading(false);
                console.log(`에러난다 ${err}`);
            });
    }, []);

    if (loading) return <h1>loading</h1>
    if (err) return <h1>오류남</h1>
    
    return (
        <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-r from-twicemagenta to-newjeansblue">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
                Once & Bunnys
            </h1>
            <h1 className=''>this page is a Twice and newJeans fan page</h1>
            <h1 className='font-bold font-size-5'>Is not official</h1>
            <div className='flex flex-row w-32 justify-between'>
                {memberData.map((member) => (
                <h1 key={member.name} member={member}>{member.name}</h1>
            ))}
            </div>
      </div>
    );
  }
  
  export default App;
  
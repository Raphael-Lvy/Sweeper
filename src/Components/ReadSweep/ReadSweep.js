import React,{useState,useEffect} from 'react';
import firebase from "firebase/app";
import { db} from "../../firebaseConfig";
export function ReadSweep() {
    
    const [sweeps, setSweeps] = useState([])
    const fetchSweeps = async () => {
        const response = db.collection('sweeps');
        const data = await response.get();
        data.docs.forEach(item => {
            setSweeps([...sweeps, item.data()])
        })
    }
    useEffect(() => {
        fetchSweeps();
    }, [])
    return (
        <div className="App">
            {
                 sweeps.map(sweep => {
                    return (
                        <div >
                            <h4>{sweep.sweep}</h4>
                            <p>{sweep.user}</p>
                            <p>{sweep.id}</p><p></p>
                        </div>
                    )
                })
            }
        </div>
    );
}
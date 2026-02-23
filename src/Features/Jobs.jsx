import { useEffect, useState } from "react"
import { Card } from "./Card";
import Swal from 'sweetalert2';
import 'ldrs/ring'

export const Jobs = (props)=>{
    
    const [ jobs,setJobs ] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        async function getJobs(){
            try {
                let response = await fetch(props.url+"/api/jobs/get-list");
                const dataJobs = await response.json();
                setJobs(dataJobs)
            } catch (error) {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Upppssss.."+response.statusText,
                    showConfirmButton: false,
                    timer: 3000
                });
            }finally {
                setLoading(false);
            }
        } 
        getJobs();
    },[])
    
    return(
        <>
        {loading? <div className="d-flex justify-content-center"> <l-ring size={100} color="darkblue"></l-ring></div>:
            <div className="p-3">
                {jobs.map((job)=>(<Card url={props.url} job={job} data={props.data} key={job.id} />))}
            </div>
        }
        
        </>
    )
}
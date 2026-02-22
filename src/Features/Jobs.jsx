import { useEffect, useState } from "react"
import { Card } from "./Card";
import Swal from 'sweetalert2';

export const Jobs = (props)=>{
    
    const [ jobs,setJobs ] = useState([]); 

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
            }
        } 
        getJobs();
    },[])
    
    return(
        <div className="p-3">
            {jobs.map((job)=>(<Card url={props.url} job={job} data={props.data} key={job.id} />))}
        </div>
    )
}
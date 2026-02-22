import { useEffect } from "react"

export const Jobs = (URL)=>{

    useEffect (()=>{
        async function getJobs(){
            try {
                console.log(URL.url);
                
                let response = await fetch(URL.url+"/api/jobs/get-list");
                const dataJobs = await response.json();
                console.log(dataJobs);
                
            } catch (error) {
                console.log(error);
                
            }
        } 
        getJobs();
    },[])
    
    return(
        <>
        </>
    )
}
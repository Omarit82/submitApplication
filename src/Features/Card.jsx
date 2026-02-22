import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';

export const Card = (props) => {
    const {register, handleSubmit} = useForm()

    async function onSubmit(info){
        try {
            const information = {
                "uuid": props.data.uuid,
                "jobId": props.job.id,
                "candidateId": props.data.candidateId,
                "repoUrl": info.github,
                "applicationId":props.data.applicationId
            }
            const response = await fetch(props.url+"/api/candidate/apply-to-job",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(information)
            })
            if (response.status === 200){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Application submited",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Upppssss.."+response.statusText,
                    showConfirmButton: false,
                    timer: 1500
                });
            }            
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Upppssss.."+error,
                showConfirmButton: false,
                timer: 3000
            });
        }
    }

    return(
        <div className="card ps-5 pe-5 w-75 d-flex flex-row justify-content-between m-auto mt-3">
            <div className="p-2">
                <h3>{props.job.title} </h3>
                <h4>Id: {props.job.id}</h4>
            </div>
            <div className="p-2" >
                <form action="" onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                    <label htmlFor="github">Github page</label>
                    <input type="text" name="github" id="" {...register("github")}/>
                    <button type="submit" className="btn btn-success">Submit Application</button>
                </form>
            </div>
        </div>
    )
}
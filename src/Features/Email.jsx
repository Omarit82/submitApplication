import { useForm } from "react-hook-form";

export const Email = ({props}) => {
    const {register, handleSubmit} = useForm();


    const onSubmit = (data) => {
        props(data);
    }

    return(
        <div className="w-50 d-flex flex-column justify-content-center align-items-center m-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                <label className="info" htmlFor="email">Enter your email: </label>
                <input className="m-2" type="email" name="email" {...register("email")} />
                <button className="btn btn-info w-75 m-2" type="submit">Submit</button>
            </form>
        </div>
    )
}
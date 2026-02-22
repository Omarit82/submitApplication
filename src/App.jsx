import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './assets/components/layout/Footer'
import { Header } from './assets/components/layout/Header'
import { Email } from './Features/Email'
import { Jobs } from './Features/Jobs'
import Swal from 'sweetalert2';

function App() {
	const [email, setEmail] = useState(null);
	const [ data,setData ] = useState(null);
	const URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

	
	useEffect(() => {
		if(email != null){
			async function callData (){
				try {
					let response = await fetch(URL+"/api/candidate/get-by-email?email="+email.email);
					const data = await response.json();
					setData(data);
				} catch (error) {
					Swal.fire({
                    	position: "top-end",
						icon: "error",
						title: "Upppssss.."+response.statusText,
						showConfirmButton: false,
						timer: 2000
                	});
				}
			}
 			callData();
		}
	},[email])


  	return (
    	<>
        	<Header />
			<main className='mainBackground'>
				{email?<Jobs url={URL} data={data}/>:<Email props={setEmail}/>}
			</main>
        	<Footer/>
      	</>
  )
}

export default App

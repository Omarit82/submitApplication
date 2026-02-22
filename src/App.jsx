import { useEffect, useState } from 'react'
import './App.css'
import { Footer } from './assets/components/layout/Footer'
import { Header } from './assets/components/layout/Header'
import { Email } from './Features/Email'
import { Jobs } from './Features/Jobs'

function App() {
	const [email, setEmail] = useState(null);
	const URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

	useEffect(() => {
		if(email != null){
			async function callData (){
				try {
					let response = await fetch(URL+"/api/candidate/get-by-email?email="+email.email);
					const data = await response.json();
					console.log(data);
				
				} catch (error) {
					console.log("Error: "+error);
					
				}
			}
 			callData();
		}
	},[email])


  	return (
    	<>
        	<Header />
			<main className='mainBackground'>
				{email?<Jobs url={URL}/>:<Email props={setEmail}/>}
			</main>
        	<Footer/>
      	</>
  )
}

export default App

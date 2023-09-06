import { useState } from 'react'
import Thankimg from './assets/illustration-thank-you.svg'
import Starlogo from './assets/icon-star.svg'
import './index.css'



function App(){

  const[Submitted,setSubmiited]=useState(false);
const[items,setItems]=useState(0)



const   Button =({number})=>{
  return(
    <>
    <button onClick={()=>setItems(number)}
     className='text-db w-9 bg-lg rounded-full h-9 hover:bg-db hover:text-vdb active:bg-orange '>
    {number}
    </button>
    </>
  )

}





  return (
    <>
      {!Submitted && (
         <main className='w-3/5  m-auto bg-vdb flex gap-3 flex-col justify-center items-center' >
         <section className='w-2/4 h-2/4   rounded-3xl p-9  grid gap-4 component'>
           <button className='bg-lg rounded-full w-9 h-9  '>
           <img src={Starlogo} alt="starlogo" className='m-auto block'  />
           </button>
           <h1 className='text-white'>How did we do?</h1>
           <p className='text-lg text-sm'> Please let us know how we did we your support request.
             All feedback is appreciated to help us improve our offering!
           </p>
           <div className='flex justify-between'>
           < Button  number={1}/>
           < Button  number={2}/>
           < Button  number={3}/>
           < Button  number={4}/>
           < Button  number={5}/>
           
           </div>
           <button type='submit' onClick={()=>setSubmiited(true)}
           className='bg-orange rounded-full m-auto w-full h-10 text-white block
            hover:bg-white hover:text-orange '>
             Submit</button>
             
         </section>
      
         
         
        </main>
      )}
      
      {Submitted && (<ThankYou items={items}/>)}
        
    </>
  )
  }

const ThankYou = ({items})=>{

  return (
    <>
   <main className='w-3/5 m-auto bg-vdb flex gap-3  flex-col justify-center items-center'>
    <section className='w-2/4 h-2/4   rounded-3xl p-9  grid gap-4 component'>
      <img src={Thankimg} alt="" className='m-auto'/> 
      <p className='text-orange rounded-full bg-db text-center m-auto p-2'> You selected {items} out of 5</p>   
      <h2 className='text-white text-center'>Thank You!</h2>  
      <p className='text-lg text-sm text-center'>We appreciate you taking the time to give a rating. If you ever need more support, 
       dont hesitate to get in touch!</p>
    </section>
    </main>
  
    </>

  )
}





export default App

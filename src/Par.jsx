// import React, { useState } from 'react'

// const Par = () => {
//     const[input,setInput]=useState({
//         name:""
//     })

//     function handleChange(e){
//        setInput({
//         ...input,
//         [e.target.name]:e.target.value
//        })
//     }
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(input)
//         setInput({
//             name:""
//         })
//     }
//   return (
//     <div>
//         <h1>
//             <form onSubmit={handleSubmit} >
//                 <input name='name' value={input.name} onChange={handleChange} type='text' placeholder='enter your name '/>
//                 <button>Submit</button>
//             </form>
//         </h1>
//     </div>
//   )
// }

// export default Par;


// import React, { useState } from 'react'

// const Par = () => {
//     const[input,setInput]=useState({
//         name:"",
//         address:{
//             street:"",
//             phone:""
//         }
//     })

//     function handleChange(e){
//       const{name,value} = e.target;
//       if (name.includes(".")) {
//           const[parent,child] = name.split(".")
//           setInput((prev)=>({
//             ...prev,
//             [parent]:{
//                 ...prev[parent],
//                 [child]:value
//             }
//           }))
//       }else{
//         setInput((prev)=>({
//            ...prev,
//            [name]:value
//         }))
//       }
//     }



//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(input)
//         setInput({
//             name:"",
//             address:{
//             street:"",
//             phone:""
//         }
//         })
//     }
//   return (
//     <div>
//         <h1>
//             <form onSubmit={handleSubmit} >
//                 <input name='name' value={input.name} onChange={handleChange} type='text' placeholder='enter your name '/>
//                 <input name='address.street' value={input.address.street} onChange={handleChange} type='text' placeholder='enter your street' />
//                  <input name='address.phone' value={input.address.phone} onChange={handleChange} type='number' placeholder='enter your phone' />
//                 <button>Submit</button>
//             </form>
//         </h1>
//     </div>
//   )
// }

// export default Par;

//uncontrolled
    // import React, { useState ,useRef} from 'react'

    // const Par = () => {

    // const nameRef = useRef()
    // function handleSubmit(e){
    //     e.preventDefault()
    // console.log(nameRef.current.value)
    // }
    // return (
    //     <div>
    //     <form onSubmit={handleSubmit}>
    //         <input type='text'  ref={nameRef} placeholder='enter your name' /> 
    //           <input type='text'  ref={nameRef} placeholder='enter your last name' /> 
    //         <button type='submit'>submit</button>
    //     </form>
            
    //     </div>
    // )
    // }

    // export default Par

    //"https://fakestoreapi.com/products


    import React, { useEffect, useState } from 'react'
    
    const Par = () => {
        const[state,setState] = useState([])
        useEffect(()=>{
          const apicall = async()=>{
     try {
         const call = await axiox.get("https://fakestoreapi.com/products")
         setState(apicall.data)
         console.log(apicall.data)
     } catch (error) {
        console.log(error)
     }
          }
        },[])
      return (
        <div>
        Heloo
        </div>
      )
    }
    
    export default Par;



    //sanjay kumar kumarrrrrr mai huuu
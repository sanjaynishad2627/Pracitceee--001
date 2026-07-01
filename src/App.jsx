// import React, { useState } from 'react'

//count questionsss
// const App = () => {
//  const[count,setCount] = useState(null)
//   function handleClick(){
//     setCount(count+1)
//   }
//   return (
//     <div>
//       <h1>count {count}</h1>
//       <button onClick={handleClick}>click me</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[form,setForm] =  useState({
//     name:"",
//     fullname:""
//   })

//   function handleChange(e){
//    setForm({
//     ...form,
//     [e.target.name]:e.target.value
//    })
//   }

//   function handleSubmit(e){
// e.preventDefault()
// console.log(form)
// setForm({
//     name:"",
//     fullname:""
// })
//   }

//   return (
//     <div>
//       <input onChange={handleChange} name='name' type='text' value={form.name} placeholder='enter your name' />
//       <input onChange={handleChange} type='text' name="fullname" value={form.fullname} placeholder='enter your full name' />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default App

//nested form handle
// import React, { useState } from "react";

// const App = () => {
//   const [form, setForm] = useState({
//     name: "",
//     lastname: "",
//     address: {
//       street: "",
//       number: "",
//       email: "",
//     },
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const [parent, child] = name.split(".");
//       setForm((prev) => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [child]:value,
//         },
//       }));
//     } else {
//       setForm((prev) => ({
//         ...prev,
//         [name]:value
//       }));
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log(form);
//     setForm({
//       name: "",
//       lastname: "",
//       address: {
//         street: "",
//         number: "",
//         email: "",
//       },
//     });
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-lg shadow-md w-96"
//       >
//         <h1>Sign up</h1>
//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="Enter your name"
//           className="w-full border p-2 rounded mb-4"
//           name="name"
//           value={form.name}
//         />

//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="Enter your last name"
//           className="w-full border p-2 rounded mb-4"
//           name="lastname"
//           value={form.lastname}
//         />

//         <h3>Address</h3>
//         <input
//           type="text"
//           placeholder="enter your street number"
//           onChange={handleChange}
//           className="w-full border p-2 rounded mb-4"
//           name="address.street"
//           value={form.address.street}
//         />
//         <input
//           type="number"
//           placeholder="enter your Phone"
//           onChange={handleChange}
//           className="w-full border p-2 rounded mb-4"
//           name="address.number"
//           value={form.address.number}
//         />
//         <input
//           type="email"
//           placeholder="enter your email"
//           onChange={handleChange}
//           className="w-full border p-2 rounded mb-4"
//           name="address.email"
//           value={form.address.email}
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white p-2 rounded"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {
//   const[show,setShow] = useState(false)
//   function handleToggle(){
//     setShow((prev)=>!prev)
//   }
//   return (
//     <div>

//       <button onClick={handleToggle}
//       className='bg-gray-500'>
// { show ? "Hide" : "Show"}
//       </button>

//       {
//         show && <h1>Helloo sanjay</h1>
//       }
//     </div>
//   )
// }

// export default App

//use Memo...........
// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const[count,setCount] = useState(0)
//   function doubleNumber(num){
//     for(let i =0;i<1000000000;i++){}
//     return num * num
//   }
//   const number = useMemo(() =>
//     doubleNumber(2), [])

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       {number}
//       <br></br>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </div>
//   )
// }

// export default App

//useCallback..........

// import React, { useCallback, useState } from 'react'
// import Child from './Child'

// const App = () => {
//   const[count,setCount] = useState(0)
//   const handleClick=useCallback(
//     () => {

//     console.log("mai paent hu")

//     },
//     [],
//   )

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Button</button>
//       <Child handleClick={handleClick}  />
//     </div>
//   )
// }

// export default App

//useRef.................

// import React ,{useRef}from "react";

// const App = () => {
//   const nameRef = useRef(null)
//   function handleSubmit(){
//    console.log(nameRef.current.value)
//    nameRef.current.value =""
//   }
//   return (
//     <div>
     
//         <input type="text" ref={nameRef} placeholder="enter your name" />
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default App;

//............................api callig wiith the help or useEffect

// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// const App = () => {
// const [store,setStore] = useState([])
  
// useEffect(()=>{
//    const getProduct=async()=>{
//       try {
//         const api = await  axios.get("https://fakestoreapi.com/products")
//         setStore(api.data)
//         console.log(api)
//       } catch (error) {
//         console.log("Issue")
//       }

//    }
//    getProduct()
// },[])
//   return (
//     <div>
//       <h1>Product detail</h1>
//        {
//         store.map((item)=>{
//            return(
//             <div key={item.id}>
//             <h1>  {item.description}</h1>
//             </div>
//            )
//         })
//        }
//     </div>
//   )
// }

// export default App


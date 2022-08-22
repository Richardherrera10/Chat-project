// import {} from 'react'
// import io from 'socket.io-client'
// import {useState, useEffect} from 'react'
// import React, { useRef } from 'react'
// const socket = io('http://localhost:3001')

// export function Chat () {
//     const [message, setMessage] = useState('')
//     const [messages, setMessages] = useState([])
    
//     // estado para nombre de usuario, cambiar yo por usuario
//     const [usuario, setUsuario] = useState('')
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
        
//         // estructura del mensaje
//         const newMessage = {
//             body: message,
//             user: usuario,
//         }
//         setMessages([newMessage, ...messages])
//         setMessage('')
        
//         socket.emit('message', newMessage)
        
//     }

//     useEffect(()=>{
//         const receiveMessage = (message) => {
//             setMessages([message, ...messages])
//         }

//         socket.on('message', receiveMessage)
//         return () => {
//             socket.off('message',receiveMessage)
//         }
//     }, [messages])


//    const onChangeHandler = (e) => {
//     setUsuario(e.target.value)

// }

//     return (
        
//         <div className='h-screen bg-slate-800 text-white flex flex-col items-center justify-center'>
//             <input 
//                     className='mb-2 text-black'
//                     placeholder='Nombre de usuario'
//                     value={usuario}
//                     onChange={onChangeHandler}
//                     />
//             <form className='bg-slate-50 p-10' onSubmit={handleSubmit}>
//                 <input
//                     name='message'
//                     type='text'
//                     placeholder='escribe tu mensaje'
//                     onChange = {(e)=>setMessage(e.target.value)}
//                     value = {message}
//                     className='border-2 border-zinc-500 p-2 w-full text-black'
//                     autoFocus
//                 />
                
                
//                 <ul className='h-80 overflow-y-auto'>
//                     {messages.map((message, index) => (
                        
//                         <li key={index}
                      
                        
//                         className={`my-2 p-2 table text-sm rounded-md ${((usuario === message.user)) ? `bg-sky-700 ml-auto` : `bg-black`}`}>
                         
//                             <b>{`${(usuario === message.user) ? `Yo` :` ${message.user}`}`}</b>: {message.body}
                            
//                         </li>
//                     ))}
                    
//                 </ul>
//             </form>
            
//         </div>
     
//     )
// }

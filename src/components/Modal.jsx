import React from 'react'

function Modal({children, showModal = false}) {
  return ( <>
  
    { showModal &&

        <div className="fixed bg-black/40 backdrop-blur-xl w-full h-screen z-20 flex items-center justify-center text-white">
            {children}
        </div>
  
        }

        </>
  )
}

export default Modal

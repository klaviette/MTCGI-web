import React, {useRef} from 'react'
const MpiItems = ({item, onClick, isOpen, children}) => {
  
  const answerRef = useRef(null)

  return <div className='border-b
  border-gray-200 dark:border-gray-700
  last:border-nope transition-colors
  duration-100 hover:bg-gradient-to-r
  hover:from-gray-50/50 hover:to-transparent
  dark:hover:from-gray-800/50 dark:hover:to-transparent' id={`mpi-item-${item.id}`}>
    <button className={`w-full py-5 px-4
    flex justify-between items-center
    text-left focus:outline-none rounded-lg
    transition-all duration-200 cursor-pointer
    ${isOpen ? 'bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200/90 dark:from-blue-900/80 dark:via-purple-900/80 dark:to-blue-900/70 text-purple-700 dark:text-white font-medium' 
      : 'text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400'}`} 
    onClick={() =>
      onClick(item.id)}>
      <span className='text-lg font-medium
      pr-6'>
        {item.question}
      </span> 
      <div className={`flex-shrink-0 flex
      items-center justify-center w-8
      min-w-8 aspect-square rounded-full
      ${isOpen ? "bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 shadow-md" : 
        "bg-gray-200 dark:bg-gray-700"}
      transition-all duration-100`}>
        <i className={` bx ${isOpen ? "bx-minus" : "bx-plus"} ${isOpen ? "text-white" : "text-gray-500 dark:text-gray-400"}`}></i>
      </div>
    </button>
    <div className='overflow-hidden
    transition-all duration-200 ease-out scrollbar-hide' 
    id={`graph-${item.id}`}
    ref={answerRef}
    style={{maxHeight: isOpen ? answerRef.current?.scrollHeight : 0, opacity:
      isOpen ? 1 : 0}}>
      <div className='p-4 pt-0 pb-5
      text-gray-600 dark:text-gray-300 scrollbar-hide'>
        <div className='p-3 rounded-lg
        overflow-y-auto max-h-[300px] scrollbar-hide'>
          {item.answer}
          {children}
        </div>

      </div>
    </div>
  </div>
}

export default MpiItems

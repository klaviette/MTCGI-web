import React, {useState, useEffect} from 'react'
import MpiList from './components/MpiList'
import MpiSidebar from './components/MpiSidebar'
import MpiTopBar from './components/MpiTopbar'

const App = () => {
  const [darkMode, setDarkMode] = useState(() =>
  {
    const savedTheme = localStorage.getItem
    ('darkMode')
    return savedTheme ? JSON.parse(savedTheme) : false
  })
  
    useEffect(() => {
      if(darkMode){
        document.documentElement.classList.add
        ('dark')
      } else {
        document.documentElement.classList.remove
        ('dark')
      }
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }, [darkMode])
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
  <div className='min-h-screen flex flex-row
    bg-gradient-to-br from-gray-100 via-gray-200
    to-gray-100 dark:from-gray-950
    dark:via-gray-900 dark:to-gray-950
    transition-colors duration-100'>
      <MpiSidebar toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}/>
      <div className='flex flex-1 flex-col'>
        <MpiTopBar toggleDarkMode={toggleDarkMode}
      darkMode={darkMode}/>
        <div className='container mx-auto py-12 flex flex-col'>
          <header className='text-center'>
            <h1 className='text-4xl md:text-5xl
            font-extrabold mb-4 bg-gradient-to-r
            from-red-600 via-violet-450 to-blue-600
            text-transparent bg-clip-text'>
                <span className="animate-shine bg-gradient-to-r from-transparent via-white/50 to-transparent bg-clip-text text-transparent">
                  Modern TCG Index
                </span>
            </h1>
            <p className='text-lg text-gray-600
            max-w-2xl mx-auto dark:text-gray-400'>
              Track market growth with aggregated pricing across collector-selected cards and products.
            </p>
          </header>
        </div>
        <MpiList toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}/>
      </div>
    </div>
  )
}

export default App

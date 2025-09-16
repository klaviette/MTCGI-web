import React from "react"

const MpiTopBar = ({ darkMode, toggleDarkMode, onLogin }) => {
  return (
    <header
      className={`
        sticky top-0 z-50 h-16 flex-shrink-0 w-full flex items-center justify-between
        pr-4 sm:pr-6 lg:pr-8 pl-2
        bg-gray-100/80 dark:bg-gray-900/90 backdrop-blur
        border-b border-gray-300 dark:border-gray-800
        transition-all duration-100
      `}
    >
      {/* Logo / Title */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="max-h-12 max-w-full hover:cursor-pointer" />
      </div>


      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        {/* Light/Dark mode toggle */}
        <button
          onClick={toggleDarkMode}
          className="w-10 h-10 flex items-center justify-center rounded-full
            bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800
            text-gray-700 dark:text-gray-200
            hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            transition-all duration-300 hover:cursor-pointer"
        >
          <i className={`bx bx-${darkMode ? "sun" : "moon"} text-xl`}></i>
        </button>

        {/* Login button */}
        <button
          onClick={onLogin}
          className="px-4 py-2 text-sm font-medium text-white
            bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-600 hover:to-indigo-700
            rounded-lg shadow-sm hover:shadow-md
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-indigo-500 transition-all hover:cursor-pointer"
        >
          Login
        </button>
      </div>
    </header>
  )
}

export default MpiTopBar

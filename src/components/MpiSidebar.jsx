import React, { useState } from "react"

const MpiSidebar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const navItems = [
    { label: "Home", icon: "bx-home" },
    { label: "Market Indices", icon: "bx-bar-chart" },
    { label: "Settings", icon: "bx-cog" },
    { label: "About Us", icon: "bx-group" },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative top-0 left-0 min-h-screen z-[60]
          bg-gradient-to-b  from-blue-600
          to-indigo-600
          dark:from-gray-900 dark:to-gray-800
          text-white flex flex-col border-r border-indigo-700/30
          transition-all duration-100
          ${collapsed ? "w-16" : "w-64"}
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between h-16  p-4 border-b border-gray-300/20">
          {!collapsed && (
            <h1 className="font-bold text-lg tracking-wide">
              MTCGI
            </h1>
          )}

          {/* Collapse toggle (desktop only) */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10 transition"
          >
            <i className={`bx hover:cursor-pointer ${collapsed ? "bx-chevron-right" : "bx-chevron-left"}`}></i>
          </button>

          {/* Mobile close */}
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden flex items-center justify-center hover:cursor-pointer w-8 h-8 rounded-lg hover:bg-white/10 transition"
          >
            <i className="bx bx-x text-xl"></i>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-2">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-100 hover:bg-white/10"
            >
              <i className={`bx ${item.icon} text-lg`}></i>
              {!collapsed && <span>{item.label}</span>}
            </a>
          ))}
        </nav>

        {/* Footer (theme toggle) */}
        <div className="border-t border-white/20 p-4">
          <button
            className="flex items-center hover:cursor-pointer gap-2 px-3 py-2 w-full rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            <i className={`bx bx-user text-lg`}></i>
            {!collapsed && <span>Profile</span>}
          </button>
        </div>
      </div>


      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden fixed top-20 left-4 z-40 flex items-center hover:cursor-pointer justify-center w-10 h-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow hover:shadow-md transition ${isOpen ? "opacity-0 duration-0" : ""}`}
      >
        <i className="bx bx-menu text-xl"></i>
      </button>
    </>
  )
}

export default MpiSidebar

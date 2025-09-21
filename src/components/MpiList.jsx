import React, { useState, useEffect } from 'react'
import MpiItems from './MpiItems'
import mpiData from '../data/mpiData'
import Graph from './graph.jsx'
import fetchDataset from '../rendering/data.js'

const MpiList = ({ toggleDarkMode, darkMode }) => {
  const [openId, setOpenId] = useState(null)
  const [expandAll, setExpandAll] = useState(false)
  const [data, setData] = useState(mpiData) 
  


  const toggleItem = (id) => {
    if (expandAll) {
      setExpandAll(false)
    }
    setOpenId((prevId) => (prevId === id ? null : id))
  }

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev)
    setOpenId(null)
  }

  useEffect(() => {
    if (openId && typeof window !== 'undefined') {
      setTimeout(() => {
        const element = document.getElementById(`mpi-item-${openId}`)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 100)
    }
  }, [openId])

  useEffect(() => {
    const loadPokemonData = async () => {
      const dataset = await fetchDataset('pkmn_index_raw')
      setData(prev =>
        prev.map(item =>
          item.id === 1 ? { ...item, data: dataset } : item
        )
      )
    }

    loadPokemonData();
  }, [])

  useEffect(() => {
    const loadOnePieceData = async () => {
      // Path to the One Piece dataset in Firebase
      const dataset = await fetchDataset('op_index_raw')

      // Update state: attach dataset to item with id === 2
      setData(prev =>
        prev.map(item =>
          item.id === 2 ? { ...item, data: dataset } : item
        )
      )
    }

    loadOnePieceData()
  }, [])


  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row flex-between items-center mb-8 gap-4">
        <h2
          className="text-3xl font-bold bg-gradient-to-r from-red-600
          via-violet-450 to-blue-600 text-transparent bg-clip-text
          text-center sm:text-left w-full sm:w-auto"
        >
          <span
            className="animate-shine bg-gradient-to-r from-transparent 
            via-white/50 to-transparent bg-clip-text text-transparent"
          >
            Explore Market Indices
          </span>
        </h2>
        <div className="flex items-center space-x-4">
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium
            text-white bg-gradient-to-r from-blue-600 to-indigo-600
            hover:from-blue-600 hover:to-indigo-700 rounded-lg
            shadow-sm hover:shadow-md focus:outline-none
            focus-visible:ring-2 focus-visible:ring-indigo-500
            transition-all duration-300 cursor-pointer"
            onClick={toggleExpandAll}
          >
            <i className={`bx bx-${expandAll ? "collapse-alt" : "expand-alt"} text-lg`}></i>
            <span>{expandAll ? "Collapse All" : "Expand All"}</span>
          </button>
        </div>
      </div>
      <div
        className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg
        border border-indigo-100/50 dark:border-indigo-900/30 overflow-hidden
        transition-all duration-100"
      >
        {data.map((item) => (
          <MpiItems
            key={item.id}
            item={item}
            onClick={toggleItem}
            isOpen={expandAll || openId === item.id}
          >
            {item.data ? <Graph dataset={item.data} /> : <p>Loading graph...</p>}
          </MpiItems>
        ))}
      </div>
    </div>
  )
}

export default MpiList

import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

const SelectLanguage = () => {
  const { language, languages } = useStoreState(state => state.settings)
  const { updateLanguage } = useStoreActions(actions => actions.settings)

  const handleChange = event => {
    if (!languages.includes(event.target.value)) {
      return 0
    }

    updateLanguage(event.target.value)
  }

  return (
    <div className='inline-block relative w-64'>
      <select
        defaultValue={language}
        onChange={handleChange}
        className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      >
        <option value='en_GB'>English</option>
        <option value='fr_FR'>Français</option>
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
        <svg
          className='fill-current h-4 w-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
        >
          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
        </svg>
      </div>
    </div>
  )
}

export { SelectLanguage }

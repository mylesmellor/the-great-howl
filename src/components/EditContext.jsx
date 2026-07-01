import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const EditContext = createContext({ editing: false, unlocked: false, toggle: () => {}, unlock: () => {} })

export function EditProvider({ children }) {
  const [unlocked, setUnlocked] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('edit') === 'true'
  })
  const [editing, setEditing] = useState(false)

  const toggle = useCallback(() => setEditing((v) => !v), [])
  const unlock = useCallback(() => setUnlocked(true), [])

  // Keyboard shortcut: Ctrl+Shift+E
  useEffect(() => {
    function handleKey(e) {
      if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        e.preventDefault()
        if (!unlocked) {
          setUnlocked(true)
        } else {
          setEditing((v) => !v)
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [unlocked])

  return (
    <EditContext.Provider value={{ editing, unlocked, toggle, unlock }}>
      {children}
    </EditContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- hook co-located with its provider by design
export function useEdit() {
  return useContext(EditContext)
}

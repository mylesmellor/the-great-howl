import { useEdit } from './EditContext'

export default function EditToggle() {
  const { editing, unlocked, toggle } = useEdit()

  if (!unlocked) return null

  return (
    <button
      onClick={toggle}
      aria-label={editing ? 'Exit edit mode' : 'Enter edit mode'}
      className="fixed bottom-6 right-6 z-[9999] bg-transparent border cursor-pointer px-4 py-2 text-xs font-body tracking-[0.08em] uppercase transition-all duration-300"
      style={{
        borderColor: editing ? '#A2633B' : 'rgba(92,84,73,0.5)',
        color: editing ? '#A2633B' : '#8B7E6A',
        backgroundColor: editing ? 'rgba(162,99,59,0.08)' : 'rgba(28,28,26,0.85)',
        backdropFilter: 'blur(6px)',
      }}
    >
      {editing ? 'Save & Exit' : 'Edit'}
    </button>
  )
}

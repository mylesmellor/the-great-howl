import { useRef, useEffect } from 'react'
import { useEdit } from './EditContext'

/**
 * Wraps any text content and makes it inline-editable when edit mode is on.
 * Persists changes to localStorage keyed by `storageKey`.
 *
 * Usage:
 *   <Editable as="p" storageKey="story-p1" className="...">
 *     Default text here
 *   </Editable>
 */
export default function Editable({
  // eslint-disable-next-line no-unused-vars -- rendered as a dynamic JSX element (<Tag> below); flat config has no eslint-plugin-react to track JSX usage
  as: Tag = 'span',
  storageKey,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const { editing } = useEdit()
  const ref = useRef(null)

  // On mount, load saved content if it exists
  useEffect(() => {
    if (!storageKey || !ref.current) return
    const saved = localStorage.getItem(`tgh-${storageKey}`)
    if (saved !== null) {
      ref.current.innerHTML = saved
    }
  }, [storageKey])

  function handleBlur() {
    if (!storageKey || !ref.current) return
    localStorage.setItem(`tgh-${storageKey}`, ref.current.innerHTML)
  }

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        outline: editing ? '1px dashed rgba(162,99,59,0.4)' : 'none',
        outlineOffset: editing ? '4px' : 0,
        cursor: editing ? 'text' : 'inherit',
        minHeight: editing ? '1em' : undefined,
        transition: 'outline-color 0.3s ease',
      }}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={handleBlur}
      {...rest}
    >
      {children}
    </Tag>
  )
}

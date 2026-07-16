import { useEffect } from 'react'

const DEFAULT_TITLE = 'Electro Store • Electronics'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} • Electro Store` : DEFAULT_TITLE

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}

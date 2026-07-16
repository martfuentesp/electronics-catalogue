import { useEffect } from 'react'

const DEFAULT_TITLE = 'ElectraMart • Electronics Catalogue'

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} • ElectraMart` : DEFAULT_TITLE

    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title])
}

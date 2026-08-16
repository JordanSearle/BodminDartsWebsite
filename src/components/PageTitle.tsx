import { useEffect } from 'react'

interface PageTitleProps {
  title?: string
}

const PageTitle = ({title}: PageTitleProps) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Bodmin Darts League`
      : 'Bodmin Darts League'
  }, [title])

  return null
}

export default PageTitle
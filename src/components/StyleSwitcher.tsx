import { Link, useLocation } from 'react-router-dom'

const StyleSwitcher = () => {
  const location = useLocation()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <Link
            to="/"
            className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white transition-colors"
          >
            简洁优雅
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StyleSwitcher

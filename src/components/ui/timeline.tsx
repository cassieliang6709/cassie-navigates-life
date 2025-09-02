import { cn } from "@/lib/utils"

interface TimelineItem {
  icon: string
  title: string
  description: string
  year: string
  category: 'education' | 'career' | 'achievement' | 'personal'
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  const getCategoryColor = (category: TimelineItem['category']) => {
    switch (category) {
      case 'education':
        return 'text-blue-600 dark:text-blue-400'
      case 'career':
        return 'text-green-600 dark:text-green-400'
      case 'achievement':
        return 'text-purple-600 dark:text-purple-400'
      case 'personal':
        return 'text-orange-600 dark:text-orange-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  return (
    <div className={cn("relative", className)}>
      {/* Timeline line - subtle */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start gap-3">
            {/* Icon - minimal design */}
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center">
              <span className={cn("text-xs", getCategoryColor(item.category))}>
                {item.icon}
              </span>
            </div>
            
            {/* Content - compact and clean */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {item.year}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

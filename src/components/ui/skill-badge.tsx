import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  skill: string
  category?: 'tech' | 'language' | 'professional'
  className?: string
}

export function SkillBadge({ skill, category = 'tech', className }: SkillBadgeProps) {
  const getCategoryColor = (category: SkillBadgeProps['category']) => {
    switch (category) {
      case 'tech':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700'
      case 'language':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700'
      case 'professional':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700'
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700'
    }
  }

  return (
    <span 
      className={cn(
        "inline-flex items-center px-2 py-1 rounded text-xs font-medium border transition-colors",
        getCategoryColor(category),
        className
      )}
    >
      {skill}
    </span>
  )
}
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  skill: string
  category?: 'tech' | 'language' | 'professional'
  className?: string
}

export function SkillBadge({ skill, category = 'tech', className }: SkillBadgeProps) {
  const getVariantClass = () => {
    switch (category) {
      case 'tech':
        return 'bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800'
      case 'language':
        return 'bg-green-50 text-green-700 hover:bg-green-100 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800'
      case 'professional':
        return 'bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800'
      default:
        return 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
    }
  }

  return (
    <Badge 
      variant="outline"
      className={cn(
        "transition-all duration-300 hover:scale-105 cursor-default border",
        getVariantClass(),
        className
      )}
    >
      {skill}
    </Badge>
  )
}
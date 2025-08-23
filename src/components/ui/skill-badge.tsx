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
        return 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-primary/20'
      case 'language':
        return 'bg-accent/10 text-accent-foreground hover:bg-accent hover:text-accent-foreground border-accent/20'
      case 'professional':
        return 'bg-secondary/50 text-secondary-foreground hover:bg-secondary border-secondary/50'
      default:
        return 'bg-muted text-muted-foreground'
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
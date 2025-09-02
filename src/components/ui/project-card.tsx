import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  buttonText?: string
  buttonLink?: string
  className?: string
}

export function ProjectCard({ 
  title, 
  description, 
  icon, 
  buttonText, 
  buttonLink,
  className 
}: ProjectCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300", 
      className
    )}>
      {/* Header with Icon and Title */}
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
            <span className="text-lg text-blue-600 dark:text-blue-400">{icon}</span>
          </div>
          <div className="flex-1">
            <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      {/* Content */}
      <CardContent className="pt-0 space-y-3">
        {/* Description */}
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </CardDescription>
        
        {/* Button - Right Aligned */}
        {buttonText && (
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => buttonLink && window.open(buttonLink, '_blank')}
              className="text-xs border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-400 dark:hover:bg-blue-900/20"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
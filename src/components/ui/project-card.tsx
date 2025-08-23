import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  image?: string
  buttonText?: string
  buttonLink?: string
  className?: string
}

export function ProjectCard({ 
  title, 
  description, 
  icon, 
  image, 
  buttonText, 
  buttonLink,
  className 
}: ProjectCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-border/50 bg-gradient-card backdrop-blur-sm hover:shadow-medium transition-all duration-300 hover:-translate-y-2", 
      className
    )}>
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{icon}</span>
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        
        {buttonText && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => buttonLink && window.open(buttonLink, '_blank')}
            className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
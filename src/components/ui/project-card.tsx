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
      "group relative overflow-hidden bg-card border border-border shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1", 
      className
    )}>
      {image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-border/30">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className="space-y-3">
        <div className="flex items-start space-x-3">
          <span className="text-2xl mt-1">{icon}</span>
          <CardTitle className="editorial-heading text-xl font-semibold text-foreground leading-tight">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <CardDescription className="editorial-body text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
        
        {buttonText && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => buttonLink && window.open(buttonLink, '_blank')}
            className="w-full transition-smooth"
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
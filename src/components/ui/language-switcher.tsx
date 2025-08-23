import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300",
        className
      )}
    >
      <span className="relative z-10 font-medium">
        {language === 'en' ? "EN" : "中"}
      </span>
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-primary opacity-10 transition-opacity duration-300",
          language === 'en' ? "opacity-20" : "opacity-10"
        )}
      />
    </Button>
  )
}
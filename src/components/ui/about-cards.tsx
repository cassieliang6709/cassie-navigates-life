import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutCardsProps {
  personalTraits: {
    icon: string
    title: string
    items: string[]
  }
  growthJourney: {
    icon: string
    title: string
    items: string[]
  }
}

export function AboutCards({ personalTraits, growthJourney }: AboutCardsProps) {
  return (
    <div className="space-y-6">
      {/* Personal Traits Card */}
      <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-600">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-gray-900 dark:text-white">
            <span className="text-2xl">{personalTraits.icon}</span>
            {personalTraits.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {personalTraits.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Growth Journey Card */}
      <Card className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-600">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg text-gray-900 dark:text-white">
            <span className="text-2xl">{growthJourney.icon}</span>
            {growthJourney.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2">
            {growthJourney.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="text-blue-500 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

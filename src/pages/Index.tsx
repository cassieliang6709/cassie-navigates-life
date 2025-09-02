import { Navigation } from "@/components/ui/navigation"
import { ProjectCard } from "@/components/ui/project-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Timeline } from "@/components/ui/timeline"
import { useLanguage } from "@/contexts/LanguageContext"
import profilePhoto from "@/assets/profile-photo.jpeg"

const Index = () => {
  const { t } = useLanguage()
  


  const contactInfo = [
    { icon: '📧', label: 'liangyue3666@gmail.com', href: 'mailto:liangyue3666@gmail.com' },
    { icon: '📱', label: '+86 13122900609', href: 'tel:+8613122900609' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section - Compact */}
      <section id="home" className="pt-16 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {t.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.viewProjects}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-300 hover:bg-gray-50 px-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.contactMe}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-gray-300 hover:bg-gray-50 px-6"
                  onClick={() => window.open('/liangyue-pro-shortened.html', '_blank')}
                >
                  {t.hero.viewResume}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <img 
                src={profilePhoto} 
                alt="梁悦 Cassie" 
                className="w-56 h-56 rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Projects Section - Investment Banking Style */}
      <section id="about" className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-7xl">

          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Column - Personal Timeline (1/4) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.about.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.about.timeline.title}
                </p>
              </div>
              
              <Timeline items={t.about.timeline.items} />
            </div>
            
            {/* Right Column - Projects (3/4) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t.projects.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t.projects.subtitle}
                </p>
              </div>
              
              <div className="flex flex-col space-y-6">
                <div className="w-full">
                  <ProjectCard
                    icon="📱"
                    title={t.projects.adhd.title}
                    description={t.projects.adhd.description}
                    buttonText={t.projects.adhd.buttonText}
                  />
                </div>
                
                <div className="w-full">
                  <ProjectCard
                    icon="✈️"
                    title={t.projects.tourism.title}
                    description={t.projects.tourism.description}
                    buttonLink="https://walkwith.liangyue.site/"
                    buttonText={t.projects.tourism.buttonText}
                  />
                </div>
                
                <div className="w-full">
                  <ProjectCard
                    icon="🛒"
                    title={t.projects.ecommerce.title}
                    description={t.projects.ecommerce.description}
                    buttonText={t.projects.ecommerce.buttonText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section - Minimal */}
      <section id="contact" className="py-10 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t.contact.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <span className="text-lg">{contact.icon}</span>
                <span className="text-gray-700 dark:text-gray-200 font-medium text-sm">
                  {contact.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="py-6 px-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Index

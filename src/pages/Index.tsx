import { Navigation } from "@/components/ui/navigation"
import { ProjectCard } from "@/components/ui/project-card"
import { SkillBadge } from "@/components/ui/skill-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/contexts/LanguageContext"
import profilePhoto from "@/assets/profile-photo.jpeg"
import adhdAppMockup from "@/assets/adhd-app-mockup.jpg"
import ecommerceBusiness from "@/assets/ecommerce-business.jpg"
import inboundTourismProject from "@/assets/inbound-tourism-project.jpg"

const Index = () => {
  const { t } = useLanguage()
  
  const techSkills = t.skills.techSkills
  const languageSkills = t.skills.languageSkills
  const professionalSkills = t.skills.professionalSkills

  const contactInfo = [
    { icon: '📧', label: 'liangyue3666@gmail.com', href: 'mailto:liangyue3666@gmail.com' },
    { icon: '📱', label: '+86 13122900609', href: 'tel:+8613122900609' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  {t.hero.title}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {t.hero.subtitle}
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-foreground leading-relaxed">
                  {t.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.viewProjects}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.contactMe}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://resume-hcpvbkbzs-cassieliang6709s-projects.vercel.app', '_blank')}
                >
                  {t.hero.viewResume}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="梁悦 Cassie" 
                  className="w-72 h-72 rounded-2xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            {t.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {t.about.funFacts.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600 dark:text-gray-300">
                {t.about.funFacts.items.map((item, index) => (
                  <p key={index} className="text-sm leading-relaxed">{item}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {t.about.achievements.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-600 dark:text-gray-300">
                {t.about.achievements.items.map((item, index) => (
                  <p key={index} className="text-sm leading-relaxed">{item}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t.projects.subtitle}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              icon="📱"
              title={t.projects.adhd.title}
              description={t.projects.adhd.description}
              image={adhdAppMockup}
              buttonText={t.projects.adhd.buttonText}
            />
            
            <ProjectCard
              icon="🛒"
              title={t.projects.ecommerce.title}
              description={t.projects.ecommerce.description}
              image={ecommerceBusiness}
              buttonText={t.projects.ecommerce.buttonText}
            />
            
            <ProjectCard
              icon="✈️"
              title={t.projects.tourism.title}
              description={t.projects.tourism.description}
              image={inboundTourismProject}
              buttonText={t.projects.tourism.buttonText}
              buttonLink="https://preview--hangzhou-hustle-hubs.lovable.app/"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            {t.skills.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{t.skills.tech}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="tech" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{t.skills.language}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="language" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{t.skills.professional}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {professionalSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="professional" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            {t.contact.subtitle}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{contact.icon}</div>
                  <Button 
                    variant="link" 
                    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-0 h-auto font-normal"
                    onClick={() => window.open(contact.href)}
                  >
                    {contact.label}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

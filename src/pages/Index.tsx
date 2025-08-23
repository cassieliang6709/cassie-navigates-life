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
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
                  {t.hero.title}
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground animate-slide-up">
                  {t.hero.subtitle}
                </p>
              </div>
              
              <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-foreground">
                  {t.hero.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
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
                  variant="secondary" 
                  size="lg"
                >
                  {t.hero.viewResume}
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center animate-bounce-in" style={{ animationDelay: '0.6s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-110"></div>
                <img 
                  src={profilePhoto} 
                  alt="梁悦 Cassie" 
                  className="relative w-80 h-80 rounded-full object-cover shadow-strong border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t.about.funFacts.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                {t.about.funFacts.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {t.about.achievements.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                {t.about.achievements.items.map((item, index) => (
                  <p key={index}>{item}</p>
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
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>{t.skills.tech}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="tech" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>{t.skills.language}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="language" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>{t.skills.professional}</CardTitle>
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
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground mb-12">
            {t.contact.subtitle}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <Button 
                    variant="link" 
                    className="text-foreground hover:text-primary p-0 h-auto font-normal"
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

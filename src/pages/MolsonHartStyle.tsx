import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/ui/project-card"
import { SkillBadge } from "@/components/ui/skill-badge"
import StyleSwitcher from "@/components/StyleSwitcher"
import profilePhoto from "@/assets/profile-photo.jpeg"
import adhdAppMockup from "@/assets/adhd-app-mockup.jpg"
import ecommerceBusiness from "@/assets/ecommerce-business.jpg"
import inboundTourismProject from "@/assets/inbound-tourism-project.jpg"

const MolsonHartStyle = () => {
  const { t } = useLanguage()

  const contactInfo = [
    { icon: '📧', label: 'liangyue3666@gmail.com', href: 'mailto:liangyue3666@gmail.com' },
    { icon: '📱', label: '+86 13122900609', href: 'tel:+8613122900609' }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <StyleSwitcher />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold">梁悦 Cassie</h1>
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Molson Hart Style */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.viewProjects}
              </Button>
              <Button 
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 px-8 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.hero.contactMe}
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center mb-20">
            <div className="relative">
              <img 
                src={profilePhoto} 
                alt="梁悦 Cassie" 
                className="w-48 h-48 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Personal Narrative Style */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">About</h2>
          
          <div className="space-y-12">
            {/* Fun Facts */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                ✨ Fun Facts
              </h3>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                {t.about.funFacts.items.map((item, index) => (
                  <p key={index} className="text-lg">{item}</p>
                ))}
              </div>
            </div>

            {/* My Mom Would Like You to Know */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                🎓 My mom would like you to know
              </h3>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                {t.about.achievements.items.map((item, index) => (
                  <p key={index} className="text-lg">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
          
          <div className="space-y-12">
            <ProjectCard
              title={t.projects.adhd.title}
              description={t.projects.adhd.description}
              icon="🧠"
              image={adhdAppMockup}
              buttonText={t.projects.adhd.buttonText}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            />
            
            <ProjectCard
              title={t.projects.ecommerce.title}
              description={t.projects.ecommerce.description}
              icon="🛒"
              image={ecommerceBusiness}
              buttonText={t.projects.ecommerce.buttonText}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            />
            
            <ProjectCard
              title={t.projects.tourism.title}
              description={t.projects.tourism.description}
              icon="✈️"
              image={inboundTourismProject}
              buttonText={t.projects.tourism.buttonText}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.skills.tech}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.techSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.skills.language}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.languageSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{t.skills.professional}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.professionalSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
          <div className="flex justify-center gap-8">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>{contact.icon}</span>
                <span>{contact.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default MolsonHartStyle

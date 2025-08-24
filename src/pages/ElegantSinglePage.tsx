import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import StyleSwitcher from "@/components/StyleSwitcher"
import profilePhoto from "@/assets/profile-photo.jpeg"
import adhdAppMockup from "@/assets/adhd-app-mockup.jpg"
import ecommerceBusiness from "@/assets/ecommerce-business.jpg"

const ElegantSinglePage = () => {
  const { t } = useLanguage()

  const contactInfo = [
    { icon: '��', label: 'liangyue3666@gmail.com', href: 'mailto:liangyue3666@gmail.com' },
    { icon: '📱', label: '+86 13122900609', href: 'tel:+8613122900609' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      <StyleSwitcher />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-900">梁悦 Cassie</h1>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Single Page Layout */}
      <div className="pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8 h-[calc(100vh-120px)]">
            
            {/* Left Column - Hero & About */}
            <div className="col-span-5 space-y-8">
              
              {/* Hero Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src={profilePhoto} 
                    alt="梁悦 Cassie" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg mx-auto mb-6"
                  />
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {t.hero.title}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4">
                    {t.hero.subtitle}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {t.hero.description}
                  </p>
                </div>
                
                <div className="flex justify-center gap-3">
                  <Button 
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t.hero.viewProjects}
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t.hero.contactMe}
                  </Button>
                </div>
              </div>

              {/* About Section */}
              <div id="about" className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  ✨ Fun Facts
                </h2>
                <div className="space-y-2 text-sm text-gray-700">
                  {t.about.funFacts.items.slice(0, 3).map((item, index) => (
                    <p key={index} className="leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div id="contact" className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  📞 Contact
                </h2>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>{contact.icon}</span>
                      <span>{contact.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Projects & Skills */}
            <div className="col-span-7 space-y-8">
              
              {/* Projects Section */}
              <div id="projects" className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  🚀 Projects
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg mb-3">
                        <img 
                          src={adhdAppMockup} 
                          alt="ADHD App"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        {t.projects.adhd.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                        {t.projects.adhd.description}
                      </p>
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        {t.projects.adhd.buttonText}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video overflow-hidden rounded-lg mb-3">
                        <img 
                          src={ecommerceBusiness} 
                          alt="E-commerce"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                        {t.projects.ecommerce.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                        {t.projects.ecommerce.description}
                      </p>
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        {t.projects.ecommerce.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Skills Section */}
              <div id="skills" className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  💻 Skills
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">{t.skills.tech}</h3>
                    <div className="flex flex-wrap gap-1">
                      {t.skills.techSkills.slice(0, 6).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">{t.skills.professional}</h3>
                    <div className="flex flex-wrap gap-1">
                      {t.skills.professionalSkills.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
                  🎓 Achievements
                </h2>
                <div className="space-y-2 text-sm text-gray-700">
                  {t.about.achievements.items.slice(0, 2).map((item, index) => (
                    <p key={index} className="leading-relaxed">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElegantSinglePage
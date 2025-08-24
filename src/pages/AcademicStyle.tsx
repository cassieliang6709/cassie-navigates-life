import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StyleSwitcher from "@/components/StyleSwitcher"
import { Link } from "react-router-dom"
import profilePhoto from "@/assets/profile-photo.jpeg"

const AcademicStyle = () => {
  const { t } = useLanguage()

  const academicSections = [
    { 
      title: "Introduction", 
      path: "/academic/introduction",
      icon: "👋",
      description: "Personal background and research interests"
    },
    { 
      title: "Talks", 
      path: "/academic/talks",
      icon: "🎤",
      description: "Conference presentations and seminars"
    },
    { 
      title: "Products", 
      path: "/academic/products",
      icon: "🚀",
      description: "Research projects and applications"
    },
    { 
      title: "Blog Posts", 
      path: "/academic/blog",
      icon: "📝",
      description: "Technical articles and insights"
    },
    { 
      title: "CV", 
      path: "/academic/cv",
      icon: "📄",
      description: "Academic curriculum vitae"
    },
    { 
      title: "Contact", 
      path: "/academic/contact",
      icon: "📧",
      description: "Get in touch for collaboration"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <StyleSwitcher />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center gap-8">
            <img 
              src={profilePhoto} 
              alt="梁悦 Cassie" 
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                {t.hero.subtitle}
              </p>
              <p className="text-gray-700 max-w-2xl">
                {t.hero.description}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Grid */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {academicSections.map((section, index) => (
            <Link key={index} to={section.path}>
              <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-3">{section.icon}</div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Quick Access</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button 
              variant="outline"
              onClick={() => window.open('https://resume-hcpvbkbzs-cassieliang6709s-projects.vercel.app', '_blank')}
              className="border-gray-300 hover:bg-gray-50"
            >
              📄 View Resume
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('mailto:liangyue3666@gmail.com', '_blank')}
              className="border-gray-300 hover:bg-gray-50"
            >
              📧 Email Me
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('tel:+8613122900609', '_blank')}
              className="border-gray-300 hover:bg-gray-50"
            >
              📱 Call Me
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-600">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}

export default AcademicStyle

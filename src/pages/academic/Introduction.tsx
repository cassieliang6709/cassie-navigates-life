import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import profilePhoto from "@/assets/profile-photo.jpeg"

const Introduction = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/academic" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
              ← Back to Academic Home
            </Link>
            <div className="flex gap-6 text-sm">
              <Link to="/academic/talks" className="hover:text-blue-600 transition-colors">Talks</Link>
              <Link to="/academic/products" className="hover:text-blue-600 transition-colors">Products</Link>
              <Link to="/academic/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/academic/cv" className="hover:text-blue-600 transition-colors">CV</Link>
              <Link to="/academic/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={profilePhoto} 
            alt="梁悦 Cassie" 
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Introduction
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Welcome to my academic profile. Here's a bit about my background, interests, and journey.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Personal Background */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                👋 Personal Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                {t.hero.description}
              </p>
              <div className="space-y-3">
                {t.about.funFacts.items.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Research Interests */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                🔬 Research Interests
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Technology & Innovation</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Product Design & User Experience</li>
                    <li>• AI Applications in Healthcare</li>
                    <li>• Cross-border E-commerce</li>
                    <li>• Data Analysis & Visualization</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3 text-gray-900">Business & Strategy</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Strategic Research & Analysis</li>
                    <li>• Financial Auditing</li>
                    <li>• Tourism Industry Development</li>
                    <li>• Entrepreneurship & Innovation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Journey */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                🎓 Academic Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <div className="space-y-4">
                {t.about.achievements.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Focus */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                🎯 Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Currently, I'm focused on developing innovative solutions that bridge technology and human needs, 
                particularly in the areas of mental health support and cross-cultural communication.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl mb-2">🧠</div>
                  <h4 className="font-semibold">ADHD Support</h4>
                  <p className="text-sm text-gray-600">Developing tools for emotional and task management</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl mb-2">🌍</div>
                  <h4 className="font-semibold">Global Commerce</h4>
                  <p className="text-sm text-gray-600">Cross-border e-commerce solutions</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl mb-2">✈️</div>
                  <h4 className="font-semibold">Tourism Tech</h4>
                  <p className="text-sm text-gray-600">Enhancing travel experiences through technology</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Back to Home
            </Button>
          </Link>
          <Link to="/academic/talks">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Next: Talks →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Introduction

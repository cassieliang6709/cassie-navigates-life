import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"

const Contact = () => {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "liangyue3666@gmail.com",
      description: "Best for detailed inquiries and collaboration proposals",
      action: () => window.open('mailto:liangyue3666@gmail.com', '_blank')
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+86 13122900609",
      description: "Available for urgent matters and quick discussions",
      action: () => window.open('tel:+8613122900609', '_blank')
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      description: "Professional networking and career discussions",
      action: () => window.open('#', '_blank')
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "View my projects",
      description: "Check out my code and contribute to projects",
      action: () => window.open('#', '_blank')
    }
  ]

  const collaborationAreas = [
    {
      icon: "🧠",
      title: "Mental Health Tech",
      description: "Developing accessible solutions for ADHD and mental wellness"
    },
    {
      icon: "🎨",
      title: "Product Design",
      description: "User-centered design for web and mobile applications"
    },
    {
      icon: "🌍",
      title: "Cross-border E-commerce",
      description: "International business strategy and market analysis"
    },
    {
      icon: "✈️",
      title: "Travel Technology",
      description: "Enhancing tourism experiences through digital innovation"
    },
    {
      icon: "🎤",
      title: "Speaking Engagements",
      description: "Conferences, workshops, and educational events"
    },
    {
      icon: "📝",
      title: "Content Collaboration",
      description: "Blog posts, research papers, and thought leadership"
    }
  ]

  const faqs = [
    {
      question: "What types of projects are you interested in?",
      answer: "I'm particularly interested in projects that combine technology with social impact, especially in mental health, accessibility, and cross-cultural communication. I also enjoy working on e-commerce solutions and travel technology."
    },
    {
      question: "Are you available for consulting work?",
      answer: "Yes, I offer consulting services in product design, user experience, and business strategy. I'm especially experienced in cross-border e-commerce and digital product development."
    },
    {
      question: "Do you speak at conferences?",
      answer: "Absolutely! I regularly speak at conferences about product design, entrepreneurship, and technology innovation. I'm always open to speaking opportunities that align with my expertise."
    },
    {
      question: "What's your preferred collaboration style?",
      answer: "I believe in transparent communication, iterative development, and user-centered design. I prefer collaborative environments where ideas can be freely shared and tested."
    }
  ]

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
              <Link to="/academic/introduction" className="hover:text-blue-600 transition-colors">Introduction</Link>
              <Link to="/academic/talks" className="hover:text-blue-600 transition-colors">Talks</Link>
              <Link to="/academic/products" className="hover:text-blue-600 transition-colors">Products</Link>
              <Link to="/academic/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/academic/cv" className="hover:text-blue-600 transition-colors">CV</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📧 Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always excited to connect with fellow innovators, researchers, and entrepreneurs. 
            Let's explore how we can collaborate and create meaningful impact together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card 
                    key={index} 
                    className="bg-white border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={method.action}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl">{method.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-blue-600 font-medium mb-2">{method.value}</p>
                          <p className="text-gray-600 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Collaboration Areas */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Collaboration Areas</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {collaborationAreas.map((area, index) => (
                  <Card key={index} className="bg-white border border-gray-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">{area.icon}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            {/* Contact Form */}
            <section>
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input placeholder="What's this about?" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project, collaboration idea, or question..."
                      rows={6}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      How did you find me?
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select an option</option>
                      <option value="conference">Conference/Event</option>
                      <option value="social">Social Media</option>
                      <option value="referral">Referral</option>
                      <option value="search">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Send Message
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    I typically respond within 24-48 hours. For urgent matters, please call directly.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ */}
            <section>
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-12">
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Whether you have a project idea, want to collaborate on research, or just want to chat about 
                technology and innovation, I'd love to hear from you. Every great project starts with a conversation.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  onClick={() => window.open('mailto:liangyue3666@gmail.com', '_blank')}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
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
            </CardContent>
          </Card>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic/cv">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Previous: CV
            </Button>
          </Link>
          <Link to="/academic">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Contact

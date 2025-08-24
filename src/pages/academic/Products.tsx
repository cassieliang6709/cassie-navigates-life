import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import adhdAppMockup from "@/assets/adhd-app-mockup.jpg"
import ecommerceBusiness from "@/assets/ecommerce-business.jpg"
import inboundTourismProject from "@/assets/inbound-tourism-project.jpg"

const Products = () => {
  const { t } = useLanguage()

  const products = [
    {
      title: t.projects.adhd.title,
      description: t.projects.adhd.description,
      image: adhdAppMockup,
      status: "In Development",
      category: "Healthcare Tech",
      technologies: ["React Native", "Node.js", "MongoDB", "AI/ML"],
      features: [
        "情绪追踪与分析",
        "任务管理系统",
        "个性化提醒",
        "社区支持功能",
        "数据可视化"
      ],
      links: {
        demo: "#",
        github: "#",
        paper: "#"
      }
    },
    {
      title: t.projects.ecommerce.title,
      description: t.projects.ecommerce.description,
      image: ecommerceBusiness,
      status: "Live",
      category: "E-commerce",
      technologies: ["Amazon API", "Data Analytics", "Supply Chain", "Marketing"],
      features: [
        "跨境供应链管理",
        "CPC广告优化",
        "市场数据分析",
        "库存管理系统",
        "客户关系管理"
      ],
      links: {
        website: "#",
        case_study: "#"
      }
    },
    {
      title: t.projects.tourism.title,
      description: t.projects.tourism.description,
      image: inboundTourismProject,
      status: "Beta",
      category: "Travel Tech",
      technologies: ["React", "Python", "APIs", "Mobile App"],
      features: [
        "智能行程规划",
        "文化体验推荐",
        "本地向导匹配",
        "多语言支持",
        "实时翻译"
      ],
      links: {
        demo: "#",
        app: "#"
      }
    }
  ]

  const researchProjects = [
    {
      title: "AI驱动的心理健康评估工具",
      description: "基于自然语言处理和机器学习技术，开发能够识别和评估用户心理状态的智能工具。",
      status: "Research Phase",
      collaboration: "与心理学专家合作",
      publications: ["IEEE Conference on AI in Healthcare 2024 (Submitted)"]
    },
    {
      title: "跨文化交流中的语言障碍解决方案",
      description: "研究如何通过技术手段降低跨文化交流中的语言和文化障碍，提升沟通效率。",
      status: "Data Collection",
      collaboration: "国际合作项目",
      publications: ["Journal of Cross-Cultural Communication (In Preparation)"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800'
      case 'Beta': return 'bg-blue-100 text-blue-800'
      case 'In Development': return 'bg-yellow-100 text-yellow-800'
      case 'Research Phase': return 'bg-purple-100 text-purple-800'
      case 'Data Collection': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

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
              <Link to="/academic/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/academic/cv" className="hover:text-blue-600 transition-colors">CV</Link>
              <Link to="/academic/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 Products & Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of products, applications, and research projects that bridge technology with human needs and social impact.
          </p>
        </div>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Products</h2>
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(product.status)}>{product.status}</Badge>
                        <Badge variant="outline">{product.category}</Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-1">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="text-sm text-gray-600">• {feature}</div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {Object.entries(product.links).map(([key, url]) => (
                          <Button 
                            key={key}
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(url, '_blank')}
                            className="border-gray-300 hover:bg-gray-50 text-xs"
                          >
                            {key === 'demo' && '🔗 Demo'}
                            {key === 'github' && '💻 GitHub'}
                            {key === 'paper' && '📄 Paper'}
                            {key === 'website' && '🌐 Website'}
                            {key === 'case_study' && '📊 Case Study'}
                            {key === 'app' && '📱 App'}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {researchProjects.map((project, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Collaboration: </span>
                      <span className="text-gray-600 text-sm">{project.collaboration}</span>
                    </div>
                    
                    <div>
                      <span className="font-semibold text-gray-900 text-sm">Publications: </span>
                      <ul className="text-gray-600 text-sm mt-1">
                        {project.publications.map((pub, idx) => (
                          <li key={idx}>• {pub}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Collaboration Invitation */}
        <section className="mt-12">
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Interested in collaboration?
              </h3>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                I'm always open to collaborating on innovative projects that combine technology with social impact. 
                Let's create something meaningful together.
              </p>
              <Link to="/academic/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Let's Collaborate
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic/talks">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Previous: Talks
            </Button>
          </Link>
          <Link to="/academic/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Next: Blog Posts →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Products

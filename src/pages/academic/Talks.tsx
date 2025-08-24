import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const Talks = () => {
  const { t } = useLanguage()

  const talks = [
    {
      title: "ADHD情绪管理与任务执行：产品设计的人文关怀",
      event: "产品设计创新大会",
      date: "2024年3月",
      location: "上海",
      type: "Keynote",
      description: "分享了如何通过产品设计为ADHD人群提供更好的情绪支持和任务管理解决方案，探讨了技术与人文关怀的结合。",
      slides: "#",
      video: "#"
    },
    {
      title: "跨境电商的数据驱动策略",
      event: "电商发展论坛",
      date: "2024年1月",
      location: "杭州",
      type: "Invited Talk",
      description: "基于实际运营经验，分析了跨境电商中的数据分析方法、供应链管理和市场策略优化。",
      slides: "#",
      video: null
    },
    {
      title: "从审计到产品：跨领域职业转换的思考",
      event: "职业发展研讨会",
      date: "2023年11月",
      location: "北京",
      type: "Panel Discussion",
      description: "分享了从传统审计行业转向产品设计和技术开发的经历，讨论了跨领域学习的方法和挑战。",
      slides: "#",
      video: "#"
    },
    {
      title: "入境旅游服务的数字化创新",
      event: "旅游科技峰会",
      date: "2023年9月",
      location: "成都",
      type: "Workshop",
      description: "探讨了如何利用技术手段提升入境旅游体验，包括行程规划、文化体验和本地化服务。",
      slides: "#",
      video: null
    }
  ]

  const upcomingTalks = [
    {
      title: "AI在心理健康应用中的伦理考量",
      event: "AI伦理与社会责任会议",
      date: "2024年6月",
      location: "深圳",
      type: "Invited Talk",
      description: "将讨论AI技术在心理健康领域应用时需要考虑的伦理问题和社会责任。"
    },
    {
      title: "数字化时代的创业思维",
      event: "创业者大会",
      date: "2024年8月",
      location: "广州",
      type: "Panel Discussion",
      description: "与其他创业者一起探讨数字化时代的创业机会和挑战。"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Keynote': return 'bg-red-100 text-red-800'
      case 'Invited Talk': return 'bg-blue-100 text-blue-800'
      case 'Panel Discussion': return 'bg-green-100 text-green-800'
      case 'Workshop': return 'bg-purple-100 text-purple-800'
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
              <Link to="/academic/products" className="hover:text-blue-600 transition-colors">Products</Link>
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
            🎤 Talks & Presentations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conference presentations, workshops, and speaking engagements where I share insights on product design, technology, and entrepreneurship.
          </p>
        </div>

        {/* Upcoming Talks */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Upcoming Talks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTalks.map((talk, index) => (
              <Card key={index} className="bg-white border border-blue-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
                    <Badge className={getTypeColor(talk.type)}>{talk.type}</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {talk.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600">
                    <p>{talk.event}</p>
                    <p>{talk.date} • {talk.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {talk.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Talks */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Talks</h2>
          <div className="space-y-6">
            {talks.map((talk, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getTypeColor(talk.type)}>{talk.type}</Badge>
                    <div className="text-sm text-gray-500">{talk.date}</div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {talk.title}
                  </CardTitle>
                  <div className="text-sm text-gray-600 mb-3">
                    <p className="font-medium">{talk.event}</p>
                    <p>{talk.location}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {talk.description}
                  </p>
                  <div className="flex gap-3">
                    {talk.slides && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(talk.slides, '_blank')}
                        className="border-gray-300 hover:bg-gray-50"
                      >
                        📊 Slides
                      </Button>
                    )}
                    {talk.video && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(talk.video, '_blank')}
                        className="border-gray-300 hover:bg-gray-50"
                      >
                        🎥 Video
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Speaking Invitation */}
        <section className="mt-12">
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Interested in having me speak at your event?
              </h3>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                I'm always excited to share insights on product design, technology innovation, and entrepreneurship. 
                Feel free to reach out for speaking opportunities.
              </p>
              <Link to="/academic/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic/introduction">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Previous: Introduction
            </Button>
          </Link>
          <Link to="/academic/products">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Next: Products →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Talks

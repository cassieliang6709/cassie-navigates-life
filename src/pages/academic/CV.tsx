import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import profilePhoto from "@/assets/profile-photo.jpeg"

const CV = () => {
  const { t } = useLanguage()

  const education = [
    {
      degree: "会计学学士",
      institution: "上海财经大学",
      period: "2018-2022",
      details: [
        "人民奖学金二等奖、三等奖获得者",
        "华为奖学金获得者",
        "GPA: 3.8/4.0"
      ]
    }
  ]

  const experience = [
    {
      title: "独立产品设计师 & 开发者",
      company: "自由职业",
      period: "2023年至今",
      location: "上海",
      responsibilities: [
        "设计并开发ADHD情绪和任务管理应用，服务特殊需求人群",
        "运营跨境电商业务，专注美国和加拿大市场",
        "为入境旅游项目提供产品设计和技术解决方案",
        "参与多个黑客松活动，获得最佳科技奖和第二名成绩"
      ]
    },
    {
      title: "战略研究分析师",
      company: "咨询公司",
      period: "2022-2023",
      location: "上海",
      responsibilities: [
        "进行行业研究和市场分析，为客户提供战略建议",
        "协助制定商业策略和市场进入计划",
        "参与客户项目管理和数据分析工作"
      ]
    },
    {
      title: "审计助理",
      company: "会计师事务所",
      period: "2021-2022",
      location: "上海",
      responsibilities: [
        "参与上市公司财务审计工作",
        "协助完成内部控制评估和风险管理",
        "负责审计工作底稿的编制和整理"
      ]
    }
  ]

  const skills = {
    technical: [
      { name: "Python", level: "Advanced" },
      { name: "JavaScript/React", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "Node.js", level: "Intermediate" },
      { name: "SQL", level: "Advanced" },
      { name: "Data Analysis", level: "Advanced" },
      { name: "UI/UX Design", level: "Advanced" }
    ],
    tools: [
      "Figma", "Adobe Creative Suite", "Excel", "PowerPoint", 
      "Git", "MongoDB", "AWS", "Google Analytics"
    ],
    languages: [
      { name: "中文", level: "母语" },
      { name: "英语", level: "流利 (CET-6)" },
      { name: "日语", level: "基础" }
    ]
  }

  const achievements = [
    {
      title: "黑客松获奖",
      details: [
        "advx黑客松最佳科技奖",
        "创业森林黑客松第二名",
        "项目成功入驻梦想小镇"
      ]
    },
    {
      title: "学术成就",
      details: [
        "新疆理科高考660分，全省排名173名",
        "上海财经大学多项奖学金获得者",
        "优秀毕业生"
      ]
    },
    {
      title: "创业成果",
      details: [
        "成功运营跨境电商业务",
        "开发多个产品原型和MVP",
        "建立了完整的产品开发流程"
      ]
    }
  ]

  const publications = [
    {
      title: "ADHD人群产品设计的人文关怀研究",
      venue: "产品设计创新大会论文集",
      year: "2024",
      status: "已发表"
    },
    {
      title: "跨境电商数据驱动策略分析",
      venue: "电商发展论坛",
      year: "2024",
      status: "已发表"
    },
    {
      title: "AI在心理健康应用中的伦理考量",
      venue: "IEEE Conference on AI in Healthcare",
      year: "2024",
      status: "已提交"
    }
  ]

  const certifications = [
    "CET-6英语证书",
    "会计从业资格证",
    "产品经理认证 (NPDP)",
    "用户体验设计师认证"
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
              <Link to="/academic/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={profilePhoto} 
            alt="梁悦 Cassie" 
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t.hero.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {t.hero.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.open('https://resume-hcpvbkbzs-cassieliang6709s-projects.vercel.app', '_blank')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              📄 View Resume
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.print()}
              className="border-gray-300 hover:bg-gray-50"
            >
              🖨️ Print
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Professional Summary */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {t.hero.description} 具有跨领域背景的产品设计师和独立开发者，专注于创造有社会影响力的技术解决方案。
                  从传统审计行业成功转型到产品设计和技术开发，拥有丰富的商业分析和用户体验设计经验。
                </p>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                          <p className="text-gray-600">{exp.company} • {exp.location}</p>
                        </div>
                        <Badge variant="outline">{exp.period}</Badge>
                      </div>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-green-200 pl-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.institution}</p>
                        </div>
                        <Badge variant="outline">{edu.period}</Badge>
                      </div>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Publications */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-900">
                  Publications & Presentations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {publications.map((pub, index) => (
                    <div key={index} className="border-l-4 border-purple-200 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{pub.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{pub.venue}, {pub.year}</p>
                      <Badge className={pub.status === '已发表' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                        {pub.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <a href="mailto:liangyue3666@gmail.com" className="text-blue-600 hover:underline">
                    liangyue3666@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+8613122900609" className="text-blue-600 hover:underline">
                    +86 13122900609
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span className="text-gray-700">上海, 中国</span>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Programming & Development</h4>
                  <div className="space-y-2">
                    {skills.technical.map((skill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">{skill.level}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skills.languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">{lang.name}</span>
                      <Badge variant="secondary" className="text-xs">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <ul className="space-y-1 text-sm text-gray-700">
                        {achievement.details.map((detail, idx) => (
                          <li key={idx}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="text-sm text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic/blog">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Previous: Blog Posts
            </Button>
          </Link>
          <Link to="/academic/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Next: Contact →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CV

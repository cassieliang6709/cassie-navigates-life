import { Navigation } from "@/components/ui/navigation"
import { ProjectCard } from "@/components/ui/project-card"
import { SkillBadge } from "@/components/ui/skill-badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import profilePhoto from "@/assets/profile-photo.jpg"
import adhdAppMockup from "@/assets/adhd-app-mockup.jpg"
import ecommerceBusiness from "@/assets/ecommerce-business.jpg"

const Index = () => {
  const techSkills = ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Excel', 'PowerPoint', 'Photoshop']
  const languageSkills = ['英语（流利）', '普通话（母语）']
  const professionalSkills = ['产品设计', '用户研究', '数据分析', '电子商务', '审计与财务']

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
                  梁悦 Cassie
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground animate-slide-up">
                  独立开发者 | 产品设计师 | 审计师
                </p>
              </div>
              
              <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg text-foreground">
                  Hi 👋 我是梁悦Cassie，双鱼座，ESTP，喜欢旅行，AI 和心理学知识。在努力成为一个有生命力的人。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-bounce-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  查看我的项目
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  联系我
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                >
                  查看我的简历
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
            关于我
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  ✨ 有趣的事实
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• 出生并成长于新疆哈密</p>
                <p>• 曾担任审计师、行研助理、战略研究和产品设计</p>
                <p>• 爱好是旅行：去过日本、韩国和中国的20多个城市</p>
                <p>• 今年希望继续探索：中国台湾、日本和新加坡</p>
                <p>• 不祈求成功，但是希望有勇气面对一切困难</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  🎓 我妈妈想让你知道的事
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p>• 非常典型的理科生，高考理综和数学加起来扣的分小于语文一门，新疆理科高考660分/全省173名</p>
                <p>• 大学非常努力学习中：在上海财经大学学习会计，获得过人民奖学金二等奖，三等奖，华为奖学金等</p>
                <p>• 做过跨境电商，没有盈利，但是学会了如何和货代和供应商谈判，如何在亚马逊上控制CPC广告预算</p>
                <p>• 转码半年：积极探索黑客松中，在advx上获得过最佳科技奖，在创业森林上获得过第二名，项目入驻梦想小镇</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            我的项目
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            探索我近期的工作和创新项目
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              icon="📱"
              title="正助 - ADHD情绪和任务管理应用"
              description="一款针对ADHD人群的应用，提供情绪支持与任务管理的闭环解决方案，帮助用户更好地管理情绪波动和任务执行困难。"
              image={adhdAppMockup}
              buttonText="查看商业计划书"
            />
            
            <ProjectCard
              icon="🛒"
              title="电子商务业务"
              description="在美国与加拿大市场运营电子商务业务，专注于产品开发、供应链管理和市场营销策略。"
              image={ecommerceBusiness}
              buttonText="了解更多"
            />
            
            <ProjectCard
              icon="✈️"
              title="我的入境游项目"
              description="专注于为外国游客提供中国入境旅游服务，包括行程规划、文化体验和本地向导服务。"
              buttonText="查看项目"
              buttonLink="https://lovable.dev/projects/f230d14d-d51d-4e62-b22f-ce6772a3241f"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            专业技能
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>技术技能</CardTitle>
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
                <CardTitle>语言能力</CardTitle>
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
                <CardTitle>专业领域</CardTitle>
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
            联系我
          </h2>
          <p className="text-muted-foreground mb-12">
            如果您对我的项目感兴趣，或者想要了解更多信息，欢迎通过以下方式联系我：
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
          <p>© 2024 梁悦. 保留所有权利. 浙ICP备2025173001号</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

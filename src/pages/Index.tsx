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
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8 py-20">
            <div className="space-y-6">
              <h1 className="editorial-heading text-5xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in">
                梁悦 Cassie
              </h1>
              <div className="editorial-divider"></div>
              <p className="editorial-body text-xl lg:text-2xl text-muted-foreground animate-slide-up">
                独立开发者 | 产品设计师 | 审计师
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-8">
                <img 
                  src={profilePhoto} 
                  alt="梁悦 Cassie" 
                  className="w-32 h-32 rounded-full object-cover shadow-medium mx-auto border-2 border-border"
                />
              </div>
              <p className="editorial-body text-lg text-foreground leading-relaxed">
                Hi 👋 我是梁悦Cassie，双鱼座，ESTP，喜欢旅行，AI 和心理学知识。在努力成为一个有生命力的人。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="transition-smooth"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                查看我的项目
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="transition-smooth"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                联系我
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-16">
            <h2 className="editorial-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              关于我
            </h2>
            <div className="editorial-divider"></div>
          </header>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-card border border-border shadow-soft transition-smooth hover:shadow-medium">
              <CardHeader className="border-b border-border/30 pb-4">
                <CardTitle className="editorial-heading text-xl font-semibold text-foreground">
                  ✨ 有趣的事实
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="editorial-body space-y-4 text-muted-foreground">
                  <p>• 出生并成长于新疆哈密</p>
                  <p>• 曾担任审计师、行研助理、战略研究和产品设计</p>
                  <p>• 爱好是旅行：去过日本、韩国和中国的20多个城市</p>
                  <p>• 今年希望继续探索：中国台湾、日本和新加坡</p>
                  <p>• 不祈求成功，但是希望有勇气面对一切困难</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-soft transition-smooth hover:shadow-medium">
              <CardHeader className="border-b border-border/30 pb-4">
                <CardTitle className="editorial-heading text-xl font-semibold text-foreground">
                  🎓 我妈妈想让你知道的事
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="editorial-body space-y-4 text-muted-foreground">
                  <p>• 非常典型的理科生，但是大学误入了商科领域</p>
                  <p>• 新疆理科高考173名，高考660分：数学143，理综270，英语135，语文112</p>
                  <p>• 在上海财经大学学习会计，获得过人民奖学金，华为奖学金等</p>
                  <p>• 做过跨境电商，但是最近在转行成为独立开发者</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-5xl">
          <header className="text-center mb-16">
            <h2 className="editorial-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              我的项目
            </h2>
            <div className="editorial-divider"></div>
            <p className="editorial-body text-center text-muted-foreground max-w-2xl mx-auto">
              探索我近期的工作和创新项目
            </p>
          </header>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <ProjectCard
              icon="📱"
              title="正助 - ADHD情绪和任务管理应用"
              description="一款针对ADHD人群的应用，提供情绪支持与任务管理的闭环解决方案，帮助用户更好地管理情绪波动和任务执行困难。"
              image={adhdAppMockup}
              buttonText="查看商业计划书"
              className="lg:col-span-1"
            />
            
            <ProjectCard
              icon="🛒"
              title="电子商务业务"
              description="在美国与加拿大市场运营电子商务业务，专注于产品开发、供应链管理和市场营销策略。"
              image={ecommerceBusiness}
              buttonText="了解更多"
              className="lg:col-span-1"
            />
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ProjectCard
              icon="👩‍💼"
              title="个人简历"
              description="查看我的详细教育背景、工作经历、技能和项目经验。"
              buttonText="查看简历"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 border-t border-border/30">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-16">
            <h2 className="editorial-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              专业技能
            </h2>
            <div className="editorial-divider"></div>
          </header>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border border-border shadow-soft">
              <CardHeader className="border-b border-border/30 pb-4">
                <CardTitle className="editorial-heading text-lg font-semibold">技术技能</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {techSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="tech" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-soft">
              <CardHeader className="border-b border-border/30 pb-4">
                <CardTitle className="editorial-heading text-lg font-semibold">语言能力</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} category="language" />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-soft">
              <CardHeader className="border-b border-border/30 pb-4">
                <CardTitle className="editorial-heading text-lg font-semibold">专业领域</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
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
      <section id="contact" className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-3xl text-center">
          <header className="mb-16">
            <h2 className="editorial-heading text-4xl lg:text-5xl font-bold text-foreground mb-4">
              联系我
            </h2>
            <div className="editorial-divider"></div>
            <p className="editorial-body text-muted-foreground max-w-xl mx-auto">
              如果您对我的项目感兴趣，或者想要了解更多信息，欢迎通过以下方式联系我：
            </p>
          </header>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-card border border-border shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-6">{contact.icon}</div>
                  <Button 
                    variant="link" 
                    className="text-foreground hover:text-primary p-0 h-auto font-normal editorial-body"
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
      <footer className="py-12 px-4 border-t-2 border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="editorial-divider mb-6"></div>
          <p className="editorial-body text-muted-foreground">© 2024 梁悦. 保留所有权利. 浙ICP备2025173001号</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

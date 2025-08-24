import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"

const BlogPosts = () => {
  const { t } = useLanguage()

  const blogPosts = [
    {
      title: "ADHD人群的产品设计思考：从同理心到解决方案",
      excerpt: "作为一个关注心理健康的产品设计师，我深入研究了ADHD人群的需求和痛点，分享了如何通过设计思维创造更包容的产品体验。",
      date: "2024年3月15日",
      readTime: "8分钟阅读",
      category: "Product Design",
      tags: ["ADHD", "UX Design", "Accessibility", "Mental Health"],
      featured: true
    },
    {
      title: "从审计师到产品经理：跨领域转型的实战经验",
      excerpt: "分享我从传统审计行业转向产品设计和技术开发的完整历程，包括学习路径、技能转换和心态调整的具体方法。",
      date: "2024年2月28日",
      readTime: "12分钟阅读",
      category: "Career Development",
      tags: ["Career Change", "Product Management", "Learning", "Growth"],
      featured: true
    },
    {
      title: "跨境电商数据分析实战：从0到1的运营策略",
      excerpt: "基于实际运营经验，详细解析跨境电商中的关键数据指标、分析方法和优化策略，帮助创业者避免常见陷阱。",
      date: "2024年2月10日",
      readTime: "15分钟阅读",
      category: "E-commerce",
      tags: ["Data Analysis", "E-commerce", "Amazon", "Strategy"],
      featured: false
    },
    {
      title: "AI时代的产品伦理：技术与人文的平衡",
      excerpt: "探讨在AI技术快速发展的背景下，产品设计师如何在创新与伦理之间找到平衡，确保技术真正服务于人类福祉。",
      date: "2024年1月22日",
      readTime: "10分钟阅读",
      category: "Technology Ethics",
      tags: ["AI Ethics", "Product Design", "Technology", "Society"],
      featured: false
    },
    {
      title: "入境旅游的数字化转型：机遇与挑战并存",
      excerpt: "分析中国入境旅游市场的现状和痛点，探讨如何通过数字化手段提升外国游客的旅游体验，促进文化交流。",
      date: "2024年1月8日",
      readTime: "7分钟阅读",
      category: "Travel Tech",
      tags: ["Tourism", "Digital Transformation", "User Experience", "Culture"],
      featured: false
    },
    {
      title: "创业路上的心理建设：如何保持长期动力",
      excerpt: "创业不仅是商业挑战，更是心理挑战。分享我在创业过程中的心理调适方法和保持动力的实用技巧。",
      date: "2023年12月15日",
      readTime: "6分钟阅读",
      category: "Entrepreneurship",
      tags: ["Entrepreneurship", "Mental Health", "Motivation", "Personal Growth"],
      featured: false
    }
  ]

  const categories = ["All", "Product Design", "Career Development", "E-commerce", "Technology Ethics", "Travel Tech", "Entrepreneurship"]

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Product Design": "bg-blue-100 text-blue-800",
      "Career Development": "bg-green-100 text-green-800",
      "E-commerce": "bg-purple-100 text-purple-800",
      "Technology Ethics": "bg-red-100 text-red-800",
      "Travel Tech": "bg-yellow-100 text-yellow-800",
      "Entrepreneurship": "bg-indigo-100 text-indigo-800"
    }
    return colors[category] || "bg-gray-100 text-gray-800"
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
              <Link to="/academic/products" className="hover:text-blue-600 transition-colors">Products</Link>
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
            📝 Blog Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts and insights on product design, technology, entrepreneurship, and the intersection of innovation with human experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700 text-white" : "border-gray-300 hover:bg-gray-50"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                    {post.title}
                  </CardTitle>
                  <div className="text-sm text-gray-500">
                    {post.date} • {post.readTime}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-gray-300 hover:bg-gray-50 w-full"
                  >
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Posts</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                    <div className="text-sm text-gray-500">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gray-300 hover:bg-gray-50"
                    >
                      Read More →
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        👍 Like
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        💬 Comment
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                        📤 Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="mt-12">
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                Subscribe to get notified about new blog posts and insights on product design, technology, and entrepreneurship.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-12">
          <Link to="/academic/products">
            <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              ← Previous: Products
            </Button>
          </Link>
          <Link to="/academic/cv">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Next: CV →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default BlogPosts

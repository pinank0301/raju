import { Card, CardContent } from "@/components/ui/card"
import { Wand2, Library, Mic, Share } from "lucide-react"

const features = [
  {
    icon: Wand2,
    title: "AI Script Generator",
    description: "Generate engaging, viral-ready scripts from any topic with advanced AI algorithms",
  },
  {
    icon: Library,
    title: "Template Library",
    description: "Access hundreds of viral video templates including Minecraft, Subway Surfers, and more",
  },
  {
    icon: Mic,
    title: "Voice Cloning",
    description: "Clone voices of popular personalities like Modi, Elon Musk, and Rahul Gandhi",
  },
  {
    icon: Share,
    title: "One-Click Export",
    description: "Export your videos in multiple formats optimized for TikTok, YouTube Shorts, and Instagram",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-teal-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Powerful Features</h2>
          <p className="text-xl text-teal-200 max-w-2xl mx-auto text-pretty">
            Everything you need to create viral content that captures attention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-teal-900/40 to-black/60 border-teal-800/50 backdrop-blur-sm hover:from-teal-800/50 hover:to-black/70 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-teal-200 text-pretty leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

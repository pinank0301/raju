import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

const showcaseVideos = [
  {
    title: "Minecraft Parkour + Baburao Voice",
    thumbnail: "/image3.png",
    views: "2.3M",
    template: "Minecraft Parkour",
  },
  {
    title: "MineCraft + Modi Voice",
    thumbnail: "/image2.png",
    views: "1.8M",
    template: "Tech Meme",
  },
  {
    title: "Minecraft + Akshay Kumar Voice",
    thumbnail: "/image.png",
    views: "4.2M",
    template: "Tech Meme",
  },
]

export function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Viral Videos Made Easy</h2>
          <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
            See what our users are creating with AI voice cloning and viral templates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseVideos.map((video, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-teal-900/30 to-black/50 border-teal-800/50 backdrop-blur-sm hover:from-teal-800/40 hover:to-black/60 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg aspect-[9/16]">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 rounded-full px-3 py-1 flex items-center gap-1">
                    <Eye className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-medium">{video.views}</span>
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

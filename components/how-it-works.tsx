import { Card, CardContent } from "@/components/ui/card"
import { FileText, Edit3, Video, Download } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Script Generation",
    description: "AI generates engaging scripts from your topic input automatically",
  },
  {
    icon: Edit3,
    title: "Edit Script",
    description: "Fine-tune the generated script to match your vision perfectly",
  },
  {
    icon: Video,
    title: "Choose Template",
    description: "Select from viral templates like Minecraft Parkour, Subway Surfers",
  },
  {
    icon: Download,
    title: "Generate Video",
    description: "AI creates your viral video with voice cloning in minutes",
  },
]

export function HowItWorks() {
  return (
    <section data-section="how-it-works" className="py-20 bg-gradient-to-b from-black to-teal-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance drop-shadow-md">How It Works</h2>
          <p className="text-xl text-white max-w-2xl mx-auto text-pretty">
            Create viral content in 4 simple steps with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-teal-900/50 to-black/50 border-teal-800/50 backdrop-blur-sm hover:from-teal-800/60 hover:to-black/60 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-8 h-8 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 drop-shadow-sm">{step.title}</h3>
                <p className="text-white text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

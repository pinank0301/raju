import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out VidCrafter AI",
    features: ["3 videos per month", "Basic templates", "720p export quality", "Community support"],
    popular: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "month",
    description: "Ideal for content creators and influencers",
    features: [
      "50 videos per month",
      "All templates & voice clones",
      "1080p export quality",
      "Priority support",
      "Custom thumbnails",
      "Analytics dashboard",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "month",
    description: "For agencies and power users",
    features: [
      "Unlimited videos",
      "All templates & voice clones",
      "4K export quality",
      "24/7 priority support",
      "Custom branding",
      "API access",
      "Team collaboration",
      "Advanced analytics",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-teal-950 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Simple Pricing</h2>
          <p className="text-xl text-teal-200 max-w-2xl mx-auto text-pretty">
            Choose the perfect plan for your content creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-to-b border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "from-teal-800/60 to-black/80 border-teal-500 shadow-2xl shadow-teal-500/20"
                  : "from-teal-900/40 to-black/60 border-teal-800/50 hover:from-teal-800/50 hover:to-black/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-teal-200">/{plan.period}</span>
                </div>
                <p className="text-teal-200 text-pretty">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <span className="text-teal-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-xl cursor-pointer"
                      : "bg-teal-900/50 hover:bg-teal-800/60 text-teal-100 border border-teal-700 cursor-pointer"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

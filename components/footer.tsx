import { Github, Twitter, Youtube, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-black border-t border-teal-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">VidCrafter AI</h3>
            <p className="text-teal-200 mb-6 text-pretty max-w-md">
              Create viral AI videos in minutes with voice cloning, viral templates, and automated script generation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-200 hover:text-teal-100 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-200 hover:text-teal-100 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-teal-200 hover:text-teal-100 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-200 hover:text-teal-100 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-teal-200 hover:text-teal-100 transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-900/50 mt-12 pt-8 text-center">
          <p className="text-teal-300">© 2024 VidCrafter AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

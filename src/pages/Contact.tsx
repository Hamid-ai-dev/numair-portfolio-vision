
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Globe, MapPin, ChevronRight } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-islamic-green-50 to-islamic-gold-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-elegant font-bold text-islamic-green-800 dark:text-islamic-green-400 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Connect for Collaboration, Consultation, or Partnership
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-islamic-green-200 dark:border-islamic-green-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-green-800 dark:text-islamic-green-400">Contact Information</CardTitle>
                <CardDescription className="dark:text-gray-400">Reach out for various opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-islamic-green-600 dark:text-islamic-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">hafizmuhammadnumair@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-islamic-green-600 dark:text-islamic-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">+92 XXX XXXXXXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-islamic-green-600 dark:text-islamic-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">ips-technologies.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-islamic-green-600 dark:text-islamic-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Pakistan</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-islamic-gold-200 dark:border-islamic-gold-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-islamic-gold-800 dark:text-islamic-gold-400">Areas of Collaboration</CardTitle>
                <CardDescription className="dark:text-gray-400">Professional opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-islamic-gold-600 dark:text-islamic-gold-400" />
                    <span className="text-gray-700 dark:text-gray-300">Islamic consultation & research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-islamic-gold-600 dark:text-islamic-gold-400" />
                    <span className="text-gray-700 dark:text-gray-300">Educational collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-islamic-gold-600 dark:text-islamic-gold-400" />
                    <span className="text-gray-700 dark:text-gray-300">Technology partnerships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-islamic-gold-600 dark:text-islamic-gold-400" />
                    <span className="text-gray-700 dark:text-gray-300">Speaking engagements</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white px-8 py-3 text-lg">
              Connect on WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

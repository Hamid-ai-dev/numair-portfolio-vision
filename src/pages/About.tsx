
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Chatbot } from "@/components/chatbot"
import { GraduationCap, Award, Heart } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-islamic-green-800 dark:text-islamic-green-400 mb-4">
                About Hafiz Muhammad Numair
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">A Journey from Scholar to Tech Innovator</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-center">
              <div>
                <Card className="border-islamic-green-200 dark:border-islamic-green-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-islamic-green-800 dark:text-islamic-green-400">Personal Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-islamic-green-100 dark:bg-islamic-green-900 text-islamic-green-800 dark:text-islamic-green-200">
                          Age: 32
                        </Badge>
                        <Badge variant="secondary" className="bg-islamic-green-100 dark:bg-islamic-green-900 text-islamic-green-800 dark:text-islamic-green-200">
                          Pakistani
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-islamic-green-600 dark:text-islamic-green-400" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Islamic Scholar & Tech Entrepreneur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-islamic-green-600 dark:text-islamic-green-400" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">Founder & CEO, IPS Technologies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-elegant font-semibold text-islamic-green-800 dark:text-islamic-green-400 mb-4">
                  Vision & Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm md:text-base">
                  Bridging the gap between traditional Islamic scholarship and modern technology to create innovative solutions that benefit communities worldwide.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm md:text-base">
                  With a unique combination of deep Islamic knowledge and cutting-edge technical expertise, Hafiz Muhammad Numair is dedicated to empowering education, fostering innovation, and creating positive social impact.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-islamic-green-600 text-white">Islamic Scholar</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Professor</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Researcher</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Tech Entrepreneur</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Chatbot />
    </div>
  )
}

export default About

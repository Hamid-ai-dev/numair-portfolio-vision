
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Chatbot } from "@/components/chatbot"
import { GraduationCap, BookOpen, Award } from "lucide-react"

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-islamic-green-800 dark:text-islamic-green-400 mb-4">
                Education & Research
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Academic Excellence in Islamic Studies & Technology</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <Card className="border-islamic-green-200 dark:border-islamic-green-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800 dark:text-islamic-green-400">
                    <GraduationCap className="w-5 h-5" />
                    Academic Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800 dark:text-islamic-green-400">MS Quran & Hadith</h4>
                      <p className="text-gray-600 dark:text-gray-300">Islamia University, Bahawalpur</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Advanced Islamic Research</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800 dark:text-islamic-green-400">M.Sc Islamic Studies</h4>
                      <p className="text-gray-600 dark:text-gray-300">University of Sargodha</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Comprehensive Islamic Knowledge</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800 dark:text-islamic-green-400">BS Computer Science</h4>
                      <p className="text-gray-600 dark:text-gray-300">COMSATS University, Islamabad</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Technology & Programming</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-islamic-gold-200 dark:border-islamic-gold-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-gold-800 dark:text-islamic-gold-400">
                    <BookOpen className="w-5 h-5" />
                    Islamic Scholarship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-islamic-gold-50 dark:bg-islamic-gold-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-islamic-gold-800 dark:text-islamic-gold-400 mb-2">Hafiz-e-Qur'an</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        Complete memorization of the Holy Quran with deep understanding and recitation expertise.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-islamic-gold-800 dark:text-islamic-gold-400">Research Specializations:</h4>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                        <li>• Quranic Studies & Tafsir</li>
                        <li>• Hadith Research & Authentication</li>
                        <li>• Islamic Education Methodology</li>
                        <li>• Contemporary Islamic Issues</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Chatbot />
    </div>
  )
}

export default Education


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Building, 
  Globe, 
  Mail, 
  Phone,
  MapPin,
  Award,
  Briefcase,
  Code,
  Heart,
  Star,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-elegant text-2xl font-bold text-islamic-green-800">
              Hafiz Muhammad Numair
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-islamic-green-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-islamic-green-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('contributions')} className="text-gray-700 hover:text-islamic-green-600 transition-colors">Contributions</button>
              <button onClick={() => scrollToSection('ips-tech')} className="text-gray-700 hover:text-islamic-green-600 transition-colors">IPS Technologies</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-islamic-green-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl font-elegant font-bold text-islamic-green-800 mb-4">
                Hafiz Muhammad Numair
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-6">
                Scholar • Educator • Entrepreneur • Bridging Faith & Technology
              </div>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                A distinguished Islamic scholar and tech entrepreneur dedicated to empowering communities through knowledge, education, and innovative technology solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button onClick={() => scrollToSection('about')} className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white px-8 py-3 text-lg">
                View Portfolio
              </Button>
              <Button onClick={() => scrollToSection('ips-tech')} variant="outline" className="border-islamic-green-600 text-islamic-green-600 hover:bg-islamic-green-50 px-8 py-3 text-lg">
                Explore IPS Technologies
              </Button>
              <Button onClick={() => scrollToSection('contact')} variant="outline" className="border-islamic-gold-600 text-islamic-gold-600 hover:bg-islamic-gold-50 px-8 py-3 text-lg">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">About Hafiz Muhammad Numair</h2>
              <p className="text-xl text-gray-600">A Journey from Scholar to Tech Innovator</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-islamic-green-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-islamic-green-800">Personal Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary" className="bg-islamic-green-100 text-islamic-green-800">Age: 32</Badge>
                        <Badge variant="secondary" className="bg-islamic-green-100 text-islamic-green-800">Pakistani</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-islamic-green-600" />
                        <span className="text-gray-700">Pakistan</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-islamic-green-600" />
                        <span className="text-gray-700">Founder & CEO, IPS Technologies</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-elegant font-semibold text-islamic-green-800 mb-4">Vision & Mission</h3>
                <p className="text-gray-700 mb-4">
                  Bridging the gap between traditional Islamic scholarship and modern technology to create innovative solutions that benefit communities worldwide.
                </p>
                <p className="text-gray-700 mb-6">
                  With a unique combination of deep Islamic knowledge and cutting-edge technical expertise, Hafiz Muhammad Numair is dedicated to empowering education, fostering innovation, and creating positive social impact.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-islamic-green-600 text-white">Islamic Scholar</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Professor</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Researcher</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Tech Entrepreneur</Badge>
                  <Badge className="bg-islamic-green-600 text-white">Ex-Army Professional</Badge>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education & Research Section */}
      <section id="education" className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Education & Research</h2>
              <p className="text-xl text-gray-600">Academic Excellence in Islamic Studies & Technology</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-islamic-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800">
                    <GraduationCap className="w-5 h-5" />
                    Academic Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">MS Quran & Hadith</h4>
                      <p className="text-gray-600">Islamia University, Bahawalpur</p>
                      <p className="text-sm text-gray-500">Advanced Islamic Research</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">M.Sc Islamic Studies</h4>
                      <p className="text-gray-600">University of Sargodha</p>
                      <p className="text-sm text-gray-500">Comprehensive Islamic Knowledge</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">BS Computer Science</h4>
                      <p className="text-gray-600">COMSATS University, Islamabad</p>
                      <p className="text-sm text-gray-500">Technology & Programming</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">DAE Electrical</h4>
                      <p className="text-gray-600">3-Year Diploma (Equivalent to FSC)</p>
                      <p className="text-sm text-gray-500">Engineering Foundation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-islamic-gold-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-gold-800">
                    <BookOpen className="w-5 h-5" />
                    Islamic Scholarship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-islamic-gold-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-islamic-gold-800 mb-2">Hafiz-e-Qur'an</h4>
                      <p className="text-gray-700">Complete memorization of the Holy Quran with deep understanding and recitation expertise.</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-islamic-gold-800">Research Specializations:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Quranic Studies & Tafsir</li>
                        <li>• Hadith Research & Authentication</li>
                        <li>• Islamic Education Methodology</li>
                        <li>• Contemporary Islamic Issues</li>
                        <li>• Technology in Islamic Education</li>
                      </ul>
                    </div>
                    <div className="flex items-center gap-2 text-islamic-gold-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">Recognized Islamic Scholar & Researcher</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Educational Contributions */}
      <section id="contributions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Educational Contributions</h2>
              <p className="text-xl text-gray-600">Building Educational Excellence & Community Impact</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-islamic-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800">
                    <Users className="w-5 h-5" />
                    Educational Institutions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-islamic-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-islamic-green-800">Founder & Head</h4>
                      <p className="text-gray-700 text-sm">Multiple schools and tuition centers</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-islamic-green-700">Key Achievements:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Established comprehensive educational programs</li>
                        <li>• Integrated Islamic and modern curricula</li>
                        <li>• Trained hundreds of students</li>
                        <li>• Implemented innovative teaching methods</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-islamic-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800">
                    <BookOpen className="w-5 h-5" />
                    Teaching & Research
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-islamic-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-islamic-green-800">Professor & Educator</h4>
                      <p className="text-gray-700 text-sm">Islamic Studies & Research</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-islamic-green-700">Expertise Areas:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Quranic interpretation and teaching</li>
                        <li>• Hadith studies and research</li>
                        <li>• Islamic education methodology</li>
                        <li>• Public speaking and lectures</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-islamic-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800">
                    <Heart className="w-5 h-5" />
                    Community Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-islamic-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-islamic-green-800">Social Leadership</h4>
                      <p className="text-gray-700 text-sm">Educational & community development</p>
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-medium text-islamic-green-700">Contributions:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Student mentorship programs</li>
                        <li>• Community education initiatives</li>
                        <li>• Islamic guidance and counseling</li>
                        <li>• Educational reform advocacy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IPS Technologies Section */}
      <section id="ips-tech" className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">IPS Technologies</h2>
              <p className="text-xl text-gray-600">Innovative Tech Solutions for Modern Challenges</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Code className="w-5 h-5" />
                      Company Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Mission</h4>
                        <p className="text-gray-700">Delivering cutting-edge technology solutions that bridge traditional values with modern innovation.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Services</h4>
                        <div className="grid grid-cols-2 gap-2">
                          <Badge variant="outline" className="border-blue-300 text-blue-700">Software Development</Badge>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">AI Solutions</Badge>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">Web Development</Badge>
                          <Badge variant="outline" className="border-blue-300 text-blue-700">Digital Transformation</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Visit: ips-technologies.com</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h3 className="text-2xl font-elegant font-semibold text-blue-800 mb-4">Technology Leadership</h3>
                <p className="text-gray-700 mb-4">
                  As Founder & CEO of IPS Technologies, Hafiz Muhammad Numair leads a team of skilled professionals in developing innovative digital solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Custom software development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">AI and machine learning solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Web and mobile applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Digital transformation consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Professional Journey</h2>
              <p className="text-xl text-gray-600">Diverse Experience in Leadership & Management</p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-islamic-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800">
                    <Briefcase className="w-5 h-5" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">Ex-Head of Motorway Labour</h4>
                      <p className="text-gray-600">Pakistan Army</p>
                      <p className="text-sm text-gray-500">Leadership, project management, and team coordination</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">Hostel Management</h4>
                      <p className="text-gray-600">Administrative Leadership</p>
                      <p className="text-sm text-gray-500">Student welfare and facility management</p>
                    </div>
                    <div className="border-l-4 border-islamic-green-500 pl-4">
                      <h4 className="font-semibold text-islamic-green-800">Wholesale Dealership</h4>
                      <p className="text-gray-600">Business Management</p>
                      <p className="text-sm text-gray-500">Commercial operations and business development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-islamic-green-50 to-islamic-gold-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Connect for Collaboration, Consultation, or Partnership</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-islamic-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-islamic-green-800">Contact Information</CardTitle>
                  <CardDescription>Reach out for various opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-islamic-green-600" />
                    <span className="text-gray-700">hafizmuhammadnumair@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-islamic-green-600" />
                    <span className="text-gray-700">+92 XXX XXXXXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-islamic-green-600" />
                    <span className="text-gray-700">ips-technologies.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-islamic-green-600" />
                    <span className="text-gray-700">Pakistan</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-islamic-gold-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-islamic-gold-800">Areas of Collaboration</CardTitle>
                  <CardDescription>Professional opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Islamic consultation & research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Educational collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Technology partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Speaking engagements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Business proposals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700">Mentorship opportunities</span>
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
      </section>

      {/* Footer */}
      <footer className="bg-islamic-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-elegant font-bold mb-2">Hafiz Muhammad Numair</h3>
            <p className="text-islamic-green-200 mb-4">Scholar • Educator • Entrepreneur</p>
            <p className="text-sm text-islamic-green-300">
              © 2024 Hafiz Muhammad Numair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

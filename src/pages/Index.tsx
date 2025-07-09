
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Chatbot } from "@/components/chatbot";
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
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-green-100 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-elegant text-xl md:text-2xl font-bold text-islamic-green-800 dark:text-islamic-green-400">
              Hafiz Muhammad Numair
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                About
              </Link>
              <Link to="/education" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                Education
              </Link>
              <button onClick={() => scrollToSection('contributions')} className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                Contributions
              </button>
              <button onClick={() => scrollToSection('ips-tech')} className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                IPS Technologies
              </button>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                Contact
              </Link>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="h-9 w-9"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                About
              </Link>
              <Link to="/education" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                Education
              </Link>
              <button onClick={() => scrollToSection('contributions')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors w-full text-left">
                Contributions
              </button>
              <button onClick={() => scrollToSection('ips-tech')} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors w-full text-left">
                IPS Technologies
              </button>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-islamic-green-600 dark:hover:text-islamic-green-400 transition-colors">
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-8 md:pb-16 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-elegant font-bold text-islamic-green-800 dark:text-islamic-green-400 mb-4">
                Hafiz Muhammad Numair
              </h1>
              <div className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6">
                Scholar • Educator • Entrepreneur • Bridging Faith & Technology
              </div>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                A distinguished Islamic scholar and tech entrepreneur dedicated to empowering communities through knowledge, education, and innovative technology solutions.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center px-4"
            >
              <Link to="/about" className="w-full md:w-auto">
                <Button className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white px-6 md:px-8 py-3 text-base md:text-lg w-full md:w-auto">
                  View Portfolio
                </Button>
              </Link>
              <Button onClick={() => scrollToSection('ips-tech')} variant="outline" className="border-islamic-green-600 text-islamic-green-600 hover:bg-islamic-green-50 dark:hover:bg-islamic-green-900/20 px-6 md:px-8 py-3 text-base md:text-lg w-full md:w-auto">
                Explore IPS Technologies
              </Button>
              <Link to="/contact" className="w-full md:w-auto">
                <Button variant="outline" className="border-islamic-gold-600 text-islamic-gold-600 hover:bg-islamic-gold-50 dark:hover:bg-islamic-gold-900/20 px-6 md:px-8 py-3 text-base md:text-lg w-full md:w-auto">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Contributions */}
      <section id="contributions" className="py-8 md:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Educational Contributions</h2>
              <p className="text-lg md:text-xl text-gray-600">Building Educational Excellence & Community Impact</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
              <Card className="border-islamic-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800 text-lg">
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
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800 text-lg">
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
              
              <Card className="border-islamic-green-200 shadow-lg hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800 text-lg">
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
      <section id="ips-tech" className="py-8 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-islamic-green-800 mb-4">IPS Technologies</h2>
              <p className="text-lg md:text-xl text-gray-600">Innovative Tech Solutions for Modern Challenges</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-center">
              <div>
                <Card className="border-blue-200 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800 text-lg">
                      <Code className="w-5 h-5" />
                      Company Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Mission</h4>
                        <p className="text-gray-700 text-sm md:text-base">Delivering cutting-edge technology solutions that bridge traditional values with modern innovation.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Services</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                <h3 className="text-xl md:text-2xl font-elegant font-semibold text-blue-800 mb-4">Technology Leadership</h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  As Founder & CEO of IPS Technologies, Hafiz Muhammad Numair leads a team of skilled professionals in developing innovative digital solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Custom software development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">AI and machine learning solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Web and mobile applications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm md:text-base">Digital transformation consulting</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-8 md:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Professional Journey</h2>
              <p className="text-lg md:text-xl text-gray-600">Diverse Experience in Leadership & Management</p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-islamic-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-islamic-green-800 text-lg">
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
      <section id="contact" className="py-8 md:py-16 bg-gradient-to-r from-islamic-green-50 to-islamic-gold-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-elegant font-bold text-islamic-green-800 mb-4">Get in Touch</h2>
              <p className="text-lg md:text-xl text-gray-600">Connect for Collaboration, Consultation, or Partnership</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <Card className="border-islamic-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-islamic-green-800">Contact Information</CardTitle>
                  <CardDescription>Reach out for various opportunities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-islamic-green-600" />
                    <span className="text-gray-700 text-sm md:text-base break-all">hafizmuhammadnumair@gmail.com</span>
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
                      <span className="text-gray-700 text-sm md:text-base">Islamic consultation & research</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700 text-sm md:text-base">Educational collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700 text-sm md:text-base">Technology partnerships</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700 text-sm md:text-base">Speaking engagements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700 text-sm md:text-base">Business proposals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-islamic-gold-600" />
                      <span className="text-gray-700 text-sm md:text-base">Mentorship opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button className="bg-islamic-green-600 hover:bg-islamic-green-700 text-white px-6 md:px-8 py-3 text-base md:text-lg">
                Connect on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-islamic-green-800 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-elegant font-bold mb-2">Hafiz Muhammad Numair</h3>
            <p className="text-islamic-green-200 dark:text-gray-400 mb-4">Scholar • Educator • Entrepreneur</p>
            <p className="text-sm text-islamic-green-300 dark:text-gray-500">
              © 2024 Hafiz Muhammad Numair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;

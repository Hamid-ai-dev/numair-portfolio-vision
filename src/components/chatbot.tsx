
import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (message.trim()) {
      // Here you would integrate with your actual chatbot service
      console.log('Sending message:', message)
      setMessage('')
      // For now, just show a placeholder response
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-islamic-green-600 hover:bg-islamic-green-700 text-white shadow-lg"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chatbot Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 h-96 shadow-xl border-islamic-green-200">
          <CardHeader className="bg-islamic-green-600 text-white rounded-t-lg">
            <CardTitle className="text-lg flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat with Hafiz Muhammad Numair
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex flex-col h-full">
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="bg-islamic-green-50 p-3 rounded-lg">
                  <p className="text-sm text-islamic-green-800">
                    Assalam-o-Alaikum! I'm here to help you with Islamic queries, educational guidance, or tech consultation. How can I assist you today?
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-islamic-green-50">
                    Islamic Questions
                  </Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-islamic-green-50">
                    Education
                  </Badge>
                  <Badge variant="outline" className="text-xs cursor-pointer hover:bg-islamic-green-50">
                    Technology
                  </Badge>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  size="icon"
                  className="bg-islamic-green-600 hover:bg-islamic-green-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

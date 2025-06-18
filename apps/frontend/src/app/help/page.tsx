"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  Settings,
  CreditCard,
  Shield,
  Zap,
  Users,
  ExternalLink,
  ChevronRight,
} from "lucide-react"

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      description: "Learn the basics of EchoScribe",
      articles: [
        "How to upload your first recording",
        "Understanding the dashboard",
        "Setting up integrations",
        "Creating your first summary",
      ],
    },
    {
      title: "Features & Tools",
      icon: Zap,
      description: "Explore all EchoScribe features",
      articles: ["AI summarization explained", "Action item extraction", "Speaker identification", "Custom templates"],
    },
    {
      title: "Integrations",
      icon: Settings,
      description: "Connect with your favorite tools",
      articles: [
        "Setting up Notion integration",
        "Syncing with Google Calendar",
        "Trello board automation",
        "Slack notifications",
      ],
    },
    {
      title: "Account & Billing",
      icon: CreditCard,
      description: "Manage your subscription",
      articles: [
        "Upgrading your plan",
        "Managing billing information",
        "Understanding usage limits",
        "Canceling your subscription",
      ],
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      description: "Keep your data safe",
      articles: [
        "Data encryption and security",
        "Privacy policy overview",
        "GDPR compliance",
        "Data retention policies",
      ],
    },
    {
      title: "Team Management",
      icon: Users,
      description: "Collaborate with your team",
      articles: ["Adding team members", "Setting permissions", "Sharing meetings", "Team analytics"],
    },
  ]

  const faqs = [
    {
      question: "How accurate is EchoScribe's transcription?",
      answer:
        "EchoScribe achieves 95%+ accuracy for clear audio recordings. The accuracy depends on factors like audio quality, background noise, speaker clarity, and accent. We continuously improve our AI models to enhance transcription quality.",
    },
    {
      question: "What file formats and sizes are supported?",
      answer:
        "We support most common audio and video formats including MP3, MP4, WAV, M4A, MOV, AVI, and more. The maximum file size is 2GB per upload. For longer recordings, you can split them into smaller segments.",
    },
    {
      question: "How long does it take to process a recording?",
      answer:
        "Processing time varies based on the length and quality of your recording. Typically, a 1-hour meeting takes 5-10 minutes to transcribe and summarize. You'll receive notifications when processing is complete.",
    },
    {
      question: "Can I edit the generated summaries?",
      answer:
        "Yes, you can edit and customize all generated summaries, action items, and insights. EchoScribe provides a starting point, but you have full control to modify the content to match your needs.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade encryption for data in transit and at rest. Your recordings and data are never shared with third parties. We're SOC 2 compliant and follow strict security protocols.",
    },
    {
      question: "Can I integrate EchoScribe with other tools?",
      answer:
        "Yes, EchoScribe integrates with popular productivity tools including Notion, Google Calendar, Trello, Slack, and more. You can automatically sync summaries and action items to your existing workflows.",
    },
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes up to 3 recordings per month, basic summarization, email support, and 30-minute maximum recording length. It's perfect for trying out EchoScribe's core features.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel your subscription anytime from your account settings. You'll continue to have access to all features until the end of your current billing period. No cancellation fees apply.",
    },
  ]

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Help Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How can we help you?</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find answers to common questions, learn how to use EchoScribe, and get the most out of your meetings.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Get help from our support team</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm">
                    Contact Us
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Video className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground mb-4">Watch step-by-step guides</p>
                <Button variant="outline" size="sm">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-sm text-muted-foreground mb-4">Detailed guides and API docs</p>
                <Button variant="outline" size="sm">
                  Read Docs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <Tabs defaultValue="browse" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="browse">Browse Topics</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>

            <TabsContent value="browse" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
                <p className="text-muted-foreground">Find help articles organized by topic</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <Card key={category.title} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <category.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        {category.title}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.map((article, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 text-sm hover:text-blue-600 cursor-pointer"
                          >
                            <ChevronRight className="h-3 w-3" />
                            {article}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faq" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Quick answers to the most common questions</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFAQs.length === 0 && searchQuery && (
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No results found</h3>
                      <p className="text-muted-foreground mb-4">
                        We couldn&apos;t find any FAQs matching &quot;{searchQuery}&quot;. Try different keywords or contact our
                        support team.
                      </p>
                      <Link href="/contact">
                        <Button>Contact Support</Button>
                      </Link>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help you get the most out of EchoScribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Support
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Download,
  Share2,
  CheckCircle,
  ExternalLink,
  Copy,
  FileText,
  Lightbulb,
  Target,
} from "lucide-react"
import { toast } from "sonner"

export default function MeetingDetailPage() {
  const params = useParams()
  const meetingId = params.id

  const [actionItems, setActionItems] = useState([
    {
      id: 1,
      text: "Sarah to create project timeline by Friday",
      completed: false,
      assignee: "Sarah Johnson",
      dueDate: "June 20, 2025",
    },
    {
      id: 2,
      text: "Michael to schedule user testing sessions",
      completed: true,
      assignee: "Michael Chen",
      dueDate: "June 18, 2025",
    },
    {
      id: 3,
      text: "Team to review design mockups by next Tuesday",
      completed: false,
      assignee: "Design Team",
      dueDate: "June 22, 2025",
    },
    {
      id: 4,
      text: "Setup weekly check-in meetings",
      completed: false,
      assignee: "Project Manager",
      dueDate: "June 17, 2025",
    },
    {
      id: 5,
      text: "Prepare client presentation materials",
      completed: false,
      assignee: "Marketing Team",
      dueDate: "June 25, 2025",
    },
  ])

  // Mock meeting data
  const meeting = {
    id: meetingId,
    title: "Project Kickoff Meeting",
    date: "June 15, 2025",
    time: "2:00 PM - 2:45 PM",
    duration: "45 minutes",
    participants: [
      { name: "Sarah Johnson", role: "Product Manager", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Michael Chen", role: "Lead Developer", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Emily Davis", role: "Designer", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "Alex Rodriguez", role: "Marketing Lead", avatar: "/placeholder.svg?height=32&width=32" },
      { name: "John Smith", role: "Client", avatar: "/placeholder.svg?height=32&width=32" },
    ],
    summary: `The team gathered for the official project kickoff meeting to establish clear objectives, timelines, and responsibilities for the upcoming product launch. The meeting covered project scope, resource allocation, and communication protocols.

Key discussion points included the project timeline spanning 12 weeks, with major milestones at weeks 4, 8, and 12. The team agreed on weekly check-ins every Tuesday at 2 PM and established clear communication channels through Slack and email.

The client emphasized the importance of the mobile experience and requested additional user testing phases before the final launch. Budget allocation was discussed, with approval for additional UX research and testing resources.`,
    keyTopics: [
      "Project timeline and milestones",
      "Resource allocation and team responsibilities",
      "Communication protocols and meeting schedules",
      "Mobile experience requirements",
      "User testing strategy",
      "Budget and resource approval",
    ],
    insights: [
      "Mobile experience is the top priority for the client",
      "Additional user testing budget has been approved",
      "Weekly check-ins will help maintain project momentum",
      "Clear communication channels are essential for success",
    ],
    transcript: `[00:00] Sarah Johnson: Good afternoon everyone, thank you for joining our project kickoff meeting. Let's start by going around the room and introducing ourselves.

[00:30] Michael Chen: Hi everyone, I'm Michael, the lead developer on this project. I'll be overseeing the technical implementation.

[01:00] Emily Davis: Hello, I'm Emily, the lead designer. I'll be working on the user experience and visual design.

[01:30] Alex Rodriguez: Hi team, Alex here from marketing. I'll be handling the go-to-market strategy and user acquisition.

[02:00] John Smith: Thank you for having me. I'm John from the client side, and I'm excited to work with your team on this project.

[02:30] Sarah Johnson: Perfect. Now let's dive into the project scope and timeline...

[Continue with full transcript...]`,
  }

  const toggleActionItem = (id: number) => {
    setActionItems((items) => items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard!")
  }

  const syncToNotion = () => {
    toast.success("Synced to Notion successfully!")
  }

  const syncToTrello = () => {
    toast.success("Synced to Trello successfully!")
  }

  const syncToCalendar = () => {
    toast.success("Added to Google Calendar!")
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/meetings">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{meeting.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{meeting.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{meeting.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{meeting.participants.length} participants</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => copyToClipboard(meeting.summary)}>
            <Copy className="h-4 w-4 mr-2" />
            Copy Summary
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Sync your meeting data with your favorite tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button onClick={syncToNotion} className="flex items-center gap-2">
              <div className="w-4 h-4 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              Sync to Notion
            </Button>
            <Button onClick={syncToTrello} variant="outline" className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
              Sync to Trello
            </Button>
            <Button onClick={syncToCalendar} variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              Add to Calendar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="actions">Action Items</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Meeting Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-line text-sm leading-relaxed">{meeting.summary}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Key Topics Discussed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {meeting.keyTopics.map((topic, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Participants</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {meeting.participants.map((participant, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-600">
                            {participant.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">{participant.name}</p>
                          <p className="text-xs text-muted-foreground">{participant.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meeting Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <span className="text-sm font-medium">{meeting.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Participants</span>
                    <span className="text-sm font-medium">{meeting.participants.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Action Items</span>
                    <span className="text-sm font-medium">{actionItems.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Key Topics</span>
                    <span className="text-sm font-medium">{meeting.keyTopics.length}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Action Items</span>
                <Badge variant="outline">
                  {actionItems.filter((item) => item.completed).length} of {actionItems.length} completed
                </Badge>
              </CardTitle>
              <CardDescription>Track and manage action items from this meeting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actionItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-4 border rounded-lg">
                    <Checkbox
                      checked={item.completed}
                      onCheckedChange={() => toggleActionItem(item.id)}
                      className="mt-0.5"
                    />
                    <div className="flex-1 space-y-1">
                      <p className={`text-sm ${item.completed ? "line-through text-muted-foreground" : ""}`}>
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>Assigned to: {item.assignee}</span>
                        <span>Due: {item.dueDate}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                AI-Generated Insights
              </CardTitle>
              <CardDescription>Key insights and patterns identified from this meeting</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {meeting.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                    </div>
                    <p className="text-sm">{insight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transcript" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Full Transcript</CardTitle>
              <CardDescription>Complete transcript of the meeting with timestamps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-4 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed">{meeting.transcript}</pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

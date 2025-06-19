"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Upload, FileAudio, Clock, CheckCircle, Search, Filter, Calendar, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIsUploading(true)
      setUploadProgress(0)

      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsUploading(false)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const recentMeetings = [
    {
      id: 1,
      title: "Project Kickoff Meeting",
      date: "June 15, 2025",
      duration: "45 min",
      status: "completed",
      participants: 5,
      summary: "Discussed project timeline, assigned responsibilities, and agreed on weekly check-ins.",
      actionItems: 3,
    },
    {
      id: 2,
      title: "Weekly Team Standup",
      date: "June 14, 2025",
      duration: "30 min",
      status: "completed",
      participants: 8,
      summary: "Team updates on current sprint progress and blockers discussion.",
      actionItems: 2,
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "June 13, 2025",
      duration: "60 min",
      status: "processing",
      participants: 4,
      summary: "",
      actionItems: 0,
    },
    {
      id: 4,
      title: "Design Review Session",
      date: "June 12, 2025",
      duration: "90 min",
      status: "completed",
      participants: 6,
      summary: "Reviewed new design mockups and gathered feedback from stakeholders.",
      actionItems: 5,
    },
  ]

  const filteredMeetings = recentMeetings.filter((meeting) =>
    meeting.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className=" max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Upload your meeting recordings and lecture videos to get started.</p>
      </div>

      {/* Upload Section */}
      <Card className="border-dashed border-2 border-blue-200 bg-blue-50/50">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Upload className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload your recording</h3>
          <p className="text-muted-foreground text-center mb-6 max-w-md">
            Drag and drop your audio or video files here, or click to browse. We support MP3, MP4, WAV, and more.
          </p>

          {isUploading ? (
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center gap-2">
                <FileAudio className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">meeting-recording.mp3</span>
              </div>
              <Progress value={uploadProgress} className="w-full" />
              <p className="text-sm text-muted-foreground text-center">
                {uploadProgress < 30
                  ? "Uploading..."
                  : uploadProgress < 60
                    ? "Transcribing..."
                    : uploadProgress < 90
                      ? "Summarizing..."
                      : "Completed!"}
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="file-upload">
                <Button size="lg" className="cursor-pointer">
                  Choose Files
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  accept="audio/*,video/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
              <Button size="lg" variant="outline">
                Record Now
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Total Meetings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">18h</p>
                <p className="text-sm text-muted-foreground">Time Saved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Action Items</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-muted-foreground">Participants</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Meetings */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-2xl font-bold">Recent Meetings</h2>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meetings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-4">
          {filteredMeetings.map((meeting) => (
            <Card key={meeting.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{meeting.title}</h3>
                      <Badge variant={meeting.status === "completed" ? "default" : "secondary"}>
                        {meeting.status === "completed" ? "Completed" : "Processing"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{meeting.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{meeting.participants} participants</span>
                      </div>
                    </div>
                    {meeting.summary && <p className="text-sm text-muted-foreground line-clamp-2">{meeting.summary}</p>}
                    {meeting.actionItems > 0 && (
                      <div className="flex items-center gap-1 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-600 font-medium">{meeting.actionItems} action items</span>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {meeting.status === "completed" && (
                      <Link href={`/dashboard/meetings/${meeting.id}`}>
                        <Button>View Details</Button>
                      </Link>
                    )}
                    <Button variant="outline">{meeting.status === "completed" ? "Export" : "View Status"}</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMeetings.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No meetings found</h3>
              <p className="text-muted-foreground text-center">
                {searchQuery ? "Try adjusting your search terms." : "Upload your first recording to get started."}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, FileText, Search, Download, MoreHorizontal, CheckCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MeetingsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const meetings = [
    {
      id: 1,
      title: "Project Kickoff Meeting",
      date: "June 15, 2025",
      time: "2:00 PM",
      duration: "45 min",
      status: "completed",
      participants: 5,
      summary: "Discussed project timeline, assigned responsibilities, and agreed on weekly check-ins.",
      actionItems: 3,
      tags: ["project", "kickoff"],
    },
    {
      id: 2,
      title: "Weekly Team Standup",
      date: "June 14, 2025",
      time: "9:00 AM",
      duration: "30 min",
      status: "completed",
      participants: 8,
      summary: "Team updates on current sprint progress and blockers discussion.",
      actionItems: 2,
      tags: ["standup", "weekly"],
    },
    {
      id: 3,
      title: "Client Presentation",
      date: "June 13, 2025",
      time: "3:30 PM",
      duration: "60 min",
      status: "processing",
      participants: 4,
      summary: "",
      actionItems: 0,
      tags: ["client", "presentation"],
    },
    {
      id: 4,
      title: "Design Review Session",
      date: "June 12, 2025",
      time: "11:00 AM",
      duration: "90 min",
      status: "completed",
      participants: 6,
      summary: "Reviewed new design mockups and gathered feedback from stakeholders.",
      actionItems: 5,
      tags: ["design", "review"],
    },
    {
      id: 5,
      title: "Product Strategy Meeting",
      date: "June 11, 2025",
      time: "1:00 PM",
      duration: "120 min",
      status: "completed",
      participants: 12,
      summary: "Discussed Q3 product roadmap and feature prioritization.",
      actionItems: 8,
      tags: ["strategy", "product"],
    },
    {
      id: 6,
      title: "Engineering Sync",
      date: "June 10, 2025",
      time: "10:00 AM",
      duration: "45 min",
      status: "failed",
      participants: 7,
      summary: "",
      actionItems: 0,
      tags: ["engineering", "sync"],
    },
  ]

  const filteredMeetings = meetings
    .filter((meeting) => {
      const matchesSearch = meeting.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesStatus = statusFilter === "all" || meeting.status === statusFilter
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === "duration") {
        return Number.parseInt(b.duration) - Number.parseInt(a.duration)
      }
      if (sortBy === "participants") {
        return b.participants - a.participants
      }
      return 0
    })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "processing":
        return "Processing"
      case "failed":
        return "Failed"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">All Meetings</h1>
          <p className="text-muted-foreground">Manage and review all your meeting recordings</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Upload New Recording
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meetings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
                <SelectItem value="participants">Participants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{meetings.length}</p>
              <p className="text-sm text-muted-foreground">Total Meetings</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">
                {meetings.filter((m) => m.status === "completed").length}
              </p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">
                {meetings.filter((m) => m.status === "processing").length}
              </p>
              <p className="text-sm text-muted-foreground">Processing</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">
                {meetings.reduce((acc, m) => acc + m.actionItems, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Action Items</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Meetings List */}
      <div className="space-y-4">
        {filteredMeetings.map((meeting) => (
          <Card key={meeting.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{meeting.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {meeting.date} at {meeting.time}
                          </span>
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
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(meeting.status)}>{getStatusText(meeting.status)}</Badge>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Download className="h-4 w-4 mr-2" />
                            Export
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="h-4 w-4 mr-2" />
                            Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {meeting.summary && <p className="text-sm text-muted-foreground line-clamp-2">{meeting.summary}</p>}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {meeting.actionItems > 0 && (
                        <div className="flex items-center gap-1 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-blue-600 font-medium">{meeting.actionItems} action items</span>
                        </div>
                      )}
                      <div className="flex gap-1">
                        {meeting.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  {meeting.status === "completed" && (
                    <Link href={`/dashboard/meetings/${meeting.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  )}
                  {meeting.status === "processing" && (
                    <Button variant="outline" disabled>
                      Processing...
                    </Button>
                  )}
                  {meeting.status === "failed" && <Button variant="outline">Retry</Button>}
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
              {searchQuery || statusFilter !== "all"
                ? "Try adjusting your search terms or filters."
                : "Upload your first recording to get started."}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

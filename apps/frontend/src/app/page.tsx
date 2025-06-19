"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  FileText,
  ListTodo,
  RefreshCw,
  Calendar,
  Trello,
  Zap,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col gap-6">
              <Badge className="w-fit" variant="outline">
                AI-Powered Productivity
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Never miss a detail from your meetings again
              </h1>
              <p className="text-xl text-muted-foreground">
                EchoScribe converts meeting recordings and lecture videos into
                structured summaries, action items, and insights —
                automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/auth/signup">
                  <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                    Get Started for Free
                  </Button>
                </Link>
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("features")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See how it works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border">
                <div className="bg-blue-50 p-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="ml-4 text-sm font-medium">
                      EchoScribe - Meeting Summary
                    </div>
                  </div>
                </div>
                <div className="bg-black p-6">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Project Kickoff Meeting
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>June 15, 2025 • 45 minutes</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        SUMMARY
                      </h4>
                      <p className="text-sm">
                        The team discussed the project timeline, assigned key
                        responsibilities, and agreed on weekly check-ins. The
                        client emphasized the importance of the mobile
                        experience and requested additional user testing before
                        launch.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">
                        ACTION ITEMS
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>
                            Sarah to create project timeline by Friday
                          </span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Michael to schedule user testing sessions</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>
                            Team to review design mockups by next Tuesday
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-48 w-48 rounded-full bg-blue-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How EchoScribe works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform transforms your audio and video content
              into actionable insights in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Summarization</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your recordings to extract key points,
                    decisions, and announcements, creating concise summaries.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ListTodo className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Task Extraction</h3>
                  <p className="text-muted-foreground">
                    Automatically identify action items, assignments, and
                    deadlines from your meetings and organize them.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <RefreshCw className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">
                    Seamless Integration
                  </h3>
                  <p className="text-muted-foreground">
                    Sync your summaries and tasks with Notion, Google Calendar,
                    Trello, and other productivity tools.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 rounded-xl overflow-hidden border border-border shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Sync with your favorite tools
                </h3>
                <p className="text-muted-foreground mb-6">
                  EchoScribe integrates seamlessly with the tools you already
                  use, making it easy to keep your team aligned and your
                  projects on track.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Google Calendar for scheduling and reminders</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg
                        className="h-5 w-5 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 8H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 12H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 16H13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <span>Notion for organized knowledge management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Trello className="h-5 w-5 text-blue-600" />
                    </div>
                    <span>Trello for visual task management</span>
                  </li>
                </ul>
              </div>
              <div className=" p-8 md:p-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  <div className="bg-white rounded-lg shadow-md border border-border p-6 mb-6 ml-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Google Calendar</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Added 3 new events from your Project Kickoff meeting
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-md border border-border p-6 ml-12">
                    <div className="flex items-center gap-2 mb-4">
                      <Trello className="h-5 w-5 text-blue-600" />
                      <h4 className="font-medium">Trello</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Created 5 new cards in your &quot;Project Tasks&quot;
                      board
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why teams love EchoScribe
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save time, improve collaboration, and never miss important details
              again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-4">
              <div className="bg-blue-100 p-3 rounded-full w-fit">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Boost Productivity</h3>
              <p className="text-muted-foreground">
                Reduce time spent on meeting notes and follow-ups by up to 80%,
                allowing your team to focus on what matters.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-blue-100 p-3 rounded-full w-fit">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Save Time</h3>
              <p className="text-muted-foreground">
                Get comprehensive meeting summaries in minutes instead of hours,
                with no manual note-taking required.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-blue-100 p-3 rounded-full w-fit">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Never Miss Details</h3>
              <p className="text-muted-foreground">
                Capture every important point and action item, even in long
                meetings or complex discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4" variant="outline">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by teams everywhere
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about EchoScribe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &quot;EchoScribe has transformed how our remote team
                    collaborates. We save hours every week and never miss
                    important action items.&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">
                        Product Manager, Acme Inc
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &quot;As a student, EchoScribe helps me capture every detail
                    from lectures. The Notion integration is a game-changer for
                    my study workflow.&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">
                        Graduate Student, Tech University
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    &quot;We&apos;ve implemented EchoScribe across our entire
                    organization. The ROI in terms of time saved and improved
                    follow-through is incredible.&quot;
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="bg-blue-100 h-10 w-10 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Alex Rodriguez</p>
                      <p className="text-sm text-muted-foreground">
                        CTO, Enterprise Solutions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-12 items-center opacity-70">
            <div className="h-8">
              <svg
                className="h-full"
                viewBox="0 0 124 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.1 0C7.7 0 0 7.7 0 17.1C0 26.5 7.7 34.2 17.1 34.2C26.5 34.2 34.2 26.5 34.2 17.1C34.2 7.7 26.5 0 17.1 0ZM17.1 30.8C9.6 30.8 3.4 24.6 3.4 17.1C3.4 9.6 9.6 3.4 17.1 3.4C24.6 3.4 30.8 9.6 30.8 17.1C30.8 24.6 24.6 30.8 17.1 30.8Z" />
                <path d="M67.5 22.6C62 22.6 57.6 18.2 57.6 12.7C57.6 7.2 62 2.8 67.5 2.8C73 2.8 77.4 7.2 77.4 12.7C77.4 18.2 73 22.6 67.5 22.6ZM67.5 6.2C63.9 6.2 61 9.1 61 12.7C61 16.3 63.9 19.2 67.5 19.2C71.1 19.2 74 16.3 74 12.7C74 9.1 71.1 6.2 67.5 6.2Z" />
                <path d="M38.5 3.4H42.3V22H38.5V3.4Z" />
                <path d="M50.5 3.4H46.7V22H50.5V16.4L52.7 14.2L57.5 22H62.1L55.3 11.2L61.7 3.4H57.1L50.5 11.4V3.4Z" />
                <path d="M96.1 3.4H92.3V22H96.1V16.4L98.3 14.2L103.1 22H107.7L100.9 11.2L107.3 3.4H102.7L96.1 11.4V3.4Z" />
                <path d="M89.8 22.6C84.3 22.6 79.9 18.2 79.9 12.7C79.9 7.2 84.3 2.8 89.8 2.8C93.1 2.8 96.1 4.3 98 6.7L95.2 9.1C94 7.6 92 6.6 89.8 6.6C86.2 6.6 83.3 9.5 83.3 13.1C83.3 16.7 86.2 19.6 89.8 19.6C92.1 19.6 94.1 18.5 95.3 16.9L98.1 19.3C96.2 21.3 93.2 22.6 89.8 22.6Z" />
                <path d="M123.2 22H119.4V20.1C117.9 21.7 115.8 22.6 113.4 22.6C108.4 22.6 104.4 18.6 104.4 13.6C104.4 8.6 108.4 4.6 113.4 4.6C115.8 4.6 117.9 5.5 119.4 7.1V5.2H123.2V22ZM113.4 8C110.3 8 107.8 10.5 107.8 13.6C107.8 16.7 110.3 19.2 113.4 19.2C116.5 19.2 119 16.7 119 13.6C119 10.5 116.5 8 113.4 8Z" />
              </svg>
            </div>
            <div className="h-8">
              <svg
                className="h-full"
                viewBox="0 0 124 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M41.1 17.2C41.1 19.5 39.2 21.4 36.9 21.4C34.6 21.4 32.7 19.5 32.7 17.2C32.7 14.9 34.6 13 36.9 13C39.2 13 41.1 14.9 41.1 17.2Z" />
                <path d="M58.1 21.2H54.3V12.8C54.3 10.2 53.1 8.9 50.7 8.9C48.3 8.9 46.9 10.5 46.9 13.5V21.2H43.1V0.5H46.9V9.3C47.9 8 49.5 7.2 51.5 7.2C55.1 7.2 58.1 9.6 58.1 13.8V21.2Z" />
                <path d="M60.2 14.2C60.2 10.1 63.5 7.2 67.8 7.2C72.1 7.2 75.4 10.1 75.4 14.2C75.4 18.3 72.1 21.2 67.8 21.2C63.5 21.2 60.2 18.3 60.2 14.2ZM71.6 14.2C71.6 11.9 70 10.1 67.8 10.1C65.6 10.1 64 11.9 64 14.2C64 16.5 65.6 18.3 67.8 18.3C70 18.3 71.6 16.5 71.6 14.2Z" />
                <path d="M93.7 7.4V10.8C93.3 10.7 92.9 10.7 92.5 10.7C89.9 10.7 88.3 12.3 88.3 15.3V21.2H84.5V7.4H88.3V9.7C89.1 8.1 90.9 7.2 93.1 7.2C93.3 7.2 93.5 7.3 93.7 7.4Z" />
                <path d="M94.6 14.2C94.6 10.1 97.9 7.2 102.2 7.2C106.5 7.2 109.8 10.1 109.8 14.2C109.8 18.3 106.5 21.2 102.2 21.2C97.9 21.2 94.6 18.3 94.6 14.2ZM106 14.2C106 11.9 104.4 10.1 102.2 10.1C100 10.1 98.4 11.9 98.4 14.2C98.4 16.5 100 18.3 102.2 18.3C104.4 18.3 106 16.5 106 14.2Z" />
                <path d="M123.9 7.4V10.8C123.5 10.7 123.1 10.7 122.7 10.7C120.1 10.7 118.5 12.3 118.5 15.3V21.2H114.7V7.4H118.5V9.7C119.3 8.1 121.1 7.2 123.3 7.2C123.5 7.2 123.7 7.3 123.9 7.4Z" />
                <path d="M27.7 7.4L22.6 21.2H18.5L13.4 7.4H17.5L20.6 16.5L23.7 7.4H27.7Z" />
                <path d="M6.9 7.4H0.5V10.7H3.1V21.2H6.9V10.7H10.1V7.4H6.9Z" />
                <path d="M77.9 21.2V0.5H81.7V21.2H77.9Z" />
              </svg>
            </div>
            <div className="h-8">
              <svg
                className="h-full"
                viewBox="0 0 124 34"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.1 0C7.7 0 0 7.7 0 17.1C0 26.5 7.7 34.2 17.1 34.2C26.5 34.2 34.2 26.5 34.2 17.1C34.2 7.7 26.5 0 17.1 0ZM17.1 30.8C9.6 30.8 3.4 24.6 3.4 17.1C3.4 9.6 9.6 3.4 17.1 3.4C24.6 3.4 30.8 9.6 30.8 17.1C30.8 24.6 24.6 30.8 17.1 30.8Z" />
                <path d="M67.5 22.6C62 22.6 57.6 18.2 57.6 12.7C57.6 7.2 62 2.8 67.5 2.8C73 2.8 77.4 7.2 77.4 12.7C77.4 18.2 73 22.6 67.5 22.6ZM67.5 6.2C63.9 6.2 61 9.1 61 12.7C61 16.3 63.9 19.2 67.5 19.2C71.1 19.2 74 16.3 74 12.7C74 9.1 71.1 6.2 67.5 6.2Z" />
                <path d="M38.5 3.4H42.3V22H38.5V3.4Z" />
                <path d="M50.5 3.4H46.7V22H50.5V16.4L52.7 14.2L57.5 22H62.1L55.3 11.2L61.7 3.4H57.1L50.5 11.4V3.4Z" />
                <path d="M96.1 3.4H92.3V22H96.1V16.4L98.3 14.2L103.1 22H107.7L100.9 11.2L107.3 3.4H102.7L96.1 11.4V3.4Z" />
                <path d="M89.8 22.6C84.3 22.6 79.9 18.2 79.9 12.7C79.9 7.2 84.3 2.8 89.8 2.8C93.1 2.8 96.1 4.3 98 6.7L95.2 9.1C94 7.6 92 6.6 89.8 6.6C86.2 6.6 83.3 9.5 83.3 13.1C83.3 16.7 86.2 19.6 89.8 19.6C92.1 19.6 94.1 18.5 95.3 16.9L98.1 19.3C96.2 21.3 93.2 22.6 89.8 22.6Z" />
                <path d="M123.2 22H119.4V20.1C117.9 21.7 115.8 22.6 113.4 22.6C108.4 22.6 104.4 18.6 104.4 13.6C104.4 8.6 108.4 4.6 113.4 4.6C115.8 4.6 117.9 5.5 119.4 7.1V5.2H123.2V22ZM113.4 8C110.3 8 107.8 10.5 107.8 13.6C107.8 16.7 110.3 19.2 113.4 19.2C116.5 19.2 119 16.7 119 13.6C119 10.5 116.5 8 113.4 8Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full text-white ">
        <div className="container mx-auto border border-border shadow-lg rounded-xl bg-muted/40 p-8 md:p-12">
          <div className="flex flex-col items-center text-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to transform your meetings?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Join thousands of teams and individuals who are saving time and
              improving productivity with EchoScribe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/signup">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Mic, FileText, Zap } from "lucide-react"
import { toast } from "sonner"

export default function PreferencesPage() {
  const [settings, setSettings] = useState({
    recording: {
      autoTranscribe: true,
      autoSummarize: true,
      speakerDetection: true,
      noiseReduction: false,
    },
    ai: {
      summaryLength: "medium",
      includeTimestamps: true,
      extractActionItems: true,
      generateInsights: true,
    },
  })

  const updateSetting = (category: string, key: string, value: unknown) => {
    setSettings((prev) => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value,
      },
    }))
    toast.success("Preferences updated successfully!")
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Preferences</h1>
        <p className="text-muted-foreground">
          Configure how EchoScribe processes your recordings and generates content
        </p>
      </div>

      <div className="space-y-8">
        {/* Recording Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mic className="h-5 w-5" />
              Recording & Processing
            </CardTitle>
            <CardDescription>Configure how your recordings are processed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-transcribe</Label>
                <p className="text-sm text-muted-foreground">Automatically transcribe uploaded recordings</p>
              </div>
              <Switch
                checked={settings.recording.autoTranscribe}
                onCheckedChange={(checked) => updateSetting("recording", "autoTranscribe", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-summarize</Label>
                <p className="text-sm text-muted-foreground">Generate summaries automatically after transcription</p>
              </div>
              <Switch
                checked={settings.recording.autoSummarize}
                onCheckedChange={(checked) => updateSetting("recording", "autoSummarize", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Speaker detection</Label>
                <p className="text-sm text-muted-foreground">Identify different speakers in the recording</p>
              </div>
              <Switch
                checked={settings.recording.speakerDetection}
                onCheckedChange={(checked) => updateSetting("recording", "speakerDetection", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Noise reduction</Label>
                <p className="text-sm text-muted-foreground">Apply noise reduction to improve transcription quality</p>
              </div>
              <Switch
                checked={settings.recording.noiseReduction}
                onCheckedChange={(checked) => updateSetting("recording", "noiseReduction", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* AI Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              AI & Summarization
            </CardTitle>
            <CardDescription>Customize how AI processes your meetings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Summary length</Label>
              <Select
                value={settings.ai.summaryLength}
                onValueChange={(value) => updateSetting("ai", "summaryLength", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short (1-2 paragraphs)</SelectItem>
                  <SelectItem value="medium">Medium (3-4 paragraphs)</SelectItem>
                  <SelectItem value="long">Long (5+ paragraphs)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Include timestamps</Label>
                <p className="text-sm text-muted-foreground">Add timestamps to key points in summaries</p>
              </div>
              <Switch
                checked={settings.ai.includeTimestamps}
                onCheckedChange={(checked) => updateSetting("ai", "includeTimestamps", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Extract action items</Label>
                <p className="text-sm text-muted-foreground">Automatically identify and extract action items</p>
              </div>
              <Switch
                checked={settings.ai.extractActionItems}
                onCheckedChange={(checked) => updateSetting("ai", "extractActionItems", checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Generate insights</Label>
                <p className="text-sm text-muted-foreground">Create AI-powered insights and recommendations</p>
              </div>
              <Switch
                checked={settings.ai.generateInsights}
                onCheckedChange={(checked) => updateSetting("ai", "generateInsights", checked)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Custom Templates */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Custom Templates
            </CardTitle>
            <CardDescription>Create custom summary templates for different meeting types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Default template</Label>
                <Textarea
                  placeholder="Enter your custom summary template..."
                  className="min-h-[100px]"
                  defaultValue="## Meeting Summary
**Date:** {date}
**Duration:** {duration}
**Participants:** {participants}

### Key Points
{key_points}

### Action Items
{action_items}

### Next Steps
{next_steps}"
                />
              </div>

              <div className="space-y-2">
                <Label>Standup template</Label>
                <Textarea
                  placeholder="Template for daily standups..."
                  className="min-h-[80px]"
                  defaultValue="## Daily Standup - {date}

### What was accomplished yesterday
{yesterday_accomplishments}

### Today's goals
{today_goals}

### Blockers
{blockers}"
                />
              </div>

              <div className="space-y-2">
                <Label>Client meeting template</Label>
                <Textarea
                  placeholder="Template for client meetings..."
                  className="min-h-[80px]"
                  defaultValue="## Client Meeting - {client_name}
**Date:** {date}
**Attendees:** {attendees}

### Discussion Points
{discussion_points}

### Client Feedback
{client_feedback}

### Action Items
{action_items}

### Follow-up Required
{follow_up}"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button>Save Templates</Button>
              <Button variant="outline">Reset to Default</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

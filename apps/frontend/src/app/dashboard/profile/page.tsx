"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Upload, Camera, ExternalLink, CheckCircle, X, CreditCard, Shield } from "lucide-react"
import { toast } from "sonner"
import { Switch } from "@/components/ui/switch"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Acme Corporation",
    jobTitle: "Product Manager",
    location: "San Francisco, CA",
    bio: "Experienced product manager with a passion for building user-centric solutions. I love using EchoScribe to keep track of all my meetings and ensure nothing falls through the cracks.",
    website: "https://johndoe.com",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
  })

  const [connectedAccounts, setConnectedAccounts] = useState([
    { name: "Google", email: "john.doe@gmail.com", connected: true, type: "oauth" },
    { name: "Notion", workspace: "Acme Team", connected: true, type: "integration" },
    { name: "Trello", workspace: "Personal Board", connected: false, type: "integration" },
    { name: "Slack", workspace: "Acme Corp", connected: true, type: "integration" },
  ])

  const handleSave = () => {
    setIsEditing(false)
    toast.success("Profile updated successfully!")
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data here if needed
  }

  const handleAvatarUpload = () => {
    toast.success("Avatar updated successfully!")
  }

  const connectAccount = (accountName: string) => {
    setConnectedAccounts((accounts) =>
      accounts.map((account) => (account.name === accountName ? { ...account, connected: true } : account)),
    )
    toast.success(`${accountName} connected successfully!`)
  }

  const disconnectAccount = (accountName: string) => {
    setConnectedAccounts((accounts) =>
      accounts.map((account) => (account.name === accountName ? { ...account, connected: false } : account)),
    )
    toast.success(`${accountName} disconnected successfully!`)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and account settings</p>
        </div>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Basic Information
              </CardTitle>
              <CardDescription>Your personal details and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile" />
                    <AvatarFallback className="text-lg">
                      {profile.firstName[0]}
                      {profile.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                      onClick={handleAvatarUpload}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">
                    {profile.firstName} {profile.lastName}
                  </h3>
                  <p className="text-muted-foreground">
                    {profile.jobTitle} at {profile.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile((prev) => ({ ...prev, firstName: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile((prev) => ({ ...prev, lastName: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile((prev) => ({ ...prev, email: e.target.value }))}
                  disabled={!isEditing}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile((prev) => ({ ...prev, phone: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={profile.location}
                    onChange={(e) => setProfile((prev) => ({ ...prev, location: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={profile.company}
                    onChange={(e) => setProfile((prev) => ({ ...prev, company: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    value={profile.jobTitle}
                    onChange={(e) => setProfile((prev) => ({ ...prev, jobTitle: e.target.value }))}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile((prev) => ({ ...prev, bio: e.target.value }))}
                  disabled={!isEditing}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
              <CardDescription>Connect your social media and professional profiles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={profile.website}
                  onChange={(e) => setProfile((prev) => ({ ...prev, website: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  value={profile.linkedin}
                  onChange={(e) => setProfile((prev) => ({ ...prev, linkedin: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  value={profile.twitter}
                  onChange={(e) => setProfile((prev) => ({ ...prev, twitter: e.target.value }))}
                  disabled={!isEditing}
                  placeholder="https://twitter.com/yourusername"
                />
              </div>
            </CardContent>
          </Card>

          {/* Current Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Current Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Pro Plan</span>
                <Badge>Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground">Unlimited recordings, all integrations, priority support</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Recordings this month</span>
                  <span>24 / Unlimited</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Storage used</span>
                  <span>2.4 GB / 100 GB</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Manage Subscription
              </Button>
            </CardContent>
          </Card>

          {/* Integrations */}
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect your favorite tools</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <span className="text-sm">Notion</span>
                </div>
                <Switch defaultChecked={false} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm">Trello</span>
                </div>
                <Switch defaultChecked={false} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span className="text-sm">Google Calendar</span>
                </div>
                <Switch defaultChecked={true} />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">S</span>
                  </div>
                  <span className="text-sm">Slack</span>
                </div>
                <Switch defaultChecked={true} />
              </div>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
              <Button variant="outline" className="w-full">
                Two-Factor Authentication
              </Button>
              <Button variant="outline" className="w-full">
                Download Data
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          {/* Account Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Account Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Member since</span>
                <span className="text-sm font-medium">March 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total meetings</span>
                <span className="text-sm font-medium">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Hours processed</span>
                <span className="text-sm font-medium">18.5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Action items created</span>
                <span className="text-sm font-medium">47</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Storage used</span>
                <span className="text-sm font-medium">2.4 GB</span>
              </div>
            </CardContent>
          </Card>

          {/* Connected Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your connected services and integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {connectedAccounts.map((account) => (
                <div key={account.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-blue-600">{account.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{account.name}</p>
                      <p className="text-xs text-muted-foreground">{account.email || account.workspace}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {account.connected ? (
                      <>
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Connected
                        </Badge>
                        <Button variant="ghost" size="sm" onClick={() => disconnectAccount(account.name)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button variant="outline" size="sm" onClick={() => connectAccount(account.name)}>
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Upload className="h-4 w-4 mr-2" />
                Upload New Recording
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ExternalLink className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

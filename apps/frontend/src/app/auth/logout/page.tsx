"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, LogIn } from "lucide-react"

export default function LogoutPage() {
  useEffect(() => {
    // Clear any stored authentication data
    localStorage.clear()
    sessionStorage.clear()
  }, [])

  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle>You&apos;ve been logged out</CardTitle>
            <CardDescription>
              Thank you for using EchoScribe. You have been successfully logged out of your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-3">
              <Link href="/auth/login" className="w-full">
                <Button className="w-full">
                  <LogIn className="h-4 w-4 mr-2" />
                  Log Back In
                </Button>
              </Link>
              <Link href="/" className="w-full">
                <Button variant="outline" className="w-full">
                  <Home className="h-4 w-4 mr-2" />
                  Go to Homepage
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Want to stay updated?{" "}
                <Link href="/#testimonials" className="text-blue-600 hover:text-blue-800">
                  Subscribe to our newsletter
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

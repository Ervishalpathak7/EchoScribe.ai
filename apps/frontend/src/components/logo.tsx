import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/logo.png" alt="EchoScribe" width={200} height={50} className="h-12 w-auto" />
    </Link>
  )
}

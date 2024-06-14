// app/dashboard.tsx
import Link from "next/link";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Check, ClipboardIcon, ClockIcon, Lightbulb, Linkedin, LinkedinIcon, MenuIcon, PaintbrushIcon, PartyPopper, Star, Twitter, TwitterIcon, UserIcon, XIcon } from "lucide-react";


import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ComingSoon from "./_components/comingsoon";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-gray-900">
    <nav className="py-6 px-4 flex justify-between items-center">

    <div className="flex items-center cursor-pointer p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-origami h-6 w-6 mr-2"
  >
    <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
    <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
    <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
  </svg>
  <h1 className="text-3xl font-bold cursor-pointer">Plotix</h1>
</div>

      <div className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
        {/* <Link className="text-gray-600 hover:text-gray-900" href="#">
          How it works
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="#">
          Coaches
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" href="#">
          FAQs
        </Link> */}
        <Button variant="outline" className="text-gray-600 hover:text-gray-900">
        <Link className="flex w-full items-center py-2" href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw">

          Join the Waitlist
          </Link>
        </Button>
        {/* <Button className="text-white hover:text-gray-900 flex items-center bg-[#ff6546]">
          Join Plotix
        </Button> */}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link className="flex w-full items-center py-2 text-lg font-semibold" href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw">
                Join the Waitlist
              </Link>
              
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    <ComingSoon />
     {/* Hero */}
     <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Unlock Your Creative Potential with Plotix.
            </h2>
            <p className="mt-4 text-gray-600">
              Plotix connects passionate creatives with top-tier coaches for personalized guidance and skill enhancement. With our innovative platform, managing your creative business and community has never been easier.
            </p>
            <div className="mt-6 space-x-2 flex flex-wrap">
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Live Video Coaching</span>
              </Badge>
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Hassle-Free Management</span>
              </Badge>
              <Badge className="flex items-center space-x-1" variant="secondary">
                <Check className="h-4 w-4" />
                <span>Personalised Packages</span>
              </Badge>
            </div>
            <div className="flex">
            <Link className="flex w-full items-center py-2" href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw">
              <Button className="mt-6 bg-[#ff6546] text-white">Join the Waitlist</Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Book Package Card */}
              <Card className="w-80 drop-shadow-xl mb-8 p-4 bg-white rounded-lg z-1">
                  <Image
                    alt="Comic Writing Fundamentals"
                    className="rounded-md"
                    height={400}
                    src="/comic1.jpg"
                    width={300}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-semibold">Comic Writing Fundamentals</h2>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Badge variant="secondary" className="text-orange-700">Visual Storytelling</Badge>
                      <Badge variant="secondary" className="text-orange-700">Dialogue</Badge>
                      <Badge variant="secondary" className="text-orange-700">Character Building</Badge>
                      <Badge variant="secondary" className="text-orange-700">Plot Structure</Badge>
                      <Button className="mt-2 mb-4 bg-[#0d050d]">Book Package</Button>

                    </div>
                  </div>
                </Card>

              {/* Coach Profile Card */}
              <Card className="w-64 drop-shadow-xl p-4 bg-white rounded-lg absolute top-0 right-0 transform translate-x-40 -translate-y-8 z-10">
              <div className="flex justify-center">
        <Avatar className="w-16 h-16">
          <AvatarImage
            src="/lam3.jpeg"
            alt="Leanne Coach Profile"
            className="rounded-full"
            style={{
              objectFit: "cover",
            }}
          />
          <AvatarFallback>LL</AvatarFallback>
        </Avatar>
      </div>
  <div className="p-4 text-center">
    <h2 className="text-lg font-semibold">Leanne Lam</h2>
    <p className="text-gray-600 text-sm">Journalist & Podcast Host </p>
    <div className="flex flex-wrap justify-center gap-2 mt-2">
      <div className="flex gap-2 ">
        <Badge variant="secondary" className="text-orange-700">Script Writing</Badge>
        <Badge variant="secondary" className="text-orange-700">Interview Techniques</Badge>
      </div>
      <div className="flex gap-2">
        <Badge variant="secondary" className="text-orange-700">Social Media</Badge>
        <Badge variant="secondary" className="text-orange-700">Content Writing</Badge>
      </div>
    </div>
  </div>
</Card>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/*How it works section */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Our platform helps you unlock your full potential through personalized coaching and accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <UserIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Find your Coach</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Explore and choose the right creative professional for you.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <CalendarIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Engage & Learn</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Book and attend live 1:1 video coaching sessions easily.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                <Star className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Succeed Creatively</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Track your progress and grow with professional creative support.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/*Packages section */}

<section className="w-full py-12 md:py-24 lg:py-32">
  <div className="container grid gap-8 px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Coaching Packages</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Unlock your full potential with our tailored coaching services.
        </p>
      </div>
    </div>
    <div className="relative flex justify-center items-center">
      {/* First Card - Left */}
      <div className="group absolute z-10 left-1/2 transform -translate-x-[150%] w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950" style={{ filter: 'blur(5px)' }}>
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Film Package</span>
        </Link>
        <img
          src="/background2.webp"
          alt="Film Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <img src="/person2.jpg" alt="Coach Name" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">Film Package</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Jane Smith</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Film
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            Transform your cinematic vision into a captivating reality with expert guidance from our seasoned filmmaking coaches.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">$699</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">15 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Cinematography
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Directing
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Editing
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Screenwriting
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Now</Button>
          </div>
        </div>
      </div>

      {/* Second Card - Center */}
      <div className="group relative z-20 w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950 mx-4">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Writing Package</span>
        </Link>
        <img
          src="/anim.jpg"
          alt="Writing Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <img src="/mikee.jpg" alt="Coach Name" className="object-cover" />
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">How To Break Into Animation Writing</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Michael Beall</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Writing
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
            New writers spend a lot of time sharpening their skills to produce quality reading material in hopes of landing jobs. But it takes more than owning a library of samples to have a successful writing career in animation. For anyone wanting to break into the industry, this means tapping into as many resources available to multiply your odds of success.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">From $125</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">5 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Character Development
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              World Building
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Plot Structure
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Dialogue
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Soon!</Button>
          </div>
        </div>
      </div>

      {/* Third Card - Right */}
      <div className="group absolute z-10 right-1/2 transform translate-x-[150%] w-80 overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950" style={{ filter: 'blur(5px)' }}>
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View Music Package</span>
        </Link>
        <img
          src="/bg5.png"
          alt="Music Package"
          width={300}
          height={200}
          className="object-cover w-full h-32 group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-4">
            <Avatar>
              <img src="/person3.png" alt="Coach Name" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold">Music Package</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">by Michael Johnson</p>
            </div>
            <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
              Music
            </Badge>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            Ignite your musical passion and unleash your creative potential with personalized guidance from our accomplished music coaches.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">$799</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">20 Sessions</div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Composition
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Production
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Songwriting
            </div>
            <div className="rounded-md bg-gray-100 p-1 text-center text-xs font-medium dark:bg-gray-800 text-orange-700">
              Performance
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="px-4 py-2 text-sm bg-black">Book Now</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/*USER CTA section */}

<section className="bg-[#242424] py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-white">Ready to Start?</h2>
          <p className="text-xl text-gray-300">
            Bring your vision to life. Create an account today and search for the perfect coach based on your specific needs and goals.
          </p>
          <div className="flex justify-center">
            <Link href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw">
              <Button className="bg-[#EE733C] text-white">Join the Waitlist</Button>
            </Link>
        </div>
        </div>
      </div>
    </section>

     {/* Coaches Section */}
     <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Some of Our Coaches</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Work with the best to achieve your goals            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Writing Package</span>
            </Link>
            <div className="p-4 space-y-2">
             
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/coach7.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Monique El-Faizy</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Paris, France</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                  News
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              Monique El-Faizy is a Paris-based journalist and author. She has written for a wide variety of publications, including The New York Times, the Guardian, the Washington Post, the Financial Times
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                Reporting
                 </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Ethics & Standards
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Feature Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Interview Techniques
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Monique</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Film Package</span>
            </Link>
            <div className="p-4 space-y-2">
             
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/karla1.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Karla Williams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Reading, UK</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                    Film & TV
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              Karla Williams is an award-winning writer and executive producer working in TV, short film, and scripted audio
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Story Telling
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Podcast Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Monologue Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Pitching
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Karla</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Music Package</span>
            </Link>
            <div className="p-4 space-y-2">
              
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/amy.jpeg" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Amy Snook</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">California, U.S</p>
                </div>
                <Badge variant="outline" className="order-orange-700 text-orange-700">
                  Non-Fiction
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              Amy Snook is a book marketer, writer, and community builder.
Currently leading marketing for authors at Melcher Media. Founder of Parea Books
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Publishing Strategy
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Community Building
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Self-Publishing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Book Proposals
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Amy</Button>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl dark:bg-gray-950">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Art Package</span>
            </Link>
            <div className="p-4 space-y-2">
            
              <div className="flex justify-center">
                <Avatar className="h-16 w-16">
                  <img src="/loui.png" alt="Coach Name" className="object-cover" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-lg font-bold">Louie Pearlman</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">New York, U.S</p>
                </div>
                <Badge variant="outline" className="border-orange-700 text-primary text-orange-700">
                  Theatre
                </Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                Louie is a writer for The Sesame Street Podcast with Foley and Friends and Ready Set Ride with Elmo, co-produced by Sesame Workshop and Audible
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Comedy Writing
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Childrens Media
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Comics
                </div>
                <div className="rounded-md bg-gray-100 p-2 text-center text-xs font-medium dark:bg-gray-800">
                  Personal Brand
                </div>
              </div>
              <Button className="w-full px-4 py-3 text-base bg-black">Work with Louie</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Coach CTA */}
    
    <section className="bg-[#f7f8fa] py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-[#333] mb-4">Passion Meets Purpose.</h2>
        <p className="text-lg text-[#666] mb-12">
          Elevate your coaching experience with flexibility, autonomy, and increased earnings—join us today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <CreditCardIcon className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">More Money</h3>
                  <p className="text-sm text-[#666]">
                  During beta, keep 100% of your earnings.

</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <ClockIcon className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">Coach Anytime</h3>
                  <p className="text-sm text-[#666]">Coach sessions tailored to your availability.</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <PaintbrushIcon  className="text-[#666] h-6 w-6" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-[#333]">Your Coaching Style</h3>
                  <p className="text-sm text-[#666]">
                    Freedom to shape sessions, coach authentically in your style.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="/person1.jpeg" alt="Coach" className="rounded-lg shadow-lg" />
          </div>
        </div>
        <div className="mt-12 text-center">
        <Link href="https://airtable.com/appeWU9kmSTbqykN3/shrZTjklETFQDWlKw">
          <Button className="bg-black" >Become a Coach</Button> </Link>
        </div>
      </div>
    </section>

{/*FAQ Section */}
<div className="container mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get answers to the most common questions about our business.
          </p>
        </div>
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">What is Plotix?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Plotix is an online platform connecting individuals with skilled coaches who offer personalized guidance and support in various creative disciplines.

              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold"> How do I become a coach on Plotix?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              To become a coach on Plotix, sign up for an account and submit a short application. Once your application is reviewed and approved, you can start offering your personalized 1:1 video sessions to clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-3">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">How do I schedule a session?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Once you’ve signed up, you can schedule sessions directly through the Plotix platform. Clients can book available time slots based on coaches availability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-4">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">What types of sessions can I offer?</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              Currently, Plotix supports personalized 1:1 video sessions, which are offered on an hourly rate basis. Additionally, you can build custom packages with different tiers, number of sessions, and price breakdowns to suit your clients' needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <section className=" py-16 px-8">
          <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between items-center py-4">
      <div className="flex items-center cursor-pointer p-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-origami h-6 w-6 mr-2"
  >
    <path d="M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" />
    <path d="m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" />
    <path d="m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" />
  </svg>
  <h1 className="text-3xl font-bold cursor-pointer">Plotix</h1>
</div>
        <div className="w-full sm:w-1/2 text-center sm:text-right">
          <Link href="https://twitter.com/tryplotix">
            <XIcon className="inline-block  mx-2" />
          </Link>
          <Link href="https://www.linkedin.com/company/tryplotix/">
            <LinkedinIcon className="inline-block  mx-2" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white my-4"></div>
      <div className="flex flex-wrap justify-between items-center py-4">
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <p>Copyright ©2024 Plotix.com</p>
        </div>
        <div className="w-full sm:w-1/2 text-center sm:text-right ">
          <Link href="https://wistful-falcon-84a.notion.site/Plotix-Privacy-Policy-4f752a228ec5436b921506a25e81e809" className="mx-2">
            Privacy
          </Link>
          <Link href="https://wistful-falcon-84a.notion.site/Plotix-Terms-of-Service-45604a2f38a64820b0d0a2af9a274bf0" className="mx-2">
            Terms
          </Link>
        </div>
      </div>
    </div>

</section>
    
          {/* <Accordion
            type="single"
            collapsible
            className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <AccordionItem value="item-5">
              <AccordionTrigger className="flex justify-between space-x-4 px-4 py-3">
                <h4 className="text-lg font-semibold">How do coaches earn and what are the fees?
</h4>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 text-gray-500 dark:text-gray-400">
              During our beta phase, Plotix is offering a special promotion where coaches keep 100% of their earnings with no commission fees. This means you keep all the money you earn from your sessions. After the beta period, standard subscription and commission fees will apply. Sign up now to take advantage of this limited-time offer!              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        </div>
      </div>
    </div>
    </div>

    
//     <div className="flex min-h-screen flex-col dark:bg-gray-950">
//       <header className="flex h-16 shrink-0 items-center justify-between px-4 md:px-6 ml-8">
//         <Link className="flex items-center gap-2" href="#">
//           <Origami className="h-6 w-6 text-orange-600" />
//           <span className="text-lg font-semibold tracking-tight">Plotix</span>
//         </Link>
//         <nav className="ml-auto flex items-center gap-6">
//           <Link
//             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//             href="#"
//           >
//             Dashboard
//           </Link>
//           <Link
//             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//             href="#"
//           >
//             Clients
//           </Link>
//           <Link
//             className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
//             href="#"
//           >
//             Settings
//           </Link>
//           <Avatar>
//             <AvatarImage src="/placeholder-user.jpg" />
//             <AvatarFallback>JD</AvatarFallback>
//           </Avatar>
//         </nav>
//       </header>
//       <main className="flex-1 overflow-auto p-4 md:p-6">
//         <div className="mx-auto max-w-5xl space-y-8">
//           <section className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:p-6">
//             <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
//               <div>
                
//                 <h2 className="text-2xl font-bold tracking-tight">Welcome, John Doe</h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">Your profile is 85% complete.</p>
//               </div>
//               <Progress className="w-full md:w-1/3" value={85} />
//             </div>
//           </section>
//           <section className="grid gap-4 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Upcoming Sessions</CardTitle>
//                 <CardDescription>Join or manage your upcoming coaching sessions.</CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <SessionCard
//                   avatarSrc="/placeholder-user.jpg"
//                   fallbackText="JS"
//                   name="Jane Smith"
//                   description="Strength Training"
//                 />
//                 <SessionCard
//                   avatarSrc="/placeholder-user.jpg"
//                   fallbackText="MB"
//                   name="Michael Brown"
//                   description="Nutrition Coaching"
//                 />
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Revenue Overview</CardTitle>
//                 <CardDescription>Track your coaching earnings and income sources.</CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <RevenueItem icon={DollarSignIcon} iconColor="text-green-500" label="Total Earnings" amount="$5,240" />
//                 <RevenueItem icon={CreditCardIcon} iconColor="text-indigo-600" label="Subscription Income" amount="$3,820" />
//                 <RevenueItem icon={ShoppingBagIcon} iconColor="text-yellow-500" label="Product Sales" amount="$1,420" />
//               </CardContent>
//             </Card>
//           </section>
//           <section className="grid gap-4 md:grid-cols-2">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Recent Activity</CardTitle>
//                 <CardDescription>Stay up-to-date with your recent coaching activities.</CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <ActivityItem icon={DumbbellIcon} iconColor="text-indigo-600" label="New Session Scheduled" time="2 hours ago" />
//                 <ActivityItem icon={StarIcon} iconColor="text-yellow-500" label="Client Left a Review" time="Yesterday" />
//                 <ActivityItem icon={FileTextIcon} iconColor="text-green-500" label="New Session Notes Added" time="3 days ago" />
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>Client Management</CardTitle>
//                 <CardDescription>View and manage your active clients.</CardDescription>
//               </CardHeader>
//               <CardContent className="grid gap-4">
//                 <ClientItem
//                   avatarSrc="/placeholder-user.jpg"
//                   fallbackText="JS"
//                   name="Jane Smith"
//                   description="Strength Training"
//                 />
//                 <ClientItem
//                   avatarSrc="/placeholder-user.jpg"
//                   fallbackText="MB"
//                   name="Michael Brown"
//                   description="Nutrition Coaching"
//                 />
//               </CardContent>
//             </Card>
//           </section>
//         </div>
//       </main>
//     </div>
//   )
// }

// function SessionCard({ avatarSrc, fallbackText, name, description }: { avatarSrc: string, fallbackText: string, name: string, description: string }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex items-center gap-2">
//         <Avatar>
//           <AvatarImage src={avatarSrc} />
//           <AvatarFallback>{fallbackText}</AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-sm font-medium leading-none">{name}</p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
//         </div>
//       </div>
//       <div className="flex gap-2">
//         <Button size="sm" variant="outline">
//           Join
//         </Button>
//         <Button size="sm" variant="outline">
//           Manage
//         </Button>
//       </div>
//     </div>
//   )
// }

// function RevenueItem({ icon: Icon, iconColor, label, amount }: { icon: React.ComponentType<IconProps>, iconColor: string, label: string, amount: string }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex items-center gap-2">
//         <Icon className={`h-5 w-5 ${iconColor}`} />
//         <p className="text-sm font-medium leading-none">{label}</p>
//       </div>
//       <p className="text-xl font-bold">{amount}</p>
//     </div>
//   )
// }

// function ActivityItem({ icon: Icon, iconColor, label, time }: { icon: React.ComponentType<IconProps>, iconColor: string, label: string, time: string }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex items-center gap-2">
//         <Icon className={`h-5 w-5 ${iconColor}`} />
//         <p className="text-sm font-medium leading-none">{label}</p>
//       </div>
//       <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
//     </div>
//   )
// }

// function ClientItem({ avatarSrc, fallbackText, name, description }: { avatarSrc: string, fallbackText: string, name: string, description: string }) {
//   return (
//     <div className="flex items-center justify-between gap-4">
//       <div className="flex items-center gap-2">
//         <Avatar>
//           <AvatarImage src={avatarSrc} />
//           <AvatarFallback>{fallbackText}</AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-sm font-medium leading-none">{name}</p>
//           <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
//         </div>
//       </div>
//       <div className="flex gap-2">
//         <Button size="sm" variant="outline">
//           Profile
//         </Button>
//         <Button size="sm" variant="outline">
//           Notes
//         </Button>
//       </div>
//     </div>
  )
}

function CreditCardIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function DollarSignIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}

function DumbbellIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}

function FileTextIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

function ShoppingBagIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function StarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

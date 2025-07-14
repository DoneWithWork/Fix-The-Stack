import SignInBtn from "@/components/auth/SignInBtn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  Gauge,
  MessageSquare,
  Shield,
  Wifi,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-400">FixTheStack</div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#performance"
              className="hover:text-blue-400 transition-colors"
            >
              Performance
            </Link>
            <Link
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <SignInBtn />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            FIX THE STACK
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            IoT Platforms suck. We made it better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
            >
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-3 bg-transparent"
            >
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose FixTheStack?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Code className="h-10 w-10 text-blue-400 mb-2" />
                <CardTitle className="text-white">
                  Complex Rules Engine
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Craft sophisticated rules that trigger actions across your IoT
                  ecosystem with our intuitive rule builder.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-400 mb-2" />
                <CardTitle className="text-white">
                  Lightning Fast Response
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Sub-100ms response times ensure your IoT devices react
                  instantly to critical events.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Shield className="h-10 w-10 text-green-400 mb-2" />
                <CardTitle className="text-white">
                  HTTPS Only Security
                </CardTitle>
                <CardDescription className="text-gray-300">
                  All communications secured with HTTPS. No insecure HTTP
                  connections allowed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <MessageSquare className="h-10 w-10 text-purple-400 mb-2" />
                <CardTitle className="text-white">
                  MQTT Two-Way Communication
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Reliable bidirectional communication with your devices using
                  industry-standard MQTT protocol.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Gauge className="h-10 w-10 text-red-400 mb-2" />
                <CardTitle className="text-white">
                  Intuitive Dashboard
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Simple, clean interface designed to get things done quickly
                  without complexity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <Wifi className="h-10 w-10 text-cyan-400 mb-2" />
                <CardTitle className="text-white">OTA Updates</CardTitle>
                <CardDescription className="text-gray-300">
                  Push over-the-air updates to all your devices seamlessly and
                  securely.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section id="performance" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Performance That Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Speed Test Results</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge className="bg-blue-600">FixTheStack</Badge>
                    <span>Response Time</span>
                  </div>
                  <span className="text-green-400 font-bold">47ms</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-gray-600">
                      Competitor A
                    </Badge>
                    <span>Response Time</span>
                  </div>
                  <span className="text-red-400 font-bold">340ms</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge variant="outline" className="border-gray-600">
                      Competitor B
                    </Badge>
                    <span>Response Time</span>
                  </div>
                  <span className="text-red-400 font-bold">520ms</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Why Speed Matters in IoT
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Critical safety systems require instant response</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Real-time automation depends on low latency</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Better user experience with responsive devices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>Reduced power consumption on battery devices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Competitive Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Starter</CardTitle>
                <CardDescription className="text-gray-300">
                  Perfect for small projects
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $9<span className="text-lg text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Up to 100 devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Basic rules engine</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">HTTPS & MQTT</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 border-blue-500 relative">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black">
                Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-white">Professional</CardTitle>
                <CardDescription className="text-blue-100">
                  For growing businesses
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $29<span className="text-lg text-blue-200">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm text-white">
                      Up to 1,000 devices
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm text-white">
                      Advanced rules engine
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm text-white">OTA updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-300" />
                    <span className="text-sm text-white">Priority support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Enterprise</CardTitle>
                <CardDescription className="text-gray-300">
                  For large scale deployments
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">
                  $99<span className="text-lg text-gray-400">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Unlimited devices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm">SLA guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Fix Your Stack?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {
              "Join thousands of developers who've already upgraded their IoT infrastructure."
            }
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
          >
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Developer Promo Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Built by Developers, for Developers
            </h3>
            <p className="text-gray-300 mb-6">
              {
                "FixTheStack was created by a team of IoT engineers who were frustrated with existing platforms. We've experienced the pain points firsthand and built the solution we wished existed."
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>5+ years IoT experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-green-400" />
                <span>Open source contributors</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-yellow-400" />
                <span>Bootstrapped & profitable</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-400">
                {
                  "We're not just another SaaS company. We're developers solving real problems for other developers."
                }
                <br />
                <span className="text-blue-400">- The FixTheStack Team</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-blue-400 mb-4 md:mb-0">
              FixTheStack
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Docs
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 FixTheStack. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

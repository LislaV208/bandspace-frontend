import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="container py-10">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that's right for your band
        </p>
      </div>
      
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Perfect for small bands just starting out</CardDescription>
            <div className="mt-4 text-3xl font-bold">$0</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>1 Workspace</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>5 Members</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Basic Audio Player</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>For growing bands with more needs</CardDescription>
            <div className="mt-4 text-3xl font-bold">$19</div>
            <div className="text-sm text-muted-foreground">/month</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Unlimited Workspaces</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>15 Members per Workspace</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Advanced Audio Features</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Priority Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Subscribe</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>For professional music studios</CardDescription>
            <div className="mt-4 text-3xl font-bold">Custom</div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Unlimited Members</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>Custom Integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span>24/7 Support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
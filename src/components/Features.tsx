// Features Component
// Generated: 2025-08-28T15:36:40.127Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Settings, 
  Shield, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Cog,
  Database,
  Headphones,
  CheckCircle
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Settings,
      title: "S/4HANA Migration",
      description: "Seamless transition from legacy SAP systems to S/4HANA with minimal business disruption.",
      badge: "Implementation"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for enterprise-grade deployments.",
      badge: "Security"
    },
    {
      icon: TrendingUp,
      title: "Business Optimization",
      description: "Process reengineering and workflow optimization to maximize operational efficiency.",
      badge: "Strategy"
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Expert guidance for organizational transformation and user adoption programs.",
      badge: "Training"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time monitoring and KPI tracking to measure transformation success.",
      badge: "Analytics"
    },
    {
      icon: Cog,
      title: "Custom Development",
      description: "Tailored SAP solutions and integrations to meet unique business requirements.",
      badge: "Development"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Secure and accurate data transfer with validation and quality assurance.",
      badge: "Data"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for critical business systems.",
      badge: "Support"
    },
    {
      icon: CheckCircle,
      title: "Compliance Assurance",
      description: "Ensure regulatory compliance and industry standards across all implementations.",
      badge: "Governance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP Transformation
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Services & Solutions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From strategy to implementation, we deliver end-to-end SAP solutions that drive 
            digital transformation and accelerate business growth for enterprise organizations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to accelerate your SAP transformation journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Assessment
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download Methodology
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
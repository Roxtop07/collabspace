import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for small teams just getting started.",
      features: [
        "Up to 5 teams",
        "10 members per team",
        "Basic video conferencing",
        "Standard whiteboard tools",
        "1GB file storage",
        "Email support",
      ],
      cta: "Get Started",
      href: "/auth/signup?plan=starter",
      popular: false,
    },
    {
      name: "Professional",
      price: "$19",
      description: "Ideal for growing teams that need more features.",
      features: [
        "Unlimited teams",
        "20 members per team",
        "HD video conferencing",
        "Advanced whiteboard tools",
        "10GB file storage",
        "AI assistant basic",
        "Priority support",
      ],
      cta: "Get Started",
      href: "/auth/signup?plan=professional",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "Advanced features for large organizations.",
      features: [
        "Unlimited teams",
        "Unlimited members",
        "4K video conferencing",
        "Advanced whiteboard with templates",
        "100GB file storage",
        "AI assistant premium",
        "Dedicated support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      href: "/contact-sales",
      popular: false,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Simple, Transparent Pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for your team. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all ${
                plan.popular ? "border-primary/50 shadow-md" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -translate-y-5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              <ul className="my-6 space-y-2 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" asChild>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
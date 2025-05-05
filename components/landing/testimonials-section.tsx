import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Product Manager",
      content: "CollabSpace has transformed how our team works together. The real-time collaboration tools have increased our productivity by 30%.",
      avatar: "AJ",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      content: "The whiteboard feature is a game changer for our design sessions. We can iterate faster and capture everyone's ideas seamlessly.",
      avatar: "SC",
    },
    {
      name: "Marcus Williams",
      role: "Software Developer",
      content: "The AI assistant helps our team stay focused by handling routine tasks and providing valuable suggestions during meetings.",
      avatar: "MW",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Trusted by Teams Everywhere
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what teams are saying about CollabSpace.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-background h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
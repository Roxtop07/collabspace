import {
  Activity,
  MessageSquare,
  Video,
  Pencil,
  FileText,
  Users,
  Bot,
  Smartphone
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Video Conferencing",
      description: "Connect face-to-face with your team members through high-quality video calls.",
    },
    {
      icon: <Pencil className="h-6 w-6" />,
      title: "Interactive Whiteboard",
      description: "Collaborate on ideas in real-time with our intuitive drawing and diagramming tools.",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Real-Time Chat",
      description: "Stay connected with instant messaging that keeps your team in sync.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "File Sharing",
      description: "Securely share and access team documents from anywhere.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Management",
      description: "Create and manage teams with role-based permissions and unique invite codes.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Assistant",
      description: "Get intelligent suggestions and support with our integrated AI assistant.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Ready",
      description: "Access your workspace on any device with our responsive PWA design.",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-Time Collaboration",
      description: "Work together seamlessly with synchronized changes across all features.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Collaborate
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              CollabSpace brings together all the tools your team needs to ideate, create, and build together.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
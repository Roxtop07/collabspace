interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="flex-1 space-y-4">
        {children}
      </div>
    </div>
  );
}
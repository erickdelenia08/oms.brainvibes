export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-section-gap max-w-4xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-h2 text-h2 text-foreground">Settings</h2>
          <p className="font-body-sm text-body-sm text-muted-foreground mt-1">Manage your account and preferences.</p>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl shadow-sm p-6">
        <p className="text-muted-foreground text-sm">Settings form placeholder. Here you would update your email, password, and notification preferences.</p>
      </div>
    </div>
  );
}

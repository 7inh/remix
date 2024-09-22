import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Notifications" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
};

export default function NotificationsPage() {
  return (
    <div className="lg:p-6 lg:pt-4">
      <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
    </div>
  );
}

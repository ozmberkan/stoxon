import { Bell, Shield, Stars, User2 } from "lucide-react";
import { useState } from "react";
import InfoContent from "~/components/Profile/Tabs/InfoContent";
import NotificationContent from "~/components/Profile/Tabs/NotificationContent";
import ProContent from "~/components/Profile/Tabs/ProContent";
import SecurityContent from "~/components/Profile/Tabs/SecurityContent";

const Profile = () => {
  const defaultTab = "info";
  const [tab, setTab] = useState(defaultTab);

  return (
    <div className="min-h-svh flex container mx-auto py-6 ">
      <div className="w-64 flex flex-col gap-1 mr-2 pr-5 border-r border-border">
        <nav className="w-full ">
          <ul className="flex flex-col gap-1.5 w-full ">
            {profileTabs.map((item) => (
              <li
                key={item.id}
                className={`mb-1 w-full hover:bg-neutral-100 px-2 py-1 rounded ${
                  tab === item.key ? "bg-neutral-50" : ""
                }`}
              >
                <button
                  onClick={() => setTab(item.key)}
                  className="text-neutral-500 hover:text-text transition-all duration-200 text-sm font-semibold w-full flex items-center gap-2"
                >
                  <item.icon size={18} />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {tab === "info" && <InfoContent />}
      {tab === "pro" && <ProContent />}
      {tab === "security" && <SecurityContent />}
      {tab === "notification" && <NotificationContent />}
    </div>
  );
};

export default Profile;

export const profileTabs = [
  {
    id: 1,
    name: "Kişisel Bilgilerim",
    key: "info",
    component: InfoContent,
    icon: User2,
  },
  {
    id: 2,
    name: "Abonelik Yönetimi",
    key: "pro",
    component: ProContent,
    icon: Stars,
  },
  {
    id: 3,
    name: "Güvenlik Ayarlarım",
    key: "security",
    component: SecurityContent,
    icon: Shield,
  },
  {
    id: 4,
    name: "Bildirim Ayarlarım",
    key: "notification",
    component: NotificationContent,
    icon: Bell,
  },
];

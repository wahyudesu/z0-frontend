"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  Book,
  ChevronRight,
  Flashlight,
  LayoutDashboard,
  Lock,
  MessageCircle,
  Smile,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

import "./navbar.css";

import Logo from "./logo";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { GithubStars } from "./github-stars";
import { GithubStars } from "./github-stars";
import { BlocksMenuIllustration } from "./menu-illustration";
import { MobileNavbar } from "./mobile-navbar";

// Feature items data
const featureItems = {
  tagall: {
    title: "Tagall",
    description: "mention semua member dalam satu perintah",
    icon: <Users size={18} className="text-blue-500" />,
  },
  toxic: {
    title: "Toxic Detection",
    description: "mendeteksi kata kasar untuk menjaga kenyamanan grup",
    icon: <Flashlight size={18} className="text-amber-500" />,
  },
  welcome: {
    title: "Welcoming Message",
    description: "pesan sambutan otomatis untuk member baru",
    icon: <Smile size={18} className="text-pink-500" />,
  },
  admin: {
    title: "Admin Control",
    description: "membuka dan menutup chat grup dengan mudah",
    icon: <Lock size={18} className="text-red-500" />,
  },
};

const blockPreviews = {
  feedback: {
    title: "Feedback",
    icon: <MessageCircle size={20} className="text-emerald-500" />,
    section: "feedback",
  },
  roadmap: {
    title: "Roadmap",
    icon: <Book size={20} className="text-indigo-500" />,
    section: "roadmap",
  },
  request: {
    title: "Request Feature",
    icon: <Sparkles size={20} className="text-purple-500" />,
    section: "request",
  },
};

export default function Navbar({ className }: { className?: string }) {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const isMobile = useIsMobile();

  // Show mobile navbar on mobile devices
  if (isMobile) {
    return <MobileNavbar className={className} />;
  }

  return (
    <NavigationMenu.Root className={cn("navbar-menu", className)}>
      <a className="flex flex-1 items-center gap-2" href="/">
        <Logo />
      </a>
      <NavigationMenu.List className="menu-list flex-auto">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="trigger cursor-default!">
            <LayoutDashboard size={16} className="text-violet-500" />
            Feature
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="content">
            <div className="enhanced-submenu">
              <div className="submenu-nav">
                <div className="submenu-items">
                  <EnhancedListItem
                    icon={featureItems.tagall.icon}
                    title="Tagall"
                  >
                    {featureItems.tagall.description}
                  </EnhancedListItem>
                  <EnhancedListItem
                    icon={featureItems.toxic.icon}
                    title="Toxic Detection"
                  >
                    {featureItems.toxic.description}
                  </EnhancedListItem>
                  <EnhancedListItem
                    icon={featureItems.welcome.icon}
                    title="Welcoming Message"
                  >
                    {featureItems.welcome.description}
                  </EnhancedListItem>
                  <EnhancedListItem
                    icon={featureItems.admin.icon}
                    title="Admin Control"
                  >
                    {featureItems.admin.description}
                  </EnhancedListItem>
                  <div className="border-t border-slate-200 pt-2 mt-2">
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <Link href="/resources">
                        Explore semua fitur
                        <ChevronRight size={14} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="submenu-preview">
                <div className="flex h-full w-full items-start justify-center p-1">
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Everything you need.</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-50">
                      Less is more. We've built a beautiful minimal app, that's packed with just the right amount of features, to save you time and help you focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="trigger cursor-default!">
            <Zap size={16} className="text-yellow-500" />
            Product Feedback
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="content">
            <div className="enhanced-submenu">
              <div className="submenu-nav">
                <div className="submenu-items">
                  <EnhancedListItem
                    href="/feedback"
                    icon={blockPreviews.feedback.icon}
                    onHover={() => setHoveredBlock("feedback")}
                    onLeave={() => setHoveredBlock(null)}
                    title="Feedback"
                  >
                    Share your thoughts and help us improve.
                  </EnhancedListItem>
                  <EnhancedListItem
                    href="/roadmap"
                    icon={blockPreviews.roadmap.icon}
                    onHover={() => setHoveredBlock("roadmap")}
                    onLeave={() => setHoveredBlock(null)}
                    title="Roadmap"
                  >
                    See what's coming next and our future plans.
                  </EnhancedListItem>
                  <EnhancedListItem
                    href="/request-feature"
                    icon={blockPreviews.request.icon}
                    onHover={() => setHoveredBlock("request")}
                    onLeave={() => setHoveredBlock(null)}
                    title="Request Feature"
                  >
                    Suggest new features or improvements.
                  </EnhancedListItem>
                </div>
              </div>

              <div className="submenu-preview">
                <div className="flex h-full w-full items-start justify-center p-1">
                  <div className="space-y-1 text-center">
                    <h4 className="text-xl font-bold">Masukanmu berarti.</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-50">
                      Hubungi kami untuk memberi masukan atau lihat roadmap pengembangan chatbot ini.
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link className="trigger" href="/community">
            <MessageCircle size={16} className="text-cyan-500" /> Community
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <div className="viewport-position">
        <NavigationMenu.Viewport className="viewport" />
      </div>
      <div className="flex flex-1 items-center justify-end gap-2 pr-6">
        <GithubStars />
      </div>
    </NavigationMenu.Root>
  );
}

interface EnhancedListItemProps {
  children: React.ReactNode;
  title: string;
  icon: React.ReactNode;
  href?: string;
  onHover?: () => void;
  onLeave?: () => void;
}

function EnhancedListItem({
  children,
  title,
  icon,
  href,
  onHover = () => {},
  onLeave = () => {},
  ...props
}: EnhancedListItemProps) {
  const content = (
    <>
      <div className="enhanced-list-item-icon frame-box relative">{icon}</div>
      <div className="enhanced-list-item-content">
        <div className="enhanced-list-item-heading">{title}</div>
        <p className="enhanced-list-item-text">{children}</p>
      </div>
    </>
  );

  if (!href) {
    return (
      <div
        className="enhanced-list-item-link"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        {...props}
      >
        {content}
      </div>
    );
  }

  return (
    <NavigationMenu.Link asChild>
      <Link
        className="enhanced-list-item-link"
        href={href}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        {...props}
      >
        {content}
      </Link>
    </NavigationMenu.Link>
  );
}

"use client";

import Logo from "./logo";
import { Button } from "./smoothbutton";
import {
  Book,
  ChevronRight,
  Flashlight,
  LayoutDashboard,
  Lock,
  Menu,
  MessageCircle,
  Smile,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GithubStars } from "./github-stars";

interface MobileNavbarProps {
  className?: string;
}

export function MobileNavbar({ className }: MobileNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("mobile-navbar", className)}>
      <div className="mobile-navbar-header">
        <a className="flex gap-2" href="/">
          <Logo />
        </a>
        <Button
          aria-label="Toggle menu"
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          variant="ghost"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mobile-navbar-menu"
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1], // ease-out-quart
            }}
          >
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mobile-navbar-section"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.05, duration: 0.2 }}
            >
              <div className="mobile-navbar-section-title">
                <LayoutDashboard size={16} className="text-violet-500" />
                Fitur
              </div>
              <div className="mobile-navbar-links">
                <div className="mobile-navbar-link">
                  <Users size={16} className="text-blue-500" />
                  <div>
                    <div className="text-sm font-medium">Tagall</div>
                    <p className="text-xs text-muted-foreground">
                      mention semua member dalam satu perintah
                    </p>
                  </div>
                </div>
                <div className="mobile-navbar-link">
                  <Flashlight size={16} className="text-amber-500" />
                  <div>
                    <div className="text-sm font-medium">Toxic Detection</div>
                    <p className="text-xs text-muted-foreground">
                      mendeteksi kata kasar untuk menjaga kenyamanan grup
                    </p>
                  </div>
                </div>
                <div className="mobile-navbar-link">
                  <Smile size={16} className="text-pink-500" />
                  <div>
                    <div className="text-sm font-medium">Welcoming Message</div>
                    <p className="text-xs text-muted-foreground">
                      pesan sambutan otomatis untuk member baru
                    </p>
                  </div>
                </div>
                <div className="mobile-navbar-link">
                  <Lock size={16} className="text-red-500" />
                  <div>
                    <div className="text-sm font-medium">Admin Control</div>
                    <p className="text-xs text-muted-foreground">
                      membuka dan menutup chat grup dengan mudah
                    </p>
                  </div>
                </div>
              </div>
              <Link
                className="mobile-navbar-link mt-2 justify-center border-t border-slate-200"
                href="/resources"
              >
                Explore semua fitur
                <ChevronRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mobile-navbar-section"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              <div className="mobile-navbar-section-title">
                <Zap size={16} className="text-yellow-500" />
                Product Feedback
              </div>
              <div className="mobile-navbar-links">
                <Link className="mobile-navbar-link" href="/feedback">
                  <MessageCircle size={16} className="text-emerald-500" />
                  Feedback
                </Link>
                <Link className="mobile-navbar-link" href="/roadmap">
                  <Book size={16} className="text-indigo-500" />
                  Roadmap
                </Link>
                <Link className="mobile-navbar-link" href="/request-feature">
                  <Sparkles size={16} className="text-purple-500" />
                  Request Feature
                </Link>
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mobile-navbar-section"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.15, duration: 0.2 }}
            >
              <div className="mobile-navbar-links">
                <Link className="mobile-navbar-link" href="/community">
                  <MessageCircle size={16} className="text-cyan-500" />
                  Community
                </Link>
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mobile-navbar-footer"
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            >
              <GithubStars />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
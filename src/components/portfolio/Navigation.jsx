import { useEffect, useState } from "react";
import { Home, User, Layers, FolderGit2, Route as RouteIcon, Mail, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "experience", label: "Experience", icon: RouteIcon },
  { id: "contact", label: "Contact", icon: Mail },
];

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.5], rootMargin: "-20% 0px -45% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export function Sidebar() {
  const active = useActiveSection();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[248px] flex-col justify-between border-r border-border/70 bg-[oklch(0.165_0.015_236)]/80 px-6 py-8 backdrop-blur-xl lg:flex">
      <div>
        <a href="#home" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[0_0_28px_-10px_var(--gold)]">
            <Crown className="size-5" strokeWidth={1.4} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-lg tracking-wide">Aakash R</span>
            <span className="eyebrow text-[0.6rem]">Backend Engineer</span>
          </span>
        </a>

        <nav className="mt-12 space-y-1.5">
          {items.map(({ id, label, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={cn(
                  "group flex items-center gap-3 rounded-xl border border-transparent px-3.5 py-2.5 text-sm text-muted-foreground transition-all duration-500",
                  "hover:border-gold/20 hover:bg-gold/5 hover:text-foreground",
                  isActive &&
                    "border-gold/40 bg-gold/10 text-foreground shadow-[0_0_34px_-16px_var(--gold)]",
                )}
              >
                <Icon
                  className={cn("size-4 transition-colors", isActive ? "text-gold" : "opacity-70")}
                  strokeWidth={1.4}
                />
                <span className="tracking-wide">{label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="card-lux p-4">
        <div className="flex items-center gap-3">
          <span className="font-display flex size-9 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-sm text-gold">
            AR
          </span>
          <div className="leading-tight">
            <p className="text-sm">Aakash R</p>
            <p className="text-[0.7rem] text-muted-foreground">Chennai, India</p>
          </div>
        </div>
        <p className="font-display mt-4 text-[0.95rem] leading-snug text-muted-foreground italic">
          "Build with purpose.
          <br />
          Create with discipline."
        </p>
      </div>
    </aside>
  );
}

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/70 bg-background/85 px-5 py-4 backdrop-blur-xl lg:hidden">
      <a href="#home" className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
          <Crown className="size-4" strokeWidth={1.4} />
        </span>
        <span className="font-display text-base tracking-wide">Aakash R</span>
      </a>
      <span className="eyebrow text-[0.6rem]">Backend Engineer</span>
    </header>
  );
}

export function MobileNav() {
  const active = useActiveSection();
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-1 border-t border-border/70 bg-background/90 px-2 py-2 backdrop-blur-xl lg:hidden">
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            className={cn(
              "flex flex-1 flex-col items-center gap-1 rounded-lg border border-transparent px-1 py-1.5 text-[0.6rem] text-muted-foreground transition-all",
              isActive && "border-gold/35 bg-gold/10 text-gold",
            )}
          >
            <Icon className="size-4" strokeWidth={1.4} />
            <span className="tracking-wide">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  navItemHasChildren,
  navSubLinkIsActive,
  prominentNavItemIsActive,
  siteNavProminentBar,
} from "@/lib/site";
import { isExternalHref } from "@/lib/nav";
import { cn } from "@/lib/utils";

function NavSubMenuLink({
  href,
  className,
  children,
  onNavigate,
  role,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  role?: string;
  onNavigate?: () => void;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" role={role} className={className} onClick={onNavigate}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} role={role} className={className} onClick={onNavigate}>
      {children}
    </Link>
  );
}

function navLinkClass(active: boolean) {
  return cn(
    "whitespace-nowrap px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#4a362c] transition hover:text-[#7b1e1e] xl:px-2.5 xl:text-xs",
    active && "border-b-2 border-[#7b1e1e] text-[#7b1e1e]"
  );
}

function dropdownGroupClass(dropdownId?: "career" | "startup") {
  if (dropdownId === "career") return "group/career";
  if (dropdownId === "startup") return "group/startup";
  return "group/nav";
}

function dropdownPanelClass(dropdownId?: "career" | "startup") {
  const base =
    "invisible absolute left-0 top-full z-50 min-w-[min(22rem,calc(100vw-2rem))] max-w-[22rem] pt-1.5 opacity-0 transition-[opacity,visibility] duration-150";
  if (dropdownId === "career") {
    return cn(
      base,
      "group-hover/career:visible group-hover/career:opacity-100 group-focus-within/career:visible group-focus-within/career:opacity-100"
    );
  }
  if (dropdownId === "startup") {
    return cn(
      base,
      "group-hover/startup:visible group-hover/startup:opacity-100 group-focus-within/startup:visible group-focus-within/startup:opacity-100"
    );
  }
  return cn(
    base,
    "group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100"
  );
}

export function MainNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5d9c8] bg-[#fdf9f3]/95 shadow-sm backdrop-blur-md">
      <div className="container-luxury flex h-[4.25rem] items-center gap-4 md:h-[4.75rem]">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-[#2f2018]" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo/logo.png"
            alt="Hue Craft Village — Làng nghề truyền thống Huế"
            width={240}
            height={67}
            className="h-10 w-auto shrink-0 object-contain object-left sm:h-11 md:h-12"
            priority
            sizes="(max-width:768px) 200px, 240px"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-heading text-sm font-semibold tracking-[0.12em] text-[#7b1e1e] md:text-base">
              HUE CRAFT VILLAGE
            </span>
            <span className="block text-[11px] font-medium text-[#5c4033] md:text-xs">Làng nghề truyền thống Huế</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex lg:gap-0.5 xl:gap-1" aria-label="Menu chính">
          {siteNavProminentBar.map((item) => {
            const active = prominentNavItemIsActive(item, pathname);

            if (navItemHasChildren(item)) {
              return (
                <div key={item.href} className={cn("relative", dropdownGroupClass(item.dropdownId))}>
                  <div className="flex items-center gap-0.5">
                    <Link href={item.href} className={navLinkClass(active)}>
                      {item.label}
                    </Link>
                    <ChevronDown className="size-3 shrink-0 text-[#4a362c]/70" strokeWidth={2} aria-hidden />
                  </div>
                  <div role="menu" className={dropdownPanelClass(item.dropdownId)}>
                    <div className="rounded-md border border-[#e5d9c8] bg-[#fffaf6] py-1.5 shadow-lg">
                      {item.showOverviewInDropdown ? (
                        <Link
                          href={item.href}
                          role="menuitem"
                          className={cn(
                            "block border-b border-[#e5d9c8]/80 px-3 py-2 text-left text-[13px] font-semibold normal-case leading-snug tracking-normal hover:bg-[#f0e8dc]",
                            navSubLinkIsActive(item.href, pathname)
                              ? "bg-[#f0e8dc] text-[#7b1e1e]"
                              : "text-[#7b1e1e]"
                          )}
                        >
                          Tổng quan
                        </Link>
                      ) : null}
                      {item.children.map((sub) => {
                        const subActive = !isExternalHref(sub.href) && navSubLinkIsActive(sub.href, pathname);
                        return (
                          <NavSubMenuLink
                            key={sub.href}
                            href={sub.href}
                            role="menuitem"
                            className={cn(
                              "block px-3 py-2 text-left text-[13px] font-medium normal-case leading-snug tracking-normal hover:bg-[#f0e8dc] hover:text-[#7b1e1e]",
                              subActive ? "bg-[#efe5d8] text-[#7b1e1e]" : "text-[#4a362c]"
                            )}
                          >
                            {sub.label}
                            {isExternalHref(sub.href) ? " ↗" : null}
                          </NavSubMenuLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={navLinkClass(active)}>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/lang-nghe"
            className="ml-1 flex size-9 items-center justify-center rounded-full border border-[#dccdb8] text-[#5c4033] transition hover:border-[#7b1e1e] hover:text-[#7b1e1e]"
            aria-label="Tìm kiếm làng nghề"
          >
            <Search className="size-4" />
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link
            href="/lang-nghe"
            className="flex size-10 items-center justify-center rounded-full border border-[#dccdb8] text-[#5c4033] lg:hidden"
            aria-label="Tìm kiếm"
          >
            <Search className="size-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[#dccdb8] text-[#2f2018] lg:hidden"
            aria-expanded={open}
            aria-controls="main-nav-drawer"
            aria-label={open ? "Đóng menu" : "Mở menu"}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div id="main-nav-drawer" className="border-t border-[#e5d9c8] bg-[#fdf9f3] lg:hidden">
          <nav className="container-luxury flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-0.5 overflow-y-auto py-3" aria-label="Menu chính">
            {siteNavProminentBar.map((item) => {
              if (navItemHasChildren(item)) {
                const active = prominentNavItemIsActive(item, pathname);
                return (
                  <div key={item.href} className="flex flex-col gap-0.5">
                    <Link
                      href={item.href}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#4a362c] hover:bg-[#efe5d8]",
                        active && "bg-[#efe5d8] text-[#7b1e1e]"
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <div className="mb-1 flex flex-col gap-0.5 border-l-2 border-[#dccdb8]/70 py-0.5 pl-3 ml-3">
                      {item.showOverviewInDropdown ? (
                        <Link
                          href={item.href}
                          className="rounded-md py-1.5 pr-2 text-[13px] font-semibold normal-case tracking-normal text-[#7b1e1e] hover:underline"
                          onClick={() => setOpen(false)}
                        >
                          Tổng quan
                        </Link>
                      ) : null}
                      {item.children.map((sub) => {
                        const subActive = !isExternalHref(sub.href) && navSubLinkIsActive(sub.href, pathname);
                        return (
                          <NavSubMenuLink
                            key={sub.href}
                            href={sub.href}
                            className={cn(
                              "rounded-md py-1.5 pr-2 text-left text-[13px] font-medium normal-case leading-snug tracking-normal hover:bg-[#efe5d8] hover:text-[#2f2018]",
                              subActive ? "bg-[#efe5d8] font-semibold text-[#7b1e1e]" : "text-[#5c4033]"
                            )}
                            onNavigate={() => setOpen(false)}
                          >
                            {sub.label}
                            {isExternalHref(sub.href) ? " ↗" : null}
                          </NavSubMenuLink>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const active = prominentNavItemIsActive(item, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#4a362c] hover:bg-[#efe5d8]",
                    active && "bg-[#efe5d8] text-[#7b1e1e]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

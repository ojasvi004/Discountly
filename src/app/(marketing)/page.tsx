import React from "react";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { SiNetflix } from "react-icons/si";
import {
  FaGithub,
  FaAws,
  FaSpotify,
  FaGoodreads,
  FaPlaystation,
  FaYoutube,
  FaXbox,
} from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { formatCompactNumber } from "../../lib/formatters";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import { MoveRight } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="min-h-screen text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-800 via-slate-900 to-slate-950 flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight m-4">
          Maximize Sales,{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(to top, #818cf8, transparent)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Optimize Pricing{" "}
          </span>
          Across Regions!
        </h1>

        <p className="text-lg text-gray-300/50 font-medium lg:text-3xl max-w-screen-xl">
          Capture 85% of the untapped market with dynamic, location-based
          pricing strategies to ensure you’re always offering competitive rates.
        </p>
        <SignUpButton>
          <Button className="text-lg p-6  bg-background/0 rounded-full border-2 hover:bg-background/0 flex gap-2">
            Get started for free <MoveRight />
          </Button>
        </SignUpButton>
      </section>
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3xl text-center text-balance">
            Trusted by the top companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16 text-8xl">
            <SiNetflix />
            <FaGithub />
            <TiVendorMicrosoft />
            <FaAws />
            <FaSpotify />
            <FaGoodreads />
            <FaPlaystation />
            <FaXTwitter />
            <FaYoutube />
            <FaXbox className="md:max-xl:hidden" />
          </div>
        </div>
      </section>
      <section id="pricing" className=" px-8 py-16 bg-slate-950 text-white">
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself{" "}
          <span className="text-indigo-400">20x</span> over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
      <footer className="text-white pl-10 pr-10 bg-slate-950 pt-16 pb-8 flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between items-start">
        <Link href="/">
          <BrandLogo />
        </Link>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Help"
              links={[
                { label: "Discountly Discounts", href: "#" },
                { label: "Discount API", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Solutions"
              links={[
                { label: "Newsletter", href: "#" },
                { label: "SaaS Business", href: "#" },
                { label: "Online Courses", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Features"
              links={[{ label: "Discountly Discounts", href: "#" }]}
            />
            <FooterLinkGroup
              title="Tools"
              links={[
                { label: "Salary Converter", href: "#" },
                { label: "Coupon Generator", href: "#" },
                { label: "Stripe App", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Company"
              links={[
                { label: "Affiliate", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Terms of Service", href: "#" },
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            <FooterLinkGroup
              title="Integrations"
              links={[
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
            <FooterLinkGroup
              title="Tutorials"
              links={[
                { label: "Any Website", href: "#" },
                { label: "Lemon Squeezy", href: "#" },
                { label: "Gumroad", href: "#" },
                { label: "Stripe", href: "#" },
                { label: "Chargebee", href: "#" },
                { label: "Paddle", href: "#" },
              ]}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

function PricingCard({
  name,
  priceInRupees,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";

  return (
    <Card
      className={cn(
        "relative shadow-none rounded-3xl overflow-hidden transform transition-transform",
        isMostPopular
          ? "border-indigo-500 border-2 shadow-[0px_0px_90px_7px_rgba(78,_24,_191,_0.51)] z-10 scale-100 md:scale-105"
          : "border-none"
      )}
    >
      {isMostPopular && (
        <div className="bg-indigo-500 text-accent-foreground absolute py-1 px-10 -right-8 top-24 rotate-45 origin-top-right">
          Most popular
        </div>
      )}
      <CardHeader>
        <div className="text-indigo-500 font-semibold mb-8">{name}</div>
        <CardTitle className="text-xl font-bold">
          ₹{priceInRupees} /mo
        </CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits/mo
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button
            className="text-lg w-full rounded-lg"
            variant={isMostPopular ? "default" : "default"}
          >
            Get Started
          </Button>
        </SignUpButton>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <Feature className="font-bold">
          {maxNumberOfProducts}{" "}
          {maxNumberOfProducts === 1 ? "product" : "products"}
        </Feature>
        <Feature>Discountly discounts</Feature>
        {canAccessAnalytics && <Feature>Advanced analytics</Feature>}
        {canRemoveBranding && <Feature>Remove Easy Discountly branding</Feature>}
        {canCustomizeBanner && <Feature>Banner customization</Feature>}
      </CardFooter>
    </Card>
  );
  
}

function Feature({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <CheckIcon className="size-4 stroke-indigo-500 bg-indigo-500/25 rounded-full p-0.5" />
      <span>{children}</span>
    </div>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-indigo-400">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;

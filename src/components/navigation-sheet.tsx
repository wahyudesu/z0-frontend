import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { foods, travelMenuItems } from "@/config/navbar";

export const NavigationSheet = () => (
  <Sheet>
    <VisuallyHidden>
      <SheetTitle>Navigation Menu</SheetTitle>
    </VisuallyHidden>

    <SheetTrigger asChild>
      <Button size="icon" variant="outline">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent className="px-6 py-3">
      <Logo />

      <div className="mt-12 space-y-4 text-base">
        <div>
          <div className="font-bold">Food</div>
          <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
            {foods.map((foodItem) => {
              const Icon = foodItem.icon;
              return (
                <li key={foodItem.title}>
                  <Link className="flex items-center gap-2" href="#">
                    <Icon className="mr-2 h-5 w-5 text-muted-foreground" />
                    {foodItem.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className="font-bold">Travel</div>
          <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
            {travelMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <Link className="flex items-center gap-2" href="#">
                    <Icon className="mr-2 h-5 w-5 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Link className="inline-block" href="/changelog">
        Changelog
      </Link>
    </SheetContent>
  </Sheet>
);

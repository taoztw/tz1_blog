import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import { ModeToggle } from "@/components/modeToggle";
import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";
import { ChevronRight, Plus } from "lucide-react";
import UserItem from "./userItem";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navigation } from "@/lib/settings";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const Navbar = () => {
  return (
    <Drawer>
      <nav className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* 手机端*/}
                <DrawerTrigger asChild>
                  <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-accent hover:text-accent-foreground">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className="block size-6 group-data-[open]:hidden"
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className="hidden size-6 group-data-[open]:block"
                    />
                  </button>
                </DrawerTrigger>
              </div>
              <div className="flex shrink-0 items-center">
                <span>Tz Blog</span>
              </div>

              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {navigation.map((item) => (
                  <Button key={item.name} variant="ghost" asChild>
                    <a
                      href={item.href}
                      className={cn(item.current ? "bg-accent" : "font-medium")}
                    >
                      {item.name}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* 右边的内容 */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/80 hover:text-white rounded-full"
              >
                <Plus />
              </Button>

              <UserItem />
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
        </DrawerHeader>
        <div className="mx-auto w-full max-w-sm">
          <div className="space-y-5 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className="w-full justify-start text-base"
              >
                <a
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={cn(item.current ? "bg-accent" : "")}
                >
                  {item.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Navbar;

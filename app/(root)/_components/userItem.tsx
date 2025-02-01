import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const UserItem = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div role="button">
            <Avatar className="size-6">
              <AvatarImage src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ybmk2Q3pNY3dZTVBpUlk1cGVDbUVpdTY0eDgifQ" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          <div className="flex flex-col space-y-4 p-2">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              tztw4723@gmail.com
            </p>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="w-full cursor-pointer text-muted-foreground">
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserItem;

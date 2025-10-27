"use client";
import { Github, MoreVertical, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Stack",
      href: "/stack",
    },
  ];

  return (
    <div className="w-fit max-lg:w-[calc(95vw-16px)] max-lg:relative max-lg:mx-auto max-lg:mt-2 max-lg:justify-between z-50 bg-black h-[50px] fixed lg:top-[calc(6vh+8px)] lg:right-[calc(5vw+8px)] rounded-3xl flex items-center p-1.5">
      {/*More*/}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="size-[38px] bg-[#161616] ring-0! cursor-pointer hover:bg-[#161616]/80 duration-200 transition-all text-muted-foreground hover:text-primary rounded-full flex items-center justify-center">
            <MoreVertical className="size-4.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-[#161616] rounded-2xl max-lg:ml-[calc(2.5vw+8px)]">
          <DropdownMenuLabel className="font-medium">
            Connect with me
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link
            href={"https://www.linkedin.com/in/zakary-fofana/"}
            target="_blank"
          >
            <DropdownMenuItem className="rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              Follow on Linkedin
            </DropdownMenuItem>
          </Link>
          <Link href={"https://github.com/zakafz"} target="_blank">
            <DropdownMenuItem className="rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              Follow on Github
            </DropdownMenuItem>
          </Link>
          <Link href={"mailto:zakaryfofana@proton.me"} target="_blank">
            <DropdownMenuItem className="rounded-xl">
              <Send className="size-4" /> Via email
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>

      {/*Links*/}
      <div className="px-4 gap-4 flex font-medium text-muted-foreground text-sm">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-primary duration-200"
            style={{ color: pathname === link.href ? "#fff" : "" }}
          >
            {link.name}
          </a>
        ))}
      </div>
      {/*Avatar*/}
      <Avatar className="size-[38px] aspect-square">
        <AvatarImage
          src="https://media.licdn.com/dms/image/v2/D5603AQHGS9XTK-yNJg/profile-displayphoto-scale_400_400/B56ZoRmvtJG4Ag-/0/1761231961677?e=1762992000&v=beta&t=H-91WnCouEFvdaZh-Z82HMaNN3lzKjNpKQ4NV2yduS8"
          alt="@zakaryfofana"
        />
        <AvatarFallback>ZF</AvatarFallback>
      </Avatar>
    </div>
  );
}

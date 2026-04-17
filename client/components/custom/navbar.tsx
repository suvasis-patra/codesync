import { CodeXml, LogOut, Share2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-3 md:px-6 border-b border-b-gray-800">
      <div className="w-full flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="h-8 w-8 bg-primary flex items-center justify-center rounded-lg">
              <CodeXml className="text-black" />
            </span>
            <span className="font-bold text-primary text-xl font-heading">
              <span className="text-white">Code</span>Sync
            </span>
          </div>
        </Link>

        <div className="gap-4 flex items-center">
          <Button
            className="text-white bg-primary font-mono font-semibold capitalize cursor-pointer 
            transition-all duration-200 
            hover:bg-primary/90 hover:scale-105 
            active:scale-95"
          >
            <Share2 />
            invite
          </Button>

          <Button
            className="text-white bg-rose-500 font-mono font-semibold capitalize cursor-pointer 
            transition-all duration-200 
            hover:bg-rose-600 hover:scale-105 
            active:scale-95"
          >
            <LogOut />
            leave
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

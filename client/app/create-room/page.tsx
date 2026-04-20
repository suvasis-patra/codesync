"use client";

import { RoomJoiningForm } from "@/components/custom/join-room-form";
import { RoomCreationForm } from "@/components/custom/room-creating-form";
import { Button } from "@/components/ui/button";
import { CREATE_ROOM_TABS } from "@/lib/utils";
import { BadgePlus, LogOut } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const CreateRoom = () => {
  const [activeTab, setActiveTab] = useState<CREATE_ROOM_TABS>("CREATE_ROOM");

  const isCreateTab = activeTab === "CREATE_ROOM";

  return (
    <div className="flex flex-col items-center w-full mt-10">
      {/* Heading */}
      <div className="text-center">
        <h2 className="font-heading text-3xl font-bold">
          Ready to Collaborate?
        </h2>

        <p className="font-mono font-semibold max-w-md mt-5 text-muted-foreground">
          Setup your workspace or join an existing one in seconds.
        </p>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="min-w-100 flex p-0.5 rounded-md bg-card border">
          <Button
            onClick={() => setActiveTab("CREATE_ROOM")}
            className={cn(
              "flex-1 font-mono cursor-pointer",
              isCreateTab
                ? "bg-primary text-primary-foreground"
                : "bg-transparent",
            )}
          >
            <BadgePlus />
            Create Room
          </Button>

          <Button
            onClick={() => setActiveTab("JOIN_ROOM")}
            className={cn(
              "flex-1 font-mono cursor-pointer",
              !isCreateTab
                ? "bg-primary text-primary-foreground"
                : "bg-transparent",
            )}
          >
            <LogOut />
            Join Room
          </Button>
        </div>
      </div>

      {/* Forms */}
      <div className="mt-1 w-full flex justify-center max-w-100">
        {isCreateTab ? <RoomCreationForm /> : <RoomJoiningForm />}
      </div>
    </div>
  );
};

export default CreateRoom;

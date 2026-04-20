import { z } from "zod";

export const ZCreateNewRoom = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

  roomName: z
    .string()
    .min(3, "Room name must be at least 3 characters")
    .max(30, "Room name cannot exceed 30 characters"),

  primaryLanguage: z
    .string()
    .min(1, "Please enter a primary programming language"),
});

export const ZJoinRoom = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

  roomId: z
    .string()
    .min(5, "Room ID must be at least 5 characters")
    .max(50, "Invalid Room ID"),
});

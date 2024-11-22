import { createContext } from "react";

export interface RoleContextType {
  role: "Admin" | "User" | null;
  setRole: React.Dispatch<React.SetStateAction<"Admin" | "User" | null>>;
}

const RoleContext = createContext<RoleContextType | null>(null);

export default RoleContext;

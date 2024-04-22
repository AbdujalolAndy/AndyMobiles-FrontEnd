import io from "socket.io-client";
import { serverApi } from "../../../lib/config";
import { createContext } from "react";

export const socket = io(serverApi);
export const socketContext = createContext();

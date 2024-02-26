import { useContext } from "react";
import { StateContext } from "./StateContext";

export const useGlobalState = () => useContext(StateContext)
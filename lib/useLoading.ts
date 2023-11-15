import { useState } from "react";
import isClientReady from "./isClientReady";

export default function useLoading(): boolean {
    const [state, setState] = useState(true);

    setTimeout(() => {
        setState(false);
    }, 1000);

    return state;
}

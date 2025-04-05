import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            retry:1,
            refetchOnWindowFocus:false,
            staleTime:1000 * 60 * 1
        },
        mutations:{
            retry:1
        }
    }
});
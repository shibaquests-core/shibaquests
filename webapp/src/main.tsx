import React from "react";
import ReactDOM from "react-dom/client";
import { Web3ModalProvider } from "./providers/Web3ModalProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { routes } from "./routes";
import "./index.css";

// Providers
import { ContractContextProvider } from "./providers/ContractContextProvider.tsx";
import { ToastifyProvider } from "./providers/ToastifyProvider";

// Consts

// Pages

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ModalProvider>
      <ContractContextProvider>
        <ToastifyProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ToastifyProvider>
      </ContractContextProvider>
    </Web3ModalProvider>
  </React.StrictMode>,
);

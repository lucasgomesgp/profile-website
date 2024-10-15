"use client";

import { NotificationsProvider, setUpNotifications } from "reapop";

import { ReactNode } from "react";

setUpNotifications({
  defaultProps: {
    position: "top-right",
    dismissible: true,
    dismissAfter: 5000,
    showDismissButton: true,
  },
});
export function ToastProvider({ children }: { children: ReactNode }) {
  return <NotificationsProvider>{children}</NotificationsProvider>;
}

import NotificationsSystem, { useNotifications, wyboTheme } from "reapop";

export function Notification() {
    const { notifications, dismissNotification } = useNotifications();
    return (
        <NotificationsSystem
            notifications={notifications}
            dismissNotification={dismissNotification}
            theme={wyboTheme}
        />
    );
}
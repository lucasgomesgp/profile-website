export async function sendContactEmail({ name, email, message }: { name: string, email: string, message: string }) {
    try {
        await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({ name, email, message }),
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
            }
        })
    } catch {
        throw new Error("Error on send your email!");
    }
}
export function removeHashFromUrl() {
    if (window.location.hash) {
        const url = window.location.href.split("#")[0];
        window.history.replaceState(null, "", url)
    }
}
export function formatDate(dateString) {
    const date = new Date(dateString);
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear().toString();
    return `${d}.${m}.${y}`;
}

// utils/generateProductId.ts
export function generateProductId(): string {
    // Generate a unique product ID using a timestamp and a random number
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000); // Adjust the range as needed

    return `${timestamp}${random}`;
}

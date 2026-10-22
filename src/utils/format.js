export const money = (value) => `Rs. ${Number(value).toLocaleString('en-PK')}`

export function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

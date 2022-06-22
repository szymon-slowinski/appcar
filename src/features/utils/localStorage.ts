export function getFromStorage<T>(key: string): T | undefined {
        const value = window.localStorage.getItem(key)
        return value ?? JSON.parse(value || "{}")
}

export const setToStorage = (key: string,value: string | object) => {
        return window.localStorage.setItem(
            key,
            typeof value !== "string" ? JSON.stringify(value) : value
        )
}
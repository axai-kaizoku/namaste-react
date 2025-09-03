import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function jsonStringify(data) {
  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
    </>
  )
}

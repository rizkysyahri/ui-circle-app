const LOCALE = "id-ID";

export function formatDate(
  date?: Date | string | number,
  defaultValue: string = "",
  options: Intl.DateTimeFormatOptions = {}
) {
  if (!date) {
    return defaultValue;
  }

  return new Date(date).toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  });
}

export function formatTime(date: Date | string | number) {
  return new Date(date).toLocaleTimeString(LOCALE, {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h12",
  });
}

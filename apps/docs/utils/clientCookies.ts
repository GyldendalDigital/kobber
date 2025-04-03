export const setCookie = (name: string, value: string) => {
  document.cookie = name + "=" + value + ";Path=/"
}

export const getCookieValue = (name: string) =>
  document.cookie
    .split(";")
    .find((row) => row.startsWith(name))
    ?.split("=")[1]

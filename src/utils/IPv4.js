export const REGEX_IPV4 = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

export function ipv4(str) {
  return REGEX_IPV4.test(str)
}
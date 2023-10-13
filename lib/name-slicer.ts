// This function slices two letters from username, and returns UPPER letters

export function nameSlicer(name: string | undefined): string | undefined {
  if (name === undefined) {
    return undefined;
  }
  return name.slice(0, 2).toUpperCase();
}

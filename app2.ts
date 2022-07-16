export function join(tokens: string | string[], glue?: string): string {
  // TODO:
  if (!Array.isArray(tokens)) {
    return tokens;
  }
  return tokens.join(glue);
}

console.log(join(["Hello", "World"], " espacio "));

export * from "./local-storage";
export * from "./routes-paths";

export function setImage(username: string) {
  let src = `https://api.dicebear.com/7.x/identicon/svg?seed=${username}`;
  return src;
}

import { IColumn } from "@/interfaces";

export * from "./local-storage";
export * from "./routes-paths";

export function setImage(username: string) {
  let src = `https://api.dicebear.com/9.x/initials/svg?seed=${username}`;
  return src;
}

export function getColumnOptions(columns?: IColumn[]) {
  let options: { id: number | string; value: number | string }[] = [];

  if (!columns) return options;

  for (let column of columns) {
    options.push({ id: column.id, value: column.title });
  }

  return options;
}

export function separateResource(resource: Record<any, any>[]) {
  let existingResource = [];
  let newResource = [];

  for (let item of resource) {
    if (item.id) {
      existingResource.push(item);
    } else {
      newResource.push(item);
    }
  }

  return [newResource, existingResource];
}

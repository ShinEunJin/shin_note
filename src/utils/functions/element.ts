export const createElement = (
  tag: string,
  attributes: object | null = {},
  ...children: (Element | string)[]
): Element => {
  if (!tag) {
    throw Error("createElement need tag");
  }

  const element = document.createElement(tag);

  if (typeof attributes !== "object" || Array.isArray(attributes)) {
    throw Error("attributes must be object only.");
  }

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
  }

  if (children) {
    for (const child of children) {
      element.append(child);
    }
  }

  return element;
};

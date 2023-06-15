export const createElement = (tag, attributes = {}, ...children) => {
  if (!tag || typeof tag !== "string") {
    throw Error("tag is required and type must be string.");
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

  if (children && children.length > 0) {
    for (const child of children) {
      if (Array.isArray(child)) {
        throw Error(
          "Don't use array in children parameter. Use spread operator"
        );
      } else {
        element.append(child);
      }
    }
  }

  return element;
};

export const getStaticRoute = (name: string) => {
  switch (name) {
    default:
      return false;
  }
};

export const getDynamicRoute = (name: string) => {
  switch (name) {
    case "posts":
      return "posts";
    default:
      return false;
  }
};

export const getModuleName = (type: string) => {
  switch (type) {
    case "menu":
      return "Menu";
    case "misson":
      return "Mission Section";

    default:
      return null;
  }
};

export const getTypeTitles = (types: string[]) => {
  const typeNames = types.map((type: string) => {
    switch (type) {
      case "customImage":
        return "Image";
      case "bodyContent":
        return "Body";
      default:
        return "";
    }
  });

  return typeNames.join(" + ");
};

export const isPreviewMode = process.env.NEXT_PUBLIC_PREVIEW_MODE;

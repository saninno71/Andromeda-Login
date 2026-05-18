import { lazy } from "react";

const pages = import.meta.glob("../pages/*.jsx");

export function getLazyPage(route) {
  const path = `../pages/${route}.jsx`;

  const importer = pages[path];

  if (!importer) {
    return null;
  }

  return lazy(importer);
}
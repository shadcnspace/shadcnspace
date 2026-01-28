import { codeToHtml as shikiCodeToHtml } from "shiki";

export const codeToHtml = async (code: string) => {
  return shikiCodeToHtml(code, {
    lang: "tsx",
    themes: {
      light: "github-light",
      dark: "github-dark-default",
    },
    transformers: [
      {
        pre(node) {
          this.addClassToHast(node, "with-line-numbers");
        },
      },
    ],
    tabindex: false,
  });
};

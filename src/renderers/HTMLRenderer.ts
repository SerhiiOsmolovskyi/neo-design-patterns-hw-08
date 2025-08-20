import { BaseRenderer } from "./BaseRenderer";

export class HTMLRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `<h${level}>${text}</h${level}>`;
  }

  renderParagraph(text: string): string {
    return `<p>${text}</p>`;
  }

  renderList(items: string[]): string {
    const listItems = items.map(item => `<li>${item}</li>`).join("");
    return `<ul>${listItems}</ul>`;
  }

  wrapDocument(content: string): string {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
${content}
</body>
</html>`;
  }
}

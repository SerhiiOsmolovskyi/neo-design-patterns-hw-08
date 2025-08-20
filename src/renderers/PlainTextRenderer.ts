import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `${"=".repeat(level)} ${text}`;
  }

  renderParagraph(text: string): string {
    return text + "\n";
  }

  renderList(items: string[]): string {
    return items.map((item, i) => `${i + 1}. ${item}`).join("\n");
  }
}

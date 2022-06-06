import { marked } from "marked";
import metadataParser from "markdown-yaml-metadata-parser";
import fs from "fs";

export async function get({ params }) {
    const { name } = params;
    const fileContents = fs.readFileSync(`./posts/${name}.md`, {
        encoding: "utf8",
    });
    const { metadata, content } = metadataParser(fileContents);
    const htmlContent = marked(content);
    return {
        body: { metadata, htmlContent },
    };
}

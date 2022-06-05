import { marked } from "marked";
import parseMD from "parse-md";
import fs from "fs";

export async function get({ params }) {
    const { name } = params;
    const fileContents = fs.readFileSync(`src/posts/${name}.md`, {
        encoding: "utf8",
    });
    const { metadata, content } = parseMD(fileContents);
    const htmlContent = marked(content);
    return {
        body: { metadata, htmlContent },
    };
}

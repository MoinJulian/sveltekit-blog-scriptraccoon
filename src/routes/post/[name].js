import { marked } from "marked";
import fm from "front-matter";
import fs from "fs";

export async function get({ params }) {
    const { name } = params;
    const fileContents = fs.readFileSync(
        `./posts/${name}.md`,
        "utf8"
    );
    const { attributes, body } = fm(fileContents);
    const htmlContent = marked(body);
    return {
        body: { attributes, htmlContent },
    };
}

import fs from "fs";
import fm from "front-matter";

export async function get() {
    const postList = JSON.stringify(
        fs
            .readdirSync(`./posts`)
            .map((fileName) => {
                const fileContents = fs.readFileSync(
                    `./posts/${fileName}`,
                    "utf8"
                );
                const { attributes } = fm(fileContents);
                return {
                    ...attributes,
                    fileName: fileName.replace(".md", ""),
                };
            })
            .sort((p, q) => (p.date < q.date ? +1 : -1))
    );

    return { body: { postList } };
}

import fs from "fs";
import metadataParser from "markdown-yaml-metadata-parser";

export async function get() {
    const metadatas = JSON.stringify(
        fs
            .readdirSync(`./posts`)
            .map((fileName) => {
                const fileContents = fs.readFileSync(
                    `./posts/${fileName}`,
                    {
                        encoding: "utf8",
                    }
                );
                const { metadata } = metadataParser(fileContents);
                return {
                    ...metadata,
                    fileName: fileName.replace(".md", ""),
                };
            })
            .sort((p, q) => (p.date < q.date ? +1 : -1))
    );

    return { body: { metadatas } };
}

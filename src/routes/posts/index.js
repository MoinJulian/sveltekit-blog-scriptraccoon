import fs from "fs";
import parseMD from "parse-md";

export async function get() {
    const metadatas = JSON.stringify(
        fs
            .readdirSync(`src/posts`)
            .map((fileName) => {
                const fileContents = fs.readFileSync(
                    `src/posts/${fileName}`,
                    {
                        encoding: "utf8",
                    }
                );
                const { metadata } = parseMD(fileContents);
                return {
                    ...metadata,
                    fileName: fileName.replace(".md", ""),
                };
            })
            .sort((p, q) => (p.date < q.date ? +1 : -1))
    );

    return { body: { metadatas } };
}

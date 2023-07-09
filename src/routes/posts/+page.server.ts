import fs from "fs";
import fm from "front-matter";

export const load = async () => {
	const postList = fs
		.readdirSync(`./posts`)
		.map((fileName) => {
			const fileContents = fs.readFileSync(
				`./posts/${fileName}`,
				"utf8"
			);
			const { attributes } = fm<metadata>(fileContents);
			return {
				...attributes,
				fileName: fileName.replace(".md", ""),
			};
		})
		.sort((p, q) => q.date.getTime() - p.date.getTime());

	return { postList };
};

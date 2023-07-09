import { marked } from "marked";
import fm from "front-matter";
import fs from "fs";

export const load = async (event) => {
	const { name } = event.params;
	const fileContents = fs.readFileSync(
		`./posts/${name}.md`,
		"utf8"
	);
	const { attributes, body } = fm<metadata>(fileContents);
	const htmlContent = marked(body);
	return {
		attributes,
		htmlContent,
	};
};

import { connection } from "../database.js";
import { v4 as uuid } from "uuid";

export async function postShort(req, res) {
	const shortUrl = uuid().split("-")[0];
	const { url } = req.body;

	await connection.query(
		`INSERT INTO shortly ("shortUrl", url) VALUES ($1,$2)`,
		[shortUrl, url]
	);

	const retorno = {
		shortUrl: shortUrl,
	};
	res.status(201).send(retorno);
}

export async function getShorts(req, res) {
	try {
		const { shortUrl } = req.params;

		const validShortUrl = await connection.query(
			`SELECT * FROM shortly WHERE "shortUrl"=$1`,
			[shortUrl]
		);

		if (validShortUrl.rows.length === 0) return res.sendStatus(404);

		const shorts = await connection.query(`SELECT * FROM shortly`);
		res.send(shorts.rows);
	} catch (err) {
		res.sendStatus(500);
	}
}

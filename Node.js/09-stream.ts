import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const stream = createReadStream("bigfile.html");

// let total = 0;

// stream.on('data', (chunk) => {
//   total++;
//   console.log(total);
// });

// stream.on('end', () => {
//   console.log('end');
// });

// stream.on('error', (error) => {
//   console.error(error);
// });

// avec async iterator
// try {
//   let total = 0;
//   for await (const _chunk of stream) {
//     total++;
//     console.log(total);
//   }
// } catch (error) {
//   console.error(error);
// } finally {
//   console.log("end");
// }

// 4 types de stream
// - readable (lecture)
// - writable (écriture)
// - duplex (lecture et écriture)
// - transform (lecture -> transformation -> écriture)

// combiner des streams avec pipe
const writable = createWriteStream('bigfile.html.copy');

// ressemble au pipe Unix : cat bigfile.html > bigfile.html.copy
stream.pipe(writable);


const writableGzip = createWriteStream('bigfile.html.gz');
// ressemble au pipe Unix : cat bigfile.html | gzip > bigfile.html.gz
stream.pipe(createGzip()).pipe(writableGzip);

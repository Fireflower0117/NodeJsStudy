/* stream모듈의 pipeline 메서드를 사용해 여러개의 파이프를 연결하는 방법이 있습니다. */

import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipeline(
    fs.createReadStream('./2_1_4_readme.txt')
   ,zlib.createGzip()
   ,fs.createWriteStream('./2_2_2_readme.txt.gz')
);

/* {projecthome}\public\javascripts\chap03\3_6_filesystem> node .\2_2_2_pipeline.mjs
    2_2_2_readme.txt.gz파일이 생성됩니다. 압축된 파일은 읽기가 힘듭니다.
**/

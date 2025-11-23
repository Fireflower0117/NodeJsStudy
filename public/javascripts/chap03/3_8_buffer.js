// JavaScript는 Unicode에슨 적합하지만 Binary Data는 잘다루지 못한다.
// TCP스트림이나 FileStream은 옥탯스트림(octet-stream)을 다룰수있어야한다.
// 옥텟(octet)은 8비트로 구성된 데이터 단위를 칭한다. (1Byte)
// 결국 octet-stream은 byte단위의 Data를 흘러보낼떄 사용하는  단위이다.
// ex) Java 언어 :  ResponseEntity.header("Content-Type", "application/octet-stream")
//                 HttpServletResponse.setContentType("application/octet-stream");

// 버퍼를 생성하려면 new Buffer()를 사용한다.  Buffer은 Global객체이므로 rquire없이 바로 사용가능하다.
let buf = new Buffer(256);

let len = buf.write('Hello World 오픈노트' , 0);
console.log( len + " Bytes : "+buf.toString('utf8', 0 , len));

// 객체가 Buffer인지 여부를 판단하기위해 Buffer.isBuffer(Object); 를 활용한다.
let isBuf = Buffer.isBuffer(buf);
let isBufArr = Buffer.isBuffer([])
console.log('isBuf : %s' , isBuf);
console.log('isBufArr : %s' , isBufArr);
let rest = {
    "host": "localhost",
    "port": 3030,
    "public": "../public/",
    "paginate": {
      "default": 10,
      "max": 50
    },
    "mongodb": "mongodb://localhost:27017/api"
  }
  
//   console.log(rest.public);
for (let x in rest){
    console.log(rest[x]);
}
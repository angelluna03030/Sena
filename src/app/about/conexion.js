const { MongoClient } = require("mongodb");

// URL de conexión a tu base de datos MongoDB (asegúrate de reemplazar <username>, <password>, <cluster-url> y <database-name>)
const uri = "mongodb://localhost:27017/sesion";

// Crear un nuevo cliente de MongoDB
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Función para conectar y realizar operaciones en la base de datos
async function run() {
  try {
    // Conectar al servidor de MongoDB
    await client.connect();
    console.log("Conectado a la base de datos");

    // Seleccionar la base de datos "sesion" (asegúrate de que coincida con el nombre en la URL de conexión)
    const database = client.db("sesion");
    console.log("Base de datos seleccionada: sesion");

    // Aquí puedes realizar operaciones en la base de datos, por ejemplo:
    // const collection = database.collection('miColeccion');
    // ...
  } finally {
    // Asegurarse de cerrar la conexión cuando hayas terminado
    await client.close();
    console.log("Conexión cerrada");
  }
}
export default run;

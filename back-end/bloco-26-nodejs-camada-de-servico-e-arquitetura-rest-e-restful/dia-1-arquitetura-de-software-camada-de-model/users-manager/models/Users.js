const { ObjectId } = require('mongodb')
const connection = require('./connection');

// Função que remove dos documentos da collection 'users', os campos indesejados
function formatUser(document) {
  const {
    _id,
    password,
    ...user
  } = document;

  const formattedResult = {
    id: _id,
    ...user,
  };

  return formattedResult;
}

function isValid({ firstName, lastName, email, password }) {
  const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
  const fields = [firstName, lastName, email, password];

  if (fields.includes(undefined) ||
    fields.includes(null) ||
    fields.includes('')) return false;

  return PASSWORD_REGEX.test(password);
}

function create({ firstName, lastName, email, password }) {
  return connection().then((db) => db
    .collection('users')
    .insertOne({ firstName, lastName, email, password }))
    .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

function findAll() {
  return connection()
    .then((db) => db.collection('users').find().toArray())
    .then((results) => results.map(formatUser));
}


async function findById(id) {
  // Verificamos que o id que recebemos é válido
  if (!ObjectId.isValid(id)) {
      // Caso não seja um id válido, retornamos `null`
      return null;
  }

  // Buscamos o usuário no banco
  const user = await connection()
      // É importante lembrar de converter o parâmetro `id` para um `ObjectId` do MongoDB
      // utilizando `new ObjectId(id)`.
      .then((db) => db.collection('users').findOne(new ObjectId(id)));

  // Se nenhum usuário for encontrado, retornamos `null`
  if (!user) return null;

  // Caso encontremos um usuário retornamos seus dados formatados
  return formatUser(user);
}

async function updateUser(id, { firstName, lastName, email, password }) {
  // Verificamos se o id é válido. Se não for, retornamos `null`
  if (!ObjectId.isValid(id)) return null;

  // Atualizamos o documento no banco utilizando os novos dados
  const updatedUser = await connection()
    .then((db) => {
      const userId = new ObjectId(id);
      const newData = { firstName, lastName, email, password };

      return db.collection('users')
        .findOneAndUpdate({ _id: userId }, { $set: newData }, { returnOriginal: false })
        .then((result) => result.value);
    });

  if (!updatedUser) return null;

  return formatUser(updatedUser);
}

module.exports = {
    isValid,
    create,
    findAll,
    findById,
    updateUser,
};

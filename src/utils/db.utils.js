const { isValidObjectId, ObjectId } = require('mongoose');

const parseMongoId = (id) => {
  const checkId = isValidObjectId(id) ? id : ObjectId(id);
  return checkId;
};

module.exports = { parseMongoId };

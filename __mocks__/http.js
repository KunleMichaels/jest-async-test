const fetchData = () => {
  console.log('Fetching Mock data...');
  return Promise.resolve({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })
};

exports.fetchData = fetchData;

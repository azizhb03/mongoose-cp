const Person = require("./model");

module.exports.createOne = async function (req, res) {
  try {
    const result = await Person.create(req.body);

    res.status(201).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.createMany = async function (req, res) {
  try {
    const result = await Person.create(req.body);

    res.status(201).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.findByName = async function (req, res) {
  try {
    console.log(req.params);
    const result = await Person.find({ name: req.params.name });

    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports.findOne = async function (req, res) {
  try {
    const result = await Person.findOne({
      favoriteFoods: { $in: [req.params.favoriteFoods] },
    });

    // await Person.find({ favoriteFoods: req.params.favoriteFoods })

    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.findById = async function (req, res) {
  try {
    console.log(req.params);
    const result = await Person.findById(req.params.id);

    res.status(200).json({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports.findByIdAndUpdate = async function (req, res) {
  try {
    const person = await Person.findOne({ _id: req.params.id });

    console.log(req.body);

    console.log(person);
    person.favoriteFoods.push(req.body.food);
    person.save();

    res.status(200).json({ message: "success", data: person });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports.updateAgeByName = async function (req, res) {
  try {
    const person = await Person.findOneAndUpdate({
      name: req.params.name,
      age: req.body.age,
    });
    res.status(200).json({ message: "success", data: person });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};


module.exports.findByIdAndRemove = async function (req, res) {
    try {
      const person = await Person.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "success", data: person });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  












module.exports.deleteMany = async function (req, res) {
  try {
    const result = await Person.deleteMany({ name: req.params.name });
    res.status(201).json({ message: "success", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

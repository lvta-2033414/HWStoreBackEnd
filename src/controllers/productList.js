const {
  CpuAmdModel,
  CpuIntelModel,
  MainboardAmdModel,
  MainboardIntelModel,
  RamModel,
  DiskModel,
  PsuModel,
  CaseModel,
  KeyboardMouseModel,
  DisplayModel,
} = require("../models/productCategory");

const getProductList = async (req, res) => {
  switch (req.params.category) {
    case "cpu":
      const cpuIntel = await CpuIntelModel.find({});
      const cpuAMD = await CpuAmdModel.find({});
      res.json({ cpuIntel, cpuAMD });
      res.end();
      break;

    case "main-board":
      const mainAMD = await MainboardAmdModel.find({});
      const mainINTEL = await MainboardIntelModel.find({});
      res.json({ mainINTEL, mainAMD });
      res.end();
      break;

    case "ram":
      const ram = await RamModel.find({});
      res.json({ ram });
      res.end();
      break;

    case "hard-drive":
      const hardDrive = await DiskModel.find({});
      res.json({ hardDrive });
      break;

    case "psu":
      const psu = await PsuModel.find({});
      res.json({ psu });
      res.end();
      break;

    case "case":
      const Case = await CaseModel.find({});
      res.json({ Case });
      res.end();
      break;

    case "keyboard-mouse":
      const keyboardMouse = await KeyboardMouseModel.find({});
      res.json({ keyboardMouse });
      res.end();
      break;

    case "display":
      const display = await DisplayModel.find({});
      res.json({ display });
      res.end();
      break;

    default:
      res.status(400).send("Bad Request");
  }
};
module.exports = { getProductList };

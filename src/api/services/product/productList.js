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
} = require('../../models/productCategory');

module.exports = async (category) => {
  let result;
  switch (category) {
    case 'cpu':
      const cpuIntel = await CpuIntelModel.find({});
      const cpuAMD = await CpuAmdModel.find({});
      result = { cpuIntel, cpuAMD };
      break;

    case 'main-board':
      const mainAMD = await MainboardAmdModel.find({});
      const mainINTEL = await MainboardIntelModel.find({});
      result = { mainINTEL, mainAMD };
      break;

    case 'ram':
      const ram = await RamModel.find({});
      result = { ram };
      break;

    case 'hard-drive':
      const hardDrive = await DiskModel.find({});
      res.json({ hardDrive });
      break;

    case 'psu':
      const psu = await PsuModel.find({});
      result = { psu };
      break;

    case 'case':
      const Case = await CaseModel.find({});
      result = { Case };
      break;

    case 'keyboard-mouse':
      const keyboardMouse = await KeyboardMouseModel.find({});
      result = { keyboardMouse };
      break;

    case 'display':
      const display = await DisplayModel.find({});
      result = { display };
      break;

    default:
      result = { msg: 'Bad Request' };
  }
  return result;
};

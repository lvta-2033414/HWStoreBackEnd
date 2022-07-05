const {
  CpuModel,
  MainboardAmdModel,
  MainboardIntelModel,
  RamModel,
  VgaModel,
  DiskModel,
  PsuModel,
  CaseModel,
  KeyboardMouseModel,
  DisplayModel,
} = require('../../models/productCategory');

const tryAndCatch = async (model) => {
  let result;
  try {
    result = await model.find({}).sort('price');
  } catch (err) {
    result = { msg: err };
  }
  return result;
};

module.exports = async (category) => {
  let result;
  switch (category) {
    case 'cpu':
      const cpu = await tryAndCatch(CpuModel);
      result = cpu;
      break;

    case 'main-board':
      const mainAMD = await tryAndCatch(MainboardAmdModel);
      const mainINTEL = await tryAndCatch(MainboardIntelModel);
      const main = [].concat(mainINTEL, mainAMD);
      result = main;
      break;

    case 'ram':
      const ram = await tryAndCatch(RamModel);
      result = ram;
      break;

    case 'vga':
      const vga = await tryAndCatch(VgaModel);
      result = vga;
      break;

    case 'hard-drive':
      const hardDrive = await tryAndCatch(DiskModel);
      result = hardDrive;
      break;

    case 'psu':
      const psu = await tryAndCatch(PsuModel);
      result = psu;
      break;

    case 'case':
      const Case = await tryAndCatch(CaseModel);
      result = Case;
      break;

    case 'keyboard-mouse':
      const keyboardMouse = await tryAndCatch(KeyboardMouseModel);
      result = keyboardMouse;
      break;

    case 'display':
      const display = await tryAndCatch(DisplayModel);
      result = display;
      break;

    default:
      result = { msg: 'Bad Request' };
  }
  return result;
};

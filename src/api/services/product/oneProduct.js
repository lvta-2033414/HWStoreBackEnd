const {
  CpuModel,
  MainboardModel,
  RamModel,
  VgaModel,
  DiskModel,
  PsuModel,
  CaseModel,
  KeyboardMouseModel,
  DisplayModel,
} = require('../../models/productCategory');

const tryAndCatch = async (model, id) => {
  let result;
  console.log(id);
  console.log(model);
  try {
    result = await model.findById(id);
  } catch (err) {
    result = { msg: err };
  }
  return result;
};

module.exports = async (category, id) => {
  let result;
  switch (category) {
    case 'cpu':
      const cpu = await tryAndCatch(CpuModel, id);
      result = cpu;
      break;

    case 'main':
      const main = await tryAndCatch(MainboardModel, id);
      result = main;
      break;

    case 'ram':
      const ram = await tryAndCatch(RamModel, id);
      result = ram;
      break;

    case 'vga':
      const vga = await tryAndCatch(VgaModel, id);
      result = vga;
      break;

    case 'disk':
      const hardDrive = await tryAndCatch(DiskModel, id);
      result = hardDrive;
      break;

    case 'psu':
      const psu = await tryAndCatch(PsuModel, id);
      result = psu;
      break;

    case 'case':
      const Case = await tryAndCatch(CaseModel, id);
      result = Case;
      break;

    case 'keyboardmouse':
      const keyboardMouse = await tryAndCatch(KeyboardMouseModel, id);
      result = keyboardMouse;
      break;

    case 'display':
      const display = await tryAndCatch(DisplayModel, id);
      result = display;
      break;

    default:
      result = { msg: 'Bad Request' };
  }
  return result;
};

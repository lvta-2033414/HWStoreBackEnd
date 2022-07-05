const mongoose = require('mongoose');
const { Schema } = mongoose;

// const CpuIntelSchema = new Schema({}, { collection: 'cpuINTEL' });
// const CpuIntelModel = mongoose.model('cpuINTEL', CpuIntelSchema);

const CpuSchema = new Schema({}, { collection: 'cpu' });
const CpuModel = mongoose.model('cpu', CpuSchema);

// const CpuAmdSchema = new Schema({}, { collection: 'cpuAMD' });
// const CpuAmdModel = mongoose.model('cpuAMD', CpuAmdSchema);

const MainboardIntelSchema = new Schema({}, { collection: 'mainINTEL' });
const MainboardIntelModel = mongoose.model('mainINTEL', MainboardIntelSchema);

const MainboardAmdSchema = new Schema({}, { collection: 'mainAMD' });
const MainboardAmdModel = mongoose.model('mainAMD', MainboardAmdSchema);

const RamSchema = new Schema({}, { collection: 'ram' });
const RamModel = mongoose.model('ram', RamSchema);

const VgaSchema = new Schema({}, { collection: 'vga' });
const VgaModel = mongoose.model('vga', VgaSchema);

const DiskSchema = new Schema({}, { collection: 'disk' });
const DiskModel = mongoose.model('disk', DiskSchema);

const PsuSchema = new Schema({}, { collection: 'psu' });
const PsuModel = mongoose.model('psu', PsuSchema);

const CaseSchema = new Schema({}, { collection: 'case' });
const CaseModel = mongoose.model('case', CaseSchema);

const KeyboardMouseSchema = new Schema({}, { collection: 'keyboardmouse' });
const KeyboardMouseModel = mongoose.model('keyboardmouse', KeyboardMouseSchema);

const DisplaySchema = new Schema({}, { collection: 'display' });
const DisplayModel = mongoose.model('display', DisplaySchema);

// CpuAmdModel,
// CpuIntelModel,
module.exports = {
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
};

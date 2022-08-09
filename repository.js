// const Picture = require('./models/pictures');
const data = require('./data/data.json');

const getAllPicturies = () => {
  return data;
};

const showImages = (data) => {
  for (let  i=0; i< data.length; i++) {
const img = document.createElement('img')
img.src = './ImagesChitayka/'+data[i].img
  }
}
// const findPatientById = patientId => {
//   return Patient.findOne({ _id: patientId });
// };
// const addPatient = (patientName, patientPhone) => {
//   const patient = new Patient({ id: String(Math.round(Math.random() * 100000000000000000)), fullName: patientName, phone: patientPhone });
//   return patient.save();
// };
// const deletePatient = patientId => {
//   return Patient.findByIdAndDelete({ _id: patientId });
// };
// const updatePatient = (patientId, patientName, patientPhone) => {
//   return Patient.updateOne({ id: patientId }, { fullName: patientName, phone: patientPhone });
// };
// const getAllAppointments = () => {
//   return Appointment.find();
// };
// const getPatientAppointments = patientId => {
//   return Appointment.find({ patientId: patientId });
// };
// const addAppointment = (patientId, dentNumber, diagnosis, date, time) => {
//   const appointment = new Appointment({ patientId: patientId, dentNumber: dentNumber, diagnosis: diagnosis, date: date, time: time });
//   return appointment.save();
// };
// const deleteAppointment = appId => {
//   return Appointment.findByIdAndDelete({ _id: appId });
// };

// const updateAppointment = (appointmentId, patientId, dentNumber, diagnosis, date, time) => {
//   return Appointment.updateOne({ _id: appointmentId }, { patientId: patientId, dentNumber: dentNumber, diagnosis: diagnosis, date: date, time: time });
// };

exports.getAllPicturies = getAllPicturies;
// exports.getPatientAppointments = getPatientAppointments;
// exports.getAllAppointments = getAllAppointments;
// exports.addPatient = addPatient;
// exports.addAppointment = addAppointment;
// exports.findPatientById = findPatientById;
// exports.deleteAppointment = deleteAppointment;
// exports.updateAppointment = updateAppointment;
// exports.updatePatient = updatePatient;
// exports.deletePatient = deletePatient;

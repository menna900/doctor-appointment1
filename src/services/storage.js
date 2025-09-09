export function loadAppointments() {
  const raw = localStorage.getItem('appointments_v3')
  return raw ? JSON.parse(raw) : []
}

export function saveAppointments(list) {
  localStorage.setItem('appointments_v3', JSON.stringify(list))
}

// helper to add one
export function addAppointment(appointment) {
  const list = loadAppointments()
  list.push(appointment)
  saveAppointments(list)
}
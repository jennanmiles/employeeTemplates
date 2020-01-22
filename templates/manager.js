function managerTemplate(data) {
    return `<div class="card">
        <div class="name">${data.name}</div>
        <div class="info">
            <i class="fas fa-coffee"></i>
            Manager
        </div>
        <div class="info">ID: ${data.id}</div>
        <div class="info">Email: <a href="mailto:${data.email}">${data.email}</a></div>
        <div class="info">Phone: <a href="tel:${data.officenum}">${data.officenum}</a></div>
    </div>`
}
module.exports = managerTemplate;
function internTemplate(data) {
    return `<div class="card">
        <div class="name">${data.name}</div>
        <div class="info">
            <i class="fas fa-graduation-cap"></i>
            Intern
        </div>
        <div class="info">ID: ${data.id}</div>
        <div class="info">Email: <a href="mailto:${data.email}">${data.email}</a></div>
        <div class="info">School: ${data.school}</div>
    </div>`
}
module.exports = internTemplate;
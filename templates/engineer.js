function engineerTemplate(data) {
    return `<div class="card">
        <div class="name">${data.name}</div>
        <div class="info">
            <i class="fas fa-glasses"></i>
            Engineer
        </div>        
        <div class="info">ID: ${data.id}</div>
        <div class="info">Email: <a href="mailto:${data.email}">${data.email}</a></div>
        <div class="info">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></div>
    </div>`
}
module.exports = engineerTemplate;
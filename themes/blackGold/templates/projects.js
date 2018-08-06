module.exports = ({title, projects}) => `
    <section id="projects">
        <h3 class="title">${title}</h3>
        ${projectBlocks(projects)}
    </section>
`;

const projectBlocks = projects => projects.map(block => processBlock(block)).join("");

const processBlock = ({
    title,
    link,
    date,
    description
}) => {
    return `
        <div class="block">
            <div class="info">
                <h4 class="title">
                    <a href=${link.href}>${title}</a>
                </h4>
                <h4 class="dates-worked">${date.split("-")[0]}</h4>
            </div>
            <div class="description">${description}</div>
        </div>
    `
};
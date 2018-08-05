module.exports = ({title, projects}) => `
    <section id="projects">
        <h3 class="title">${title}</h3>
        ${projectBlocks(projects)}
    </section>
`;

const projectBlocks = projects => projects.map(block => processBlock(block));

const processBlock = ({
    title,
    link,
    date,
    description
}) => {
    return `
        <div class="project-block">
            <div class="info">
                <h4 class="title">${title}</h4>
                <h4 class="dates-worked">${date}</h4>
            </div>
            <div class="description">${description}</div>
            <p class="link">
                <a href=${link}>${link}</a>
            </p>
        </div>
    `
};
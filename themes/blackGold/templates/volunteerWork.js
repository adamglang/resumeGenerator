module.exports = ({title, blocks}) => `
    <section id="volunteer-work">
        <h3 class="title">${title}</h3>
        ${volunteerBlocks(blocks)}
    </section>
`;

const volunteerBlocks = projects => projects.map(block => processBlock(block));

const processBlock = ({
    title,
    dates,
    description
}) => {
    return `
        <div class="volunteer-block">
            <div class="info">
                <h4 class="title">${title}</h4>
                <h4 class="dates-worked">${dates}</h4>
            </div>
            <div class="description">${description}</div>
        </div>
    `
};
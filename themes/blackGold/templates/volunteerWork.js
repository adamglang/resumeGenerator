module.exports = ({title, blocks}) => `
    <section id="volunteer-work">
        <h3 class="title">${title}</h3>
        ${volunteerBlocks(blocks)}
    </section>
`;

const volunteerBlocks = projects => projects.map(block => processBlock(block)).join("");

const processBlock = ({
    title,
    organization,
    dates,
    description
}) => {
    return `
        <div class="block">
            <div class="info">
                <h4 class="title">${title} for ${organization}</h4>
                <h4 class="dates-worked">${dates}</h4>
            </div>
            <div class="description">${description}</div>
        </div>
    `
};
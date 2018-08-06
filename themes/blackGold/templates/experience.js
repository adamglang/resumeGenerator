module.exports = ({title, blocks}) => `
    <section id="experience">
        <h3 class="title">${title}</h3>
        ${experienceBlocks(blocks)}
    </section>
`;

const experienceBlocks = blocks => blocks.map(block => processBlock(block)).join("");

const processBlock = ({
    title,
    organization,
    dates,
    description
}) => {
    return `
        <div class="block">
            <div class="experience-info">
                <h4 class="title">${title} - ${organization}</h4>
                <h4 class="dates-worked">${dates}</h4>
            </div>
            <div class="description">${description}</div>
        </div>
    `
};
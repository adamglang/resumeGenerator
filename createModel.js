class CreateModel {
  static async init(document, profileName, jobTitle) {
    try {
      CreateModel.removeHiddenElements(document);

      return {
        "headerData": CreateModel.getHeaderData(document, profileName, jobTitle),
        "description": CreateModel.getDescription(document),
        "experience": CreateModel.getBlocklist(document, "#experience-section"),
        "volunteerWork": CreateModel.getBlocklist(document, ".volunteering-section"),
        "skillSet": CreateModel.getSkills(document),
        "projects": CreateModel.getProjects(document)
      }
    } catch(e) {
      throw new Error(`Unable to create the data model - ${e.stack}`);
    }
  }

  static getHeaderData(document, profileName, jobTitle) {
    const profileImgEl = document.querySelector("[data-control-name=edit_profile_photo] img");
    const profileImg = profileImgEl && profileImgEl.src;
    const profileInitials = CreateModel.getInitials(profileName);
    const date = CreateModel.makeFormattedDate(); 

    console.log('Gathered the header data');

    return {
      profileImg,
      profileName,
      profileInitials,
      jobTitle,
      date,
    }
  }

  static getInitials(profileName) {
    let result = "";
    const nameArr = profileName && typeof profileName === "string" && profileName.split(" ");
    const firstName = nameArr[0];
    const lastName = nameArr[nameArr.length - 1];

    if(nameArr) {
      result = {
        "firstInitial": firstName.substring(0, 1),
        "lastInitial": lastName.substring(0, 1)
      }
    }

    console.log('Created you initials');

    return result;
  }

  static getDescription(document) {
    const descriptionEl = document.querySelector(".pv-about__summary-text");
    const uselessNode = descriptionEl.querySelector('.lt-line-clamp__ellipsis');
    descriptionEl.removeChild(uselessNode);
    console.log('Got the profile description')
    return descriptionEl.innerHTML;
  }

  static getBlocklist(document, blockIdentifier) {
    const sectionEl = document.querySelector(blockIdentifier);
    const blockRootElement = sectionEl && sectionEl.querySelector(".pv-profile-section__section-info");
    const titleEl = sectionEl.querySelector(".pv-profile-section__card-heading");
    const title = CreateModel.stripSpace(titleEl.textContent);

    console.log('Got the blocklists');

    return {
      "title": title,
      "blocks": CreateModel.getBlocks(blockRootElement)
    }
  }

  static getBlocks(blockRootElement) {
    const blocks = [];
    const blockEls = blockRootElement.querySelectorAll("li");

    for(let i = 0; i < blockEls.length; i++) {
      const blockEl = blockEls[i];
      const blockLogoEl = blockEl.querySelector(".pv-entity__logo img");
      const blockLogo = blockLogoEl && blockLogoEl.src;
      const summaryInfoEl = blockEl.querySelector(".pv-entity__summary-info");
      const summaryInfoTitleEl = summaryInfoEl && summaryInfoEl.querySelector("h3");
      const summaryInfoTitle = CreateModel.stripSpace(summaryInfoTitleEl.textContent);
      const summaryInfoItems = summaryInfoEl && summaryInfoEl.querySelectorAll("h4") || "";
      const organization = CreateModel.extractSummaryItemText(summaryInfoItems[0]) || "";
      const dates = CreateModel.extractSummaryItemText(summaryInfoItems[1]) || "";
      const duration = CreateModel.extractSummaryItemText(summaryInfoItems[2]) || "";
      const area = CreateModel.extractSummaryItemText(summaryInfoItems[3]) || "";
      const descriptionEl = blockEl.querySelector(".pv-entity__extra-details p") || "";
      const description = CreateModel.stripSpace(descriptionEl.textContent);

      blocks.push({
        "blockLogo": blockLogo,
        "title": summaryInfoTitle,
        "organization": organization,
        "dates": dates,
        "duration": duration,
        "area": area,
        "description": description
      });
    }

    console.log('Got a block')

    return blocks;
  }

  static extractSummaryItemText(summaryItem) {
    if(summaryItem) {
      const spans = summaryItem.querySelectorAll("span");
      const lastSpan = spans && [].slice.call(spans).pop();

      console.log('Got summary items');

      return lastSpan && CreateModel.stripSpace(lastSpan.textContent);
    }
  }

  static getSkills(document) {
    const skillSection = document.querySelector(".pv-skill-categories-section");
    const skillsList = skillSection.querySelectorAll(".pv-skill-category-entity__skill-wrapper");
    const skills = [];

    for(let i = 0; i < skillsList.length; i++) {
      const skill = skillsList[i];
      const skillNameEl = skill.querySelector(".pv-skill-category-entity__name");
      const skillName = skillNameEl && CreateModel.stripSpace(skillNameEl.textContent);
      const endorsementsEl = skill.querySelector(".pv-skill-category-entity__endorsement-count");
      const endorsementsText = endorsementsEl && CreateModel.stripSpace(endorsementsEl.textContent);
      const endorsementCount = parseInt(endorsementsText) || 0;

      skills.push({
        "skillName": skillName,
        "endorsementCount": endorsementCount
      })
    }

    console.log('Got the skills');

    return {
      "title": "Skills",
      "skills": skills
    }
  }

  static getProjects(document) {
    const projectsSection = document.querySelector(".pv-accomplishments-block__list");
    const projects = projectsSection && projectsSection.querySelectorAll(".pv-accomplishment-entity");
    const projectsList = [];

    for(let i = 0; i < projects.length; i++) {
      const project = projects[i];
      const titleEl = project.querySelector(".pv-accomplishment-entity__title");
      const title = titleEl && CreateModel.stripSpace(titleEl.textContent);
      const dateEl = project.querySelector(".pv-accomplishment-entity__date");
      const dates = dateEl && CreateModel.stripSpace(dateEl.textContent);
      const date = dates.split(" – ")[0];
      const descriptionEl = project.querySelector(".pv-accomplishment-entity__description");
        //Puppeteer is giving an incorrect representation of the DOM in chromium for this one element
        //This is a hack to fix the issue for now
      const descriptionText = descriptionEl.nextSibling.nodeValue;
      const description = descriptionText && CreateModel.stripSpace(descriptionText);
      const linkEl = project.querySelector(".pv-accomplishment-entity__external-source");
      const linkText = linkEl && CreateModel.stripSpace(linkEl.textContent);
      const linkHref = linkEl && linkEl.href;

      projectsList.push({
        "title": title,
        "date": date,
        "description": description,
        "link": {
          "text": linkText,
          "href": linkHref
        }
      });
    }

    console.log('Got the projects');

    return {
      "title": "Projects",
      "projects": projectsList
    }
  }

  static stripSpace(str) {
    return (str && str.replace(/[\n\r]+|[\s]{2,}/g, " ").trim()) || "";
  }

  static makeFormattedDate() {
    const date = new Date();
    return `0${(date.getMonth() + 1)}-0${(date.getDate())}-${date.getFullYear()}`
  }

  static removeHiddenElements(document) {
    const hiddenElements = document.querySelectorAll(".visually-hidden");

    for(const hiddenElement of hiddenElements) {
        hiddenElement.parentElement.removeChild(hiddenElement);
    }
  }
}

module.exports = CreateModel;
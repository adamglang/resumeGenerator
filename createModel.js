class CreateModel {
  static async init(document) {
    return {
      "headerData": CreateModel.getHeaderData(document),
      "description": CreateModel.getDescription(document),
      "experience": CreateModel.getBlocklist(document, "#experience-section"),
      "volunteerWork": CreateModel.getBlocklist(document, ".volunteering-section"),
      "skillSet": CreateModel.getSkills(document),
      "projects": CreateModel.getProjects(document)
    }
  }

  static getHeaderData(document) {
    const profileImgEl = document.querySelector("[data-control-name=edit_profile_photo] img");
    const profileImg = profileImgEl && profileImgEl.src;
    const profileNameEl = document.querySelector(".pv-top-card-section__name");
    const profileName = profileNameEl && CreateModel.stripSpace(profileNameEl.textContent);
    const jobTitleEl = document.querySelector(".pv-top-card-section__headline");
    const jobTitle = jobTitleEl && CreateModel.stripSpace(jobTitleEl.textContent);
    const locationEl = document.querySelector(".pv-top-card-section__location");
    const location = locationEl && CreateModel.stripSpace(locationEl.textContent);
    const profileInitials = CreateModel.getInitials(profileName);
    const date = CreateModel.makeFormattedDate();

    return {
      "profileImg": profileImg,
      "profileName": profileName,
      "profileInitials": profileInitials,
      "jobTitle": jobTitle,
      "location": location,
      "date": date
    }
  }

  static getInitials(profileName) {
    let result = "";
    const nameArr = profileName && typeof profileName === "string" && profileName.split(" ");

    if(nameArr) {
      result = {
        "firstInitial": nameArr[0].substring(0, 1),
        "lastInitial": nameArr[1].substring(0, 1)
      }
    }

    return result;
  }

  static getDescription(document) {
    const descriptionEl = document.querySelector(".pv-top-card-section__summary-text");
    const useLessLearnMore = descriptionEl && descriptionEl.querySelector(".lt-line-clamp__ellipsis");

    descriptionEl.removeChild(useLessLearnMore);
    return descriptionEl.innerHTML;
  }

  static getBlocklist(document, blockIdentifier) {
    const sectionEl = document.querySelector(blockIdentifier);
    const blockRootElement = sectionEl && sectionEl.querySelector(".pv-profile-section__section-info");
    const titleEl = sectionEl.querySelector(".pv-profile-section__card-heading");
    const title = CreateModel.stripSpace(titleEl.textContent);

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
      const summaryInfoItems = summaryInfoEl && summaryInfoEl.querySelectorAll("h4");
      const organization = CreateModel.extractSummaryItemText(summaryInfoItems[0]);
      const dates = CreateModel.extractSummaryItemText(summaryInfoItems[1]);
      const duration = CreateModel.extractSummaryItemText(summaryInfoItems[2]);
      const area = CreateModel.extractSummaryItemText(summaryInfoItems[3]);
      const descriptionEl = blockEl.querySelector(".pv-entity__extra-details p");
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

    return blocks;
  }

  static extractSummaryItemText(summaryItem) {
    if(summaryItem) {
      const spans = summaryItem.querySelectorAll("span");
      const lastSpan = spans && [].slice.call(spans).pop();
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
      const date = dateEl && CreateModel.stripSpace(dateEl.textContent);
      const descriptionEl = project.querySelector(".pv-accomplishment-entity__description");
      const description = descriptionEl && CreateModel.stripSpace(descriptionEl.textContent);
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

    return {
      "title": "Projects",
      "projects": projectsList
    }
  }

  static stripSpace(str){
    return (str && str.replace(/[\n\r]+|[\s]{2,}/g, " ").trim()) || "";
  }

  static makeFormattedDate() {
    const date = new Date();
    return `0${(date.getMonth() + 1)} - 0${(date.getDate())} - ${date.getFullYear()}`
  }
}

module.exports = CreateModel;
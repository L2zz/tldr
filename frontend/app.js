function updateContext() {  
  const paragraphs = document.getElementsByClassName("paragraph-wrapper")
  const pointer = document.getElementById("pointer");
  var ptrLoc = pointer.getBoundingClientRect().top - pointer.getBoundingClientRect().height/2;
  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].getBoundingClientRect().top < ptrLoc && 
        paragraphs[i].getBoundingClientRect().bottom > ptrLoc) {
          const ptrTxt = document.getElementById("pointer-context");
          let id = paragraphs[i].id.split('_');
          let sid = id[0].replace('s', '');
          let pid =  id[1].replace('p', '');
          ptrTxt.innerText = `Sect: ${sid} Para: ${pid}`;
          context.sid = parseInt(sid);
          context.pid = parseInt(pid);
    }
  }
}

function clearPaper() {
  const paperContent = document.getElementById("paper-content");
  paperContent.innerHTML = '';
}

function loadPaper() {
  // set title
  const paperContent = document.getElementById("paper-content");
  const paperTitleDiv = document.createElement("div");
  const paperTitle = document.createElement("h1");
  paperTitle.setAttribute("id", "paper-title");
  paperTitle.innerText = data.title;
  paperTitleDiv.append(paperTitle);
  paperContent.append(paperTitleDiv);

  // load contents in paper
  data.sections.forEach((s, i) => {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.setAttribute("class", "section-wrapper");
    const sectionHeading = document.createElement("h2");
    sectionHeading.innerText = s.sectionHeading;
    sectionWrapper.append(sectionHeading);
    s.sectionContent.forEach((p, j) => {
      const paragraphWrapper = document.createElement("div");
      const paragraphText = document.createElement("p");
      if (i in visualMaps) {
        for (var k in visualMaps[i]) {
          if ((j+1) in visualMaps[i][k]) {
            console.log(j+1)
            const figure = document.createElement("img");
            const figureDesc = document.createElement("p");
            figure.setAttribute("src", visualMaps[i][k][j+1].src);
            figureDesc.setAttribute("id", `s${i}_p${j+1}_f${visualMaps[i][k][j+1].id}`);
            figureDesc.setAttribute("class", "visual-desc");
            figureDesc.innerText = visualMaps[i][k][j+1].desc;
            paragraphWrapper.append(figure);
            paragraphWrapper.append(figureDesc);
          }
        }
      }
      paragraphWrapper.setAttribute("id", `s${i}_p${j+1}`);
      paragraphWrapper.setAttribute("class", "paragraph-wrapper");
      paragraphText.innerText = p;
      paragraphWrapper.append(paragraphText);
      sectionWrapper.append(paragraphWrapper);
    });
    paperContent.append(sectionWrapper);
  });
}

function toggleList() {
  const autoCard =  document.getElementById("auto-card");
  const modelWrapper = autoCard.querySelector(".model-wrapper");
  const curModel = modelWrapper.querySelector("div");
  const curModelName = curModel.innerText;
  if (isOpen) {
    modelWrapper.innerHTML = '';
    modelWrapper.append(curModel);
    isOpen = false;
  } else {
    for (var i=0; i < modelList.length; i++) {
      if (curModelName != modelList[i]) {
        const newModel = document.createElement("div");
        newModel.innerText = modelList[i];
        newModel.addEventListener("click", (e) => {
          for (var i=0; i < modelList.length; i++) {
            if (newModel.innerText == modelList[i]) {
              sumPara.name = `model${i+1}`;
              break;
            }
          }
          modelWrapper.innerHTML = '';
          isOpen = false;
          newModel.addEventListener("click", (e) => {
            toggleList();
          })
          modelWrapper.append(newModel);
          updateSummary();
        });
        modelWrapper.append(newModel);
      }
    }
    isOpen = true;
  }
}

function initEventListener() {
  const autoCard =  document.getElementById("auto-card");
  const lenSlider = autoCard.querySelector(".length-slidebar");
  const modelWrapper = autoCard.querySelector(".model-wrapper");
  lenSlider.addEventListener("change", (e) => {
    console.log(lenSlider.value)
    if (lenSlider.value == 0) {
      sumPara.length = "short";
    } else if (lenSlider.value == 1) {
      sumPara.length = "medium";
    } else {
      sumPara.length = "long";
    }
    updateSummary();
  });

  const curModel = modelWrapper.querySelector("div");
  curModel.addEventListener("click", (e) => {
    toggleList();
  });

  const addBtn = document.getElementById("add-card-btn");
  addBtn.addEventListener("click", (e) => {
    createCard(0, 1);
  });
}

function createCard(start, end) {
  const infoContainer = document.getElementById("info-container");
  const cards = document.getElementsByClassName("card-container");
  const newCard = document.createElement("div");
  let cardNum = cards.length;
  newCard.setAttribute("id", `c${cardNum}`);
  newCard.setAttribute("class", "card-container")
  newCard.innerHTML = cards[0].innerHTML;
  
  // Set contents
  const newTop = newCard.querySelector(".card-top");
  const newContent = newCard.querySelector(".card-content");
  const newTitle = newTop.querySelector("h3");
  const newText = newContent.querySelector("p");
  if (start == end) {
    newTitle.innerText = data.sections[start].sectionHeading;
    newText.innerText = data.sections[start].summary["model1"]["medium"];
  } else {
    startSection = data.sections[start].sectionHeading.split(' ')[1];
    endSection = data.sections[end].sectionHeading.split(' ')[1];
    key = `${startSection.toLowerCase()}-${endSection.toLowerCase()}`;
    console.log(key)
    newTitle.innerText = `${start}. ${startSection} - ${end}. ${endSection}`;
    newText.innerText = sectionsData[key];
  }
  const newBottom = newCard.querySelector(".card-bottom");
  newBottom.innerHTML = '';

  const btn = document.getElementById("add-card-btn");
  infoContainer.insertBefore(newCard, btn);
}

function updateSummary() {
  const autoCard =  document.getElementById("auto-card");
  const autoCardTop = autoCard.querySelector(".card-top");
  const autoContent = autoCard.querySelector(".card-content");
  const autoTitle = autoCardTop.querySelector("h3");
  const autoText = autoContent.querySelector("p");
  autoTitle.innerText = data.sections[context.sid].sectionHeading;
  autoText.innerText = data.sections[context.sid].summary[sumPara.name][sumPara.length];
}

const data = {
	title: `"Person, Shoes, Tree. Is the Person Naked?" What People with Vision Impairments Want in Image Descriptions`,
	sections: [
		{
			sectionHeading: `0. Abstract`,
			sectionContent: [
				`Access to digital images is important to people who are blind or have low vision (BLV). Many contemporary image description efforts do not take into account this population’s nuanced image description preferences. In this paper, we present a qualitative study that provides insight into 28 BLV people’s experiences with descriptions of digital images from news websites, social networking sites/platforms, eCommerce websites, employment websites, online dating websites/platforms, productivity applications, and e-publications. Our findings reveal how image description preferences vary based on the source where digital images are encountered and the surrounding context. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis.`
			],
			summary: {
				model1: {
          short: `Access to digital images is important to people who are blind or have low vision (BLV) Many contemporary image description efforts do not take into account this population's nuanced image description preferences. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis.`,
					medium: `Access to digital images is important to people who are blind or have low vision (BLV) Many contemporary image description efforts do not take into account this population’s nuanced image description preferences. Study provides insight into 28 BLV people's experiences with descriptions of digital images from news websites, social networking sites/platforms, eCommerce websites, employment websites, online dating websites, productivity applications, and e-publications. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis.`,
					long: `Access to digital images is important to people who are blind or have low vision (BLV) Many contemporary image description efforts do not take into account this population’s nuanced image description preferences. Study provides insight into 28 BLV people's experiences with descriptions of digital images from news websites, social networking sites/platforms, eCommerce websites, employment websites, online dating websites, productivity applications, and e-publications. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis. Back to the page you came from, contact us at http://www.mailonlineonline.com/news/science-research-report/blivestories/blueblueblue-blindblindblindness/blueblindness.`
					},
				model2: {
          short: `Access to digital images is important to people who are blind or have low vision (BLV). Many contemporary image description efforts do not take into account this population’s nuanced image description preferences.`,
					medium: `Access to digital images is important to people who are blind or have low vision (BLV). Many contemporary image description efforts do not take into account this population’s nuanced image description preferences.`,
					long: `Access to digital images is important to people who are blind or have low vision (BLV). Our findings reveal how image description preferences vary based on the source where digital images are encountered and the surrounding context. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis.`
					},
			},
		},
		{
			sectionHeading: `1. Introduction`,
			sectionContent: [
				`Digital images are plentiful across the media and information landscape. Towards enabling people who are blind or have low vision (BLV) to consume such content, a variety of efforts focus on the provision of alternative text (alt text) that is read through a screen reader. A screen reader is a software application that enables people who are BLV to read the text that is displayed on the computer screen with a speech synthesizer or Braille display. Alt text image descriptions are read off by a screen reader when a content author has followed recommended protocol, e.g. [13], and created an alt text attribute within a document or website’s source code.`,
				`Though provision of alt text is a best practice, most digital images lack descriptions. A 2017 study of popular websites in many categories (as ranked by alexa.com) found that between 20% and 35% of images lacked descriptions, and that many images that did contain alt text had extremely low-quality descriptions, such as the word "image" or a filename [17]. Images on social media are particularly problematic; a 2018 study found that only 0.1% of images on Twitter had alt text [16]. While the ideal is for content authors to always provide high quality image descriptions (i.e. using the alt text field) at the time of document authorship, many are not despite efforts and resources developed to scaffold content authors in producing them (e.g., [13, 26]).`,
				`The absence of alt text from content authors has motivated scholars and practitioners to innovate, by introducing a variety of more scalable image description services that are powered by humans [4, 5, 7, 6, 45], computers [14, 24, 35, 37, 38, 43], and a mixture of their efforts [17, 28, 32, 33]. In designing image descriptions, such services can leverage the many guidelines for how to write effective descriptions [13, 11, 26, 29, 30, 34, 39, 41, 42, 44]. However, existing guidelines are limited in that they do not clarify how to account for the finding of Petrie et al. [30] in 2005 – an interview study with five blind people that found that the most useful information to be included "was thought to be context dependent", i.e. based on the source in which the image is found.`,
				`Towards the goal of closing this description gap between what people want and what is provided, we present a qualitative study designed to investigate the image description preferences of people who are BLV. We interviewed 28 BLV people, guided by the question: "What are BLV people’s experiences with and preferences for image descriptions found in different digital sources?". We draw on the following definition of source: the platforms and media where one may encounter digital images. Examples of digital images found in different sources are shown in Figure 1. We focused our investigation on seven sources: news websites, social networking sites/platforms, eCommerce websites, employment websites, online dating websites/platforms, productivity applications, and e-publications. We conclude with recommendations regarding what is important information to incorporate into image descriptions found in different sources. These recommendations can be of great value for improving human-powered, computer-powered, and hybrid image description services for people who are BLV. More generally, our work contributes to the design of social and technical infrastructures that are accessible to all and support people to engage more fully with digital media.`
			],
			summary: {
				model1: {
          short: `A study of popular websites in many categories found that between 20% and 35% of images lacked descriptions, such as the word "image" or a file. Images on social media are particularly problematic; a 2018 study found that only 0.1% of. images on Twitter had alt text. We present a qualitative study designed to investigate the image description preferences of people who are blind.`,
					medium: `A study of popular websites in many categories found that between 20% and 35% of images lacked descriptions, such as the word "image" or a file. Images on social media are particularly problematic; a 2018 study found that only 0.1% of. images on Twitter had alt text. We present a qualitative study designed to investigate the image description preferences of people who are BLV. We conclude with recommendations regarding what is important information to incorporate into image descriptions found in different sources. These recommendations can be of great value for improving human-powered, computer-powered and hybrid image description services for people.`,
					long: `A study of popular websites in many categories found that between 20% and 35% of images lacked descriptions, such as the word "image" or a file. Images on social media are particularly problematic; a 2018 study found that only 0.1% of. images on Twitter had alt text. We present a qualitative study designed to investigate the image description preferences of people who are BLV. We conclude with recommendations regarding what is important information to incorporate into image descriptions found in different sources. These recommendations can be of great value for improving human-powered, computer-powered and hybrid image description services for people who have low vision (BLV) to people who want to consume digital media. The most useful information to be included is based on the source in which the image is found.`
					},
				model2: {
          short: `Digital images are plentiful across the media and information landscape. A 2017 study of popular websites in many categories (as ranked by alexa.com) found that between 20% and 35% of images lacked descriptions, and that many images that did contain alt text had extremely low-quality descriptions, such as the word "image" or a filename [17]. In designing image descriptions, such services can leverage the many guidelines for how to write effective descriptions [13, 11, 26, 29, 30, 34, 39, 41, 42, 44]. Towards the goal of closing this description gap between what people want and what is provided, we present a qualitative study designed to investigate the image description preferences of people who are BLV.`,
					medium: `Digital images are plentiful across the media and information landscape. Though provision of alt text is a best practice, most digital images lack descriptions. A 2017 study of popular websites in many categories (as ranked by alexa.com) found that between 20% and 35% of images lacked descriptions, and that many images that did contain alt text had extremely low-quality descriptions, such as the word "image" or a filename [17]. In designing image descriptions, such services can leverage the many guidelines for how to write effective descriptions [13, 11, 26, 29, 30, 34, 39, 41, 42, 44]. However, existing guidelines are limited in that they do not clarify how to account for the finding of Petrie et al. [ Towards the goal of closing this description gap between what people want and what is provided, we present a qualitative study designed to investigate the image description preferences of people who are BLV. Examples of digital images found in different sources are shown in Figure 1. These recommendations can be of great value for improving human-powered, computer-powered, and hybrid image description services for people who are BLV.`,
					long: `Digital images are plentiful across the media and information landscape. Towards enabling people who are blind or have low vision (BLV) to consume such content, a variety of efforts focus on the provision of alternative text (alt text) that is read through a screen reader. Though provision of alt text is a best practice, most digital images lack descriptions. A 2017 study of popular websites in many categories (as ranked by alexa.com) found that between 20% and 35% of images lacked descriptions, and that many images that did contain alt text had extremely low-quality descriptions, such as the word "image" or a filename [17]. In designing image descriptions, such services can leverage the many guidelines for how to write effective descriptions [13, 11, 26, 29, 30, 34, 39, 41, 42, 44]. However, existing guidelines are limited in that they do not clarify how to account for the finding of Petrie et al. [ We interviewed 28 BLV people, guided by the question: "What are BLV people’s experiences with and preferences for image descriptions found in different digital sources?". We draw on the following definition of source: the platforms and media where one may encounter digital images. Examples of digital images found in different sources are shown in Figure 1. We focused our investigation on seven sources: news websites, social networking sites/platforms, eCommerce websites, employment websites, online dating websites/platforms, productivity applications, and e-publications. We conclude with recommendations regarding what is important information to incorporate into image descriptions found in different sources. These recommendations can be of great value for improving human-powered, computer-powered, and hybrid image description services for people who are BLV.`
					},
			},
		},
	],
};

const sectionsData = {
  "abstract-introduction": `Access to digital images is important to people who are blind or have low vision (BLV) We present a qualitative study that provides insight into 28 BLV people’s experiences with descriptions of digital images from news websites, social networking sites/platforms, eCommerce websites, employment websites, and productivity applications. Our findings reveal how image description preferences vary based on the source where digital images are encountered and the surrounding context. We provide recommendations for the development of next-generation image description technologies inspired by our empirical analysis.`
}

const visualMaps = {
  1: [
    {
      3: {
        id: 1,
        src: "images/imagedesc/f1.PNG",
        desc: `Figure 1. Examples of digital images that participants in our qualitative study encountered when browsing different sources. Participants wanted more information for all these images, particularly because none of the images had associated alt text.`
      }
    }
  ]
};

const context = {
  sid: 0,
  pid: 0
};

const modelList = ["DistilBart","SciBert"];

const sumPara = {
  name: "model1",
  length: "medium"
};

let isOpen = false;

const initialLoad = () => {
  clearPaper();
  loadPaper();
  updateContext();
  updateSummary();
  initEventListener();
};

initialLoad();

window.addEventListener("scroll", (e) => {
  updateContext();
  updateSummary();
});

// const sectionOneSelect = document.querySelector("#section-1");
// const sectionTwoSelect = document.querySelector("#section-2");
// const paragraphContainer = document.querySelector(
//   ".section-summary-content-box"
// );
// const paragraph = document.querySelector(".section-summary-content-box p");
// paragraphs.forEach((paragraph) => {
//   paragraph.addEventListener("mouseup", (e) => {
//     console.log("====================================");
//     console.log(e.target);
//     console.log("====================================");
//     const selection = window.getSelection().toString();

//     if (selection === "") {
//       console.log("click");
//     } else {
//       console.log("selection", selection);
//     }
//   });
// });

// const iconBox = document.querySelector(".icon-box");
// const plusIcon = document.querySelector(".fas.fa-plus");
// const inputsContainer = document.querySelector(".section-summary-box__inputs");

// plusIcon.addEventListener("click", function () {
//   if (iconBox.classList.contains("close")) {
//     paragraphContainer.classList.add("close");
//     inputsContainer.classList.add("close");
//     iconBox.classList.remove("close");
//     paragraph.textContent = "";
//   } else {
//     iconBox.classList.add("close");
//     inputsContainer.classList.remove("close");
//     paragraphContainer.classList.remove("close");
//     paragraph.textContent = sectionsData[`abstract-introduction`];

//     data.sections
//       .map((section) => section.sectionHeading)
//       .forEach((heading) => {
//         const optionElement = document.createElement("option");
//         optionElement.setAttribute(
//           "value",
//           heading.toLowerCase().replaceAll(" ", "-")
//         );
//         optionElement.textContent = heading.toLowerCase();
//         sectionOneSelect.append(optionElement);
//       });
//     data.sections
//       .map((section) => section.sectionHeading)
//       .forEach((heading) => {
//         const optionElement = document.createElement("option");
//         optionElement.setAttribute(
//           "value",
//           heading.toLowerCase().replaceAll(" ", "-")
//         );
//         optionElement.textContent = heading.toLowerCase();
//         sectionTwoSelect.append(optionElement);
//       });
//   }
// });

// sectionOneSelect.value = "abstract";
// sectionTwoSelect.value = "introduction";

// sectionOneSelect.addEventListener("change", (e) => {
//   paragraph.textContent =
//     sectionsData[`${sectionOneSelect.value}-${sectionTwoSelect.value}`];
//   console.log(
//     sectionsData[`${sectionOneSelect.value}-${sectionTwoSelect.value}`]
//   );
// });

// sectionTwoSelect.addEventListener("change", (e) => {
//   paragraph.textContent =
//     sectionsData[`${sectionOneSelect.value}-${sectionTwoSelect.value}`];
//   console.log(
//     sectionsData[`${sectionOneSelect.value}-${sectionTwoSelect.value}`]
//   );
// });

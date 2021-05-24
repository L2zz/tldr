const paragraph1 = document.querySelector("#paragraph-1");
const arrow = document.querySelector(".arrow");
const content = document.querySelector(".content");
const sidebar = document.querySelector(".info");

const arrayItems = [
  `
  AI systems are being deployed to support human decision making in high-stakes domains such as healthcare and crim-inal justice. In many cases, the human and AI form a team, in which the human makes decisions after reviewing the AI’s inferences. A successful partnership requires that the human develops insights into the performance of the AI system, in-cluding its failures. We study the influence of updates to an AI system in this setting. While updates can increase the AI’s predictive performance, they may also lead to behav-ioral changes that are at odds with the user’s prior experiences and confidence in the AI’s inferences. We show that updates that increase AI performance may actually hurt team perfor-mance. We introduce the notion of the compatibility of an AI update with prior user experience and present methods for studying the role of compatibility in human-AI teams. Empir-ical results on three high-stakes classification tasks show that current machine learning algorithms do not produce compati-ble updates. We propose a re-training objective to improve the compatibility of an update by penalizing new errors. The ob-jective offers full leverage of the performance/compatibility tradeoff across different datasets, enabling more compatible yet accurate updates.
  `,
  `A promising opportunity in AI is developing systems that can partner with people to accomplish tasks in ways that ex-ceed the capabilities of either individually (Wang et al. 2016; Kamar 2016; Gaur et al. 2016). We see many motivating ex-amples: a doctor using a medical expert system (Wang et al. 2016), a judge advised by a recidivism predictor, or a driver supervising a semi-autonomous vehicle. Indeed, economists expect human-AI teams to handle many such tasks (Gown-der et al. 2017). Despite rising interest, there is much to learn about creating effective human-AI teams and what capabili-ties AI systems should employ to be competent partners.

  We study human-AI teams in decision-making settings where a user takes action recommendations from an AI part-ner for solving a complex task. The user considers the rec-ommendation and, based on previous experience with the system, decides to accept the suggested action or take a dif-ferent action. We call this type of interaction AI-advised
  human decision making. While there exist other important forms of human-AI collaboration (including human-advised AI decision making and more general collaborative decision making involving a mix of initiatives and emergent team be-haviors), we focus on a specific interplay where the goal is to create AI systems that recommend actions to assist humans with decisions in high-stakes domains (Angwin et al. 2016; Bayati et al. 2014). The motivation for AI-advised human decision making comes from the fact that humans and ma-chines have complementary strengths and abilities. While both human experts and machine-learned models are not perfect on a task like medical diagnosis or object classifi-cation, researchers have shown that their ideal combination could significantly improve performance (Wang et al. 2016; Kamar, Hacker, and Horvitz 2012). AI systems offer added benefits by speeding up decision making when humans can identify tasks where the AI can be trusted and no more hu-man effort is needed (Lasecki et al. 2012a; 2012b).
  It might be expected that improvements in the perfor-mance of AI systems lead to stronger team performance, but, as with human groups, individual ability is only one of many factors that affect team effectiveness (DeChurch and Mesmer-Magnus 2010; Grosz 1996). Even in a simple col-laboration scenario, in which an AI system assists a human decision maker with predictions, the success of the team hinges on the human correctly deciding when to follow the recommendation of the AI system and when to override. Un-less the particular domain and the interaction allows the hu-man to validate the correctness of the machine recommenda-tion efficiently and effectively, extracting benefits from col-laboration with the AI system depends on the human devel-oping insights (i.e., a mental model) of when to trust the AI system with its recommendations. If the human mistakenly trusts the AI system in regions where it is likely to err, catas-trophic failures may occur. Human-AI teams become espe-cially susceptible to such failures because of discrepancies introduced by system updates that do not account for human expectations. The following example and Figure 1 illustrate this situation.

Example (PATIENT READMISSION). A doctor uses an AI system that is 95% accurate at predicting whether a pa-tient will be readmitted following their discharge to make decisions about enlisting the patient in a supportive post-discharge program. The special program is costly but promises to reduce the likelihood of readmission. After a year of interacting with the AI, the doctor develops a clear mental model that suggests she can trust the AI-advised ac-tions on elderly patients. In the meantime, the AI’s developer trains and deploys a new 98% accurate classifier, which errs on elderly patients. While the AI has improved by 3%, the doctor is unaware of the new errors, and as a result of this outdated mental model, takes the wrong actions for some el-derly patients.

This example is motivated by real-world AI applications for reducing patient readmissions and other costly outcomes in healthcare (Bayati et al. 2014; Wiens, Guttag, and Horvitz 2016; Caruana et al. 2015), and motivates the need for re-ducing the cost of disruption caused by updates that violate users’ mental models. The problem with updates extends to numerous AI-advised human decision-making settings; sim-ilar challenges have been observed during over-the-air up-dates in the Tesla autopilot,1 and analogous issues arise in a variety of other settings when AI services being consumed by third-party applications, are updated.

Despite these problems, developers have almost exclu-sively optimized for AI performance. Retraining techniques largely ignore important details about human-AI teaming, and the mental model that humans develop from interacting with the system. The goal of this work is to make the human factor a first-class consideration of AI updates. We make the following contributions:
We introduce an open-source experimental platform2 for studying how people model the error boundary of an AI teammate in the presence of updates for a an AI-advised decision-making task. The platform exposes important design factors (e.g., task complexity, reward, update type) to the experimenter.`,
  "3Lorem ipiquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "4Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "5Lorem ipsumrchitecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "6Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "7Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "8Lorem ipsum dolor sd p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "9Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet conslestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
  "10Lorem ipsum dolor sit amet cur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid p Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, molestiae tenetur quidem molestias animi necessitatibus architecto aliquid perspiciatis odit, voluptas omnis quisquam rerum accusamus minima amet incidunt neque voluptatibus natus! ",
];

arrayItems.forEach((paragraph, i) => {
  const pElement = document.createElement("p");

  pElement.textContent = paragraph;
  pElement.setAttribute("class", "paragraph");
  pElement.setAttribute("id", `id${i}id`);
  content.appendChild(pElement);
});
const paragraphs = document.querySelectorAll("p");
window.addEventListener("scroll", (e) => {
  for (let i = paragraphs.length - 1; i >= 0; i--) {
    const paragraph = paragraphs[i];
    let topHeight = paragraph.getBoundingClientRect().height + i * 30 + 17;

    for (let j = 0; j < i; j++) {
      if (paragraphs[j] === paragraph) {
        return;
      } else {
        topHeight = topHeight + paragraphs[j].getBoundingClientRect().height;
      }
    }

    if (window.pageYOffset < topHeight) {
      sidebar.textContent = "paragraph " + (i + 1);
    }
  }
});

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("mouseup", (e) => {
    const selection = window.getSelection().toString();

    if (selection === "") {
      console.log("click");
    } else {
      console.log("selection", selection);
    }
  });
});

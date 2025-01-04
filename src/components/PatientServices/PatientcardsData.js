import search from "../../assets/img/search.svg";
import pharmacy from "../../assets/img/pharmacy.svg";
import consultation from "../../assets/img/consultation.svg";
import details from "../../assets/img/details.svg";
import emergency from "../../assets/img/emergency.svg";
import tracking from "../../assets/img/tracking.svg";

import desease_detection from "../../assets/img/desease_detection.svg";
import herbal_medicines from "../../assets/img/herbal_medicines.svg";
import natural_care from "../../assets/img/natural_care.svg";

export const servicesCards = [
  {
    id: "ChatBot",
    image: search,
    title: "Chat Bot",
    text:
      "Suffering from mental stress ? Need help? Try sharing your problem with our chatbot",
    path:"/chat",
  },
  {
    id: "onlinePharmacy",
    image: pharmacy,
    title: "Breast Cancer Detection",
    text:
      "Ultrasound breast cancer image detection with our trusted technology",
      path:"/upload_bcd",
  },
  {
    id: "consultation",
    image: details,
    title: "PCOS Detection",
    text:
      "Ultrasound PCOS image detection with our trusted technology",
      path:"/upload",
  },
];

export const newsCards = [
  {
    id: "deseaseDetection",
    image: desease_detection,
    title: "Disease detection, check up in the laboratory",
    text:
      "In this case, the role of the health laboratory is very important to do a disease detection...",
  },
  {
    id: "herbalMedicines",
    image: herbal_medicines,
    title: "Herbal medicines that are safe for consumption",
    text:
      "Herbal medicine is very widely used at this time because of its very good for your health...",
  },
  {
    id: "naturalCare",
    image: natural_care,
    title: "Natural care for healthy facial skin",
    text:
      "A healthy lifestyle should start from now and also for your skin health. There are some...",
  },
];

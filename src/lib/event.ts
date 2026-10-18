export interface EventDetails {
  couple: {
    groom: string;
    bride: string;
    combined: string;
    monogram: string;
  };
  event: {
    title: string;
    type: string;
    day: string;
    dateFormatted: string;
    time: string;
    isoDateTime: string;
    timezone: string;
    durationHours: number;
    description: string;
  };
  blessings: {
    ganesh: string;
    swaminarayan: string;
    sanskritShloka: string;
    shlokaTranslation: string;
    invitationQuote: string;
  };
  venue: {
    name: string;
    subName: string;
    addressLine1: string;
    addressLine2: string;
    fullAddress: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    googleMapsUrl: string;
  };
  family: {
    inviterPrefix: string;
    inviter: string;
    familyGroup: string;
    subtext: string;
  };
  contact: {
    phoneDisplay: string;
    phoneTel: string;
    whatsappUrl: string;
  };
  closing: {
    quote: string;
    subquote: string;
  };
}

export const EVENT_DETAILS: EventDetails = {
  couple: {
    groom: "Parth",
    bride: "Ankita",
    combined: "Parth & Ankita",
    monogram: "P & A",
  },
  event: {
    title: "Engagement Ceremony",
    type: "Ring Ceremony & Traditional Festivities",
    day: "Thursday",
    dateFormatted: "05 November 2026",
    time: "10:30 AM",
    isoDateTime: "2026-11-05T10:30:00+05:30",
    timezone: "Asia/Kolkata",
    durationHours: 1,
    description:
      "Join us to celebrate the joyous engagement ceremony of Parth & Ankita at Madhuvan Farm, Junagadh.",
  },
  blessings: {
    ganesh: "Shree Ganeshay Namah",
    swaminarayan: "Jay Swaminarayan",
    sanskritShloka:
      "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation:
      "May Lord Ganesha, with radiant splendour of a million suns, bless this auspicious union and remove all obstacles.",
    invitationQuote:
      "With the blessings of our elders and the love of our families, we warmly invite you to celebrate the engagement ceremony of Parth & Ankita.",
  },
  venue: {
    name: "Madhuvan Farm",
    subName: "(Madhuvan Party Plot)",
    addressLine1: "Junagadh Bypass, Joshipura, Khalilpur,",
    addressLine2: "Junagadh, Gujarat – 362002, India",
    fullAddress:
      "Junagadh Bypass, Joshipura, Khalilpur, Junagadh, Gujarat – 362002, India",
    city: "Junagadh",
    state: "Gujarat",
    pincode: "362002",
    country: "India",
    googleMapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Madhuvan+Farm+Madhuvan+Party+Plot+Junagadh+Bypass+Joshipura+Khalilpur+Junagadh+Gujarat+362002",
  },
  family: {
    inviterPrefix: "Together with our families",
    inviter: "Parth & Ankita",
    familyGroup: "Both Families",
    subtext: "Cordially seek your gracious presence and heartfelt blessings",
  },
  contact: {
    phoneDisplay: "97375 59903",
    phoneTel: "+919737559903",
    whatsappUrl:
      "https://wa.me/919737559903?text=Heartiest%20congratulations%20Parth%20and%20Ankita!%20Looking%20forward%20to%20celebrating%20with%20you.",
  },
  closing: {
    quote: "Your presence will make our celebration even more special.",
    subquote: "Together with our families, we look forward to welcoming you.",
  },
};

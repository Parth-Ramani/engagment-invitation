export type Language = "en" | "gu";

export interface TranslationSchema {
  langName: string;
  selectLangTitle: string;
  selectLangSubtitle: string;
  openInvitation: string;
  skipIntro: string;
  melodyEnabled: string;
  melodyMuted: string;
  togetherFamilies: string;
  coupleNames: string;
  eventTitle: string;
  eventSubtitle: string;
  day: string;
  dateFormatted: string;
  time: string;
  timeZoneNote: string;
  ganeshMantra: string;
  swaminarayanMantra: string;
  sanskritShloka: string;
  shlokaTranslation: string;
  specialDayTitle: string;
  specialDaySubtitle: string;
  invitationQuote: string;
  specialDayBody: string;
  ringExchangeTitle: string;
  ringExchangeSubtitle: string;
  groomLabel: string;
  groomCostume: string;
  brideLabel: string;
  brideCostume: string;
  ringExchangeAction: string;
  ringExchangeReplay: string;
  ringExchangeCelebrationNote: string;
  dateSectionTitle: string;
  dateSectionSubtitle: string;
  dayDateLabel: string;
  muhuratLabel: string;
  countdownTitle: string;
  countdownPassed: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  calendarPrompt: string;
  googleCalendarBtn: string;
  icsCalendarBtn: string;
  calendarAddedBtn: string;
  venueSectionTitle: string;
  venueSectionSubtitle: string;
  venueName: string;
  venueSubName: string;
  addressLine1: string;
  addressLine2: string;
  fullAddress: string;
  valetParking: string;
  easyAccess: string;
  getDirectionsBtn: string;
  copyAddressBtn: string;
  addressCopiedBtn: string;
  familySectionTitle: string;
  inviterPrefix: string;
  inviterName: string;
  familyName: string;
  familySubtext: string;
  contactSectionTitle: string;
  contactSectionSubtitle: string;
  contactPrompt: string;
  directContactLabel: string;
  phoneNumber: string;
  callDirectlyBtn: string;
  whatsappMessageBtn: string;
  whatsappText: string;
  closingQuote: string;
  closingSubquote: string;
  celebrateWithUsBtn: string;
  showerBlessingsBtn: string;
  withComplimentsLabel: string;
  complimentsName: string;
  backToTopBtn: string;
  scrollExplore: string;
}

export const TRANSLATIONS: Record<Language, TranslationSchema> = {
  en: {
    langName: "English",
    selectLangTitle: "Choose Your Preferred Language",
    selectLangSubtitle: "કૃપા કરીને આપની પસંદગીની ભાષા પસંદ કરો",
    openInvitation: "Open Invitation",
    skipIntro: "Skip Directly",
    melodyEnabled: "Melody Enabled",
    melodyMuted: "Silent Experience",
    togetherFamilies: "Together with our families",
    coupleNames: "Parth & Ankita",
    eventTitle: "Engagement Ceremony",
    eventSubtitle: "An auspicious union of hearts & families",
    day: "Thursday",
    dateFormatted: "05 November 2026",
    time: "10:30 AM",
    timeZoneNote: "Indian Standard Time (Asia/Kolkata)",
    ganeshMantra: "Shree Ganeshay Namah",
    swaminarayanMantra: "Jay Swaminarayan",
    sanskritShloka:
      "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    shlokaTranslation:
      "May Lord Ganesha, radiating the brilliance of a million suns, bless this sacred union and remove all obstacles.",
    specialDayTitle: "Our Special Day",
    specialDaySubtitle: "A Celebration of Love & Destiny",
    invitationQuote:
      "With the blessings of our elders and the love of our families, we warmly invite you to celebrate the engagement ceremony of Parth & Ankita.",
    specialDayBody:
      "As two families unite in happiness and harmony, your gracious company and warm blessings will make our special day truly memorable and auspicious.",
    ringExchangeTitle: "The Ring Ceremony",
    ringExchangeSubtitle: "Sacred Exchange of Rings & Lifelong Promises",
    groomLabel: "Parth (The Groom)",
    groomCostume: "In Classic Royal Tuxedo",
    brideLabel: "Ankita (The Bride)",
    brideCostume: "In Royal Embroidered Lehenga",
    ringExchangeAction: "Slide The Ring Onto Finger",
    ringExchangeReplay: "Replay Ring Exchange",
    ringExchangeCelebrationNote:
      "Two souls promising eternal companionship, love, and respect.",
    dateSectionTitle: "Date & Time Reveal",
    dateSectionSubtitle: "Save the Auspicious Date",
    dayDateLabel: "Day & Date",
    muhuratLabel: "Ceremony Muhurat",
    countdownTitle: "Countdown to the Auspicious Muhurat",
    countdownPassed: "The Celebration has Begun!",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    calendarPrompt:
      "Never miss this joyous occasion — add it to your personal calendar:",
    googleCalendarBtn: "Google Calendar",
    icsCalendarBtn: "Download .ICS (Apple / Outlook)",
    calendarAddedBtn: "Added to Calendar",
    venueSectionTitle: "Venue & Location",
    venueSectionSubtitle: "Where Celebrations Unfold",
    venueName: "Madhuvan Farm",
    venueSubName: "(Madhuvan Party Plot)",
    addressLine1: "Junagadh Bypass, Joshipura, Khalilpur,",
    addressLine2: "Junagadh, Gujarat – 362002, India",
    fullAddress:
      "Junagadh Bypass, Joshipura, Khalilpur, Junagadh, Gujarat – 362002, India",
    valetParking: "Ample Valet Parking",
    easyAccess: "Easy Bypass Access",
    getDirectionsBtn: "Get Directions",
    copyAddressBtn: "Copy Address",
    addressCopiedBtn: "Address Copied!",
    familySectionTitle: "Auspicious Invitation",
    inviterPrefix: "Together with our families",
    inviterName: "Parth & Ankita",
    familyName: "Cordially Invite You",
    familySubtext:
      "With the blessings of our elders and the love of both families, we warmly seek your gracious presence and heartfelt blessings.",
    contactSectionTitle: "Venue Assistance & Contact",
    contactSectionSubtitle: "We are here to assist you",
    contactPrompt:
      "For venue directions, event assistance, or to share your warm wishes:",
    directContactLabel: "Event Helpline",
    phoneNumber: "97375 59903",
    callDirectlyBtn: "Call Directly",
    whatsappMessageBtn: "WhatsApp Message",
    whatsappText:
      "Heartiest congratulations Parth and Ankita! Looking forward to celebrating with you.",
    closingQuote: "Your presence will make our celebration even more special.",
    closingSubquote:
      "Together with both families, we look forward to welcoming you.",
    celebrateWithUsBtn: "Celebrate With Us",
    showerBlessingsBtn: "Shower Blessings & Celebrate",
    withComplimentsLabel: "With Best Compliments:",
    complimentsName: "Both Families & Well-Wishers",
    backToTopBtn: "Back to Top",
    scrollExplore: "Scroll to explore",
  },
  gu: {
    langName: "ગુજરાતી",
    selectLangTitle: "આપની પસંદગીની ભાષા પસંદ કરો",
    selectLangSubtitle: "Choose your preferred language",
    openInvitation: "નિમંત્રણ પત્રિકા ખોલો",
    skipIntro: "સીધા નિમંત્રણ પર જાઓ",
    melodyEnabled: "મંગલ સૂર ચાલુ છે",
    melodyMuted: "શાંત અનુભવ",
    togetherFamilies: "પરિવારના સ્નેહ આશીર્વાદ સાથે",
    coupleNames: "પાર્થ અને અંકિતા",
    eventTitle: "સગાઈ મહોત્સવ",
    eventSubtitle: "બે હૃદય અને બે પરિવારોનું પવિત્ર મંગલ મિલન",
    day: "ગુરુવાર",
    dateFormatted: "૦૫ નવેમ્બર ૨૦૨૬",
    time: "સવારે ૧૦:૩૦ કલાકે",
    timeZoneNote: "ભારતીય માનક સમય (Asia/Kolkata)",
    ganeshMantra: "શ્રી ગણેશાય નમઃ",
    swaminarayanMantra: "જય સ્વામિનારાયણ",
    sanskritShloka:
      "વક્રતુણ્ડ મહાકાય સૂર્યકોટિ સમપ્રભ। નિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા॥",
    shlokaTranslation:
      "કરોડો સૂર્ય સમાન તેજસ્વી શ્રી ગણેશ ભગવાન આ મંગલ પરિણય બંધન પર કૃપાદ્રષ્ટિ વરસાવી સર્વ વિઘ્નો હરે.",
    specialDayTitle: "અમારો મંગલ અવસર",
    specialDaySubtitle: "સ્નેહ અને સમર્પણનો પાવન દિવસ",
    invitationQuote:
      "વડીલોના આશીર્વાદ અને સ્નેહીજનોના સ્નેહ સાથે, આપ સર્વે સ્નેહીજનોને પાર્થ અને અંકિતાના સગાઈ મહોત્સવમાં પધારવા ભાવભર્યું નિમંત્રણ છે.",
    specialDayBody:
      "પરસ્પર વિશ્વાસ, પ્રેમ અને સંસ્કારના તાંતણે બંધાતા બે પરિવારોના આ મંગલ ઉત્સવમાં આપશ્રીની પાવન ઉપસ્થિતિ અમારા આનંદમાં અભિવૃદ્ધિ કરશે.",
    ringExchangeTitle: "મંગલ મુદ્રિકા ધારણ (રિંગ સેરેમની)",
    ringExchangeSubtitle: "એકમેકને વીંટી પહેરાવી સ્નેહના બંધનમાં બંધાવાનો પવિત્ર અવસર",
    groomLabel: "વરરાજા: પાર્થ",
    groomCostume: "રોયલ ટક્સીડો સૂટમાં",
    brideLabel: "કન્યા: અંકિતા",
    brideCostume: "જરદોશી વર્ક લહેંગામાં",
    ringExchangeAction: "વીંટી પહેરાવો (રિંગ સેરેમની)",
    ringExchangeReplay: "ફરીથી રિંગ સેરેમની જુઓ",
    ringExchangeCelebrationNote:
      "પાર્થ અને અંકિતા એકમેકને આજીવન સાથ અને પ્રેમના વચને બાંધે છે.",
    dateSectionTitle: "શુભ મુહૂર્ત અને તારીખ",
    dateSectionSubtitle: "આ શુભ દિવસને યાદ રાખશો",
    dayDateLabel: "વાર અને તારીખ",
    muhuratLabel: "શુભ મુહૂર્ત સમય",
    countdownTitle: "શુભ મુહૂર્ત માટે બાકી રહેલો સમય",
    countdownPassed: "મંગલ ઉત્સવનો શુભારંભ થઈ ચૂક્યો છે!",
    days: "દિવસ",
    hours: "કલાક",
    minutes: "મિનિટ",
    seconds: "સેકન્ડ",
    calendarPrompt:
      "આ આનંદમય ઉત્સવ ચૂકશો નહીં — આપના કેલેન્ડરમાં સેવ કરી લો:",
    googleCalendarBtn: "ગૂગલ કેલેન્ડરમાં ઉમેરો",
    icsCalendarBtn: "કેલેન્ડરમાં સેવ કરો (.ICS)",
    calendarAddedBtn: "કેલેન્ડરમાં ઉમેરાઈ ગયું",
    venueSectionTitle: "સ્થળ અને સરનામું",
    venueSectionSubtitle: "જ્યાં ઉત્સવની શોભા ખીલશે",
    venueName: "મધુવન ફાર્મ",
    venueSubName: "(મધુવન પાર્ટી પ્લોટ)",
    addressLine1: "જૂનાગઢ બાયપાસ, જોશીપુરા, ખલીલપુર,",
    addressLine2: "જૂનાગઢ, ગુજરાત – ૩૬૨૦૦૨, ભારત",
    fullAddress:
      "જૂનાગઢ બાયપાસ, જોશીપુરા, ખલીલપુર, જૂનાગઢ, ગુજરાત – ૩૬૨૦૦૨, ભારત",
    valetParking: "વિશાળ પાર્કિંગ સુવિધા",
    easyAccess: "બાયપાસ રોડ પર સરળ પહોંચ",
    getDirectionsBtn: "નકશો અને દિશાઓ (Google Maps)",
    copyAddressBtn: "સરનામું કોપી કરો",
    addressCopiedBtn: "સરનામું કોપી થયું!",
    familySectionTitle: "સ્નેહ નિમંત્રણ",
    inviterPrefix: "પરિવારના સ્નેહ અને વડીલોના આશીર્વાદ સાથે",
    inviterName: "પાર્થ અને અંકિતા",
    familyName: "આપ સર્વેનું ભાવભર્યું સ્વાગત કરે છે",
    familySubtext:
      "વડીલોના મંગલ આશીર્વાદ અને બંને પરિવારોના સ્નેહ સાથે, આપ સર્વે સ્નેહીજનોને અમારા આ મંગલ અવસરમાં પધારવા ભાવભર્યું નિમંત્રણ છે.",
    contactSectionTitle: "સંપર્ક અને માર્ગદર્શન",
    contactSectionSubtitle: "આપના માર્ગદર્શન માટે અમે હાજર છીએ",
    contactPrompt:
      "સ્થળની માહિતી, શુભેચ્છા અથવા અન્ય કોઈ સહાય માટે અમારો સંપર્ક કરો:",
    directContactLabel: "સહાયતા નંબર",
    phoneNumber: "97375 59903",
    callDirectlyBtn: "સીધો કૉલ કરો",
    whatsappMessageBtn: "વ્હોટ્સએપ પર મેસેજ મોકલો",
    whatsappText:
      "પાર્થ અને અંકિતાને સગાઈની ખૂબ ખૂબ શુભેચ્છાઓ અને અભિનંદન!",
    closingQuote: "આપની પાવન ઉપસ્થિતિ અમારા આ મંગલ અવસરની શોભા વધારશે.",
    closingSubquote:
      "બંને પરિવાર વતી આપ સર્વે સ્નેહીજનોનું હાર્દિક સ્વાગત છે.",
    celebrateWithUsBtn: "અમારી સાથે ઉજવણી કરો",
    showerBlessingsBtn: "આશીર્વાદ અને પુષ્પવૃષ્ટિ કરો",
    withComplimentsLabel: "લિ. સ્નેહાધીન:",
    complimentsName: "બંને પરિવારના સર્વે સ્નેહીજનો",
    backToTopBtn: "ઉપર જાઓ",
    scrollExplore: "નીચે સ્ક્રોલ કરો",
  },
};

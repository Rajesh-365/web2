import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    courses: 'Courses',
    apply: 'Apply Now',
    
    // Hero Section
    heroTitle: 'The Gospel that brings more than hope. It brings a new Beginning.',
    heroSubtitle: 'We witnessed the word of God restore dignity and purpose to entire communities. Our college was born from this miracle, ready to equip you to be part of the transformation.',
    heroDescription: 'Comprehensive theological education serving 500+ unreached communities across Andhra Pradesh, Telangana, and Odisha since 2018.',
    beginApplication: 'Begin Application',
    explorePrograms: 'Explore Programs',
    
    // JGF Section
    jgfTitle: 'JOHN GOSPEL FELLOWSHIP',
    jgfDescription1: 'John Gospel Fellowship [JGF] began in October 2018 to spread the Gospel in areas where there are no churches. Till date, JGF has served God in more than 500 unreached areas of Andhra Pradesh, Telangana, and Odisha.',
    jgfDescription2: 'Currently, gospel work is ongoing in Vizianagaram, Chilakaluripet (A.P), and the Nallamalla Forest areas etc.',
    unreachedAreas: 'Unreached Areas',
    yearsOfService: 'Years of Service',
    
    // EIT Section
    eitTitle: 'EMMAUS INSTITUTE OF THEOLOGY',
    eitDescription: 'With over six years of Gospel experience and in alignment with Genesis 14:14 ("...took a band of his trained men..."), the Emmaus Institute of Theology was founded to prepare and send a band of trained disciples for God\'s service.',
    ourEIT: 'Our EIT',
    ourVision: 'Our Vision',
    ourMethod: 'Our Method',
    eitDesc: 'To Spread the Gospel to the Unreached Population to enable them to find their Saviour',
    visionDesc: 'To enrich the population with love and power of God through dedicated missionaries who are trained particularly for this purpose from Emmaus Institute of theology',
    methodDesc: 'To reach the grass root population and spread the Gospel of Quality & Quantity in superior degrees',
    
    // Courses
    coursesTitle: 'Courses Offered',
    coursesDescription: 'Choose from our comprehensive range of theological programs designed to equip you for ministry',
    applyNow: 'Apply Now',
    startApplication: 'Start Your Application',
    readyToBegin: 'Ready to Begin Your Journey?',
    
    // Gospel Programme
    gospelProgrammeTitle: 'Request for Gospel Programme',
    gospelProgrammeDescription: 'Do you have a community or area that needs Gospel ministry? Let us know how we can help bring God\'s word to your region.',
    
    // Common
    submit: 'Submit',
    loading: 'Loading...',
    search: 'Search',
    filter: 'Filter',
    download: 'Download',
    view: 'View',
    contact: 'Contact',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    name: 'Name',
    message: 'Message',
    
    // Footer
    connectWithUs: 'Connect With Us',
    quickLinks: 'Quick Links',
    allRightsReserved: 'All rights reserved',
    builtWithLove: 'Built with ❤️ for spreading the Gospel'
  },
  te: {
    // Navigation
    home: 'హోమ్',
    about: 'గురించి',
    courses: 'కోర్సులు',
    apply: 'ఇప్పుడే దరఖాస్తు చేయండి',
    
    // Hero Section
    heroTitle: 'ఈ సువార్త కేవలం ఆశను మాత్రమే కాదు, కొత్త ఆరంభాన్ని కూడా తెస్తుంది.',
    heroSubtitle: 'మొత్తం సమాజాలకు గౌరవం మరియు ఉద్దేశ్యాన్ని పునరుద్ధరించే దేవుని వాక్యాన్ని మేము చూశాము. మా కళాశాల ఈ అద్భుతం నుండి పుట్టింది, మీరు ఈ మార్పులో భాగం కావడానికి సిద్ధంగా ఉంది.',
    heroDescription: '2018 నుండి ఆంధ్రప్రదేశ్, తెలంగాణ మరియు ఒడిశాలోని 500+ చేరని సమాజాలకు సేవ చేస్తున్న సమగ్ర వేదాంత విద్య.',
    beginApplication: 'దరఖాస్తు ప్రారంభించండి',
    explorePrograms: 'కార్యక్రమాలను అన్వేషించండి',
    
    // JGF Section
    jgfTitle: 'జాన్ గాస్పెల్ ఫెలోషిప్',
    jgfDescription1: 'జాన్ గాస్పెల్ ఫెలోషిప్ [JGF] చర్చిలు లేని ప్రాంతాలలో సువార్తను వ్యాప్తి చేయడానికి అక్టోబర్ 2018లో ప్రారంభమైంది. ఈ రోజు వరకు, JGF ఆంధ్రప్రదేశ్, తెలంగాణ మరియు ఒడిశాలోని 500కు మించిన చేరని ప్రాంతాలలో దేవునికి సేవ చేసింది.',
    jgfDescription2: 'ప్రస్తుతం విజయనగరం, చిలకలూరిపేట (ఆ.ప్ర) మరియు నల్లమల అటవీ ప్రాంతాలలో సువార్త పని కొనసాగుతోంది.',
    unreachedAreas: 'చేరని ప్రాంతాలు',
    yearsOfService: 'సేవా సంవత్సరాలు',
    
    // EIT Section
    eitTitle: 'ఎమ్మాస్ ఇన్స్టిట్యూట్ ఆఫ్ థియాలజీ',
    eitDescription: 'ఆరు సంవత్సరాలకు మించిన సువార్త అనుభవంతో మరియు ఆదికాండం 14:14 ("...తన శిక్షణ పొందిన వారి బృందాన్ని తీసుకున్నాడు...") కు అనుగుణంగా, దేవుని సేవ కోసం శిక్షణ పొందిన శిష్యుల బృందాన్ని సిద్ధం చేసి పంపడానికి ఎమ్మాస్ ఇన్స్టిట్యూట్ ఆఫ్ థియాలజీ స్థాపించబడింది.',
    ourEIT: 'మా EIT',
    ourVision: 'మా దృష్టి',
    ourMethod: 'మా పద్ధతి',
    eitDesc: 'చేరని ప్రాంతాలలో సువార్తను వ్యాప్తి చేయడానికి శిష్యులను శిక్షణ ఇవ్వడం',
    visionDesc: 'క్రీస్తు ప్రేమతో ప్రతి మూలను చేరుకోవడం',
    methodDesc: 'ఆచరణాత్మక సేవతో కలిపిన బైబిల్ విద్య',
    
    // Courses
    coursesTitle: 'అందించే కోర్సులు',
    coursesDescription: 'సేవ కోసం మిమ్మల్ని సిద్ధం చేయడానికి రూపొందించిన మా సమగ్ర వేదాంత కార్యక్రమాల నుండి ఎంచుకోండి',
    applyNow: 'ఇప్పుడే దరఖాస్తు చేయండి',
    startApplication: 'మీ దరఖాస్తు ప్రారంభించండి',
    readyToBegin: 'మీ ప్రయాణం ప్రారంభించడానికి సిద్ధంగా ఉన్నారా?',
    
    // Gospel Programme
    gospelProgrammeTitle: 'సువార్త కార్యక్రమం కోసం అభ్యర్థన',
    gospelProgrammeDescription: 'మీకు సువార్త సేవ అవసరమైన సమాజం లేదా ప్రాంతం ఉందా? మీ ప్రాంతానికి దేవుని వాక్యాన్ని తీసుకురావడంలో మేము ఎలా సహాయపడగలమో మాకు తెలియజేయండి.',
    
    // Common
    submit: 'సమర్పించు',
    loading: 'లోడ్ అవుతోంది...',
    search: 'వెతకండి',
    filter: 'ఫిల్టర్',
    download: 'డౌన్లోడ్',
    view: 'చూడండి',
    contact: 'సంప్రదించండి',
    email: 'ఇమెయిల్',
    phone: 'ఫోన్',
    address: 'చిరునామా',
    name: 'పేరు',
    message: 'సందేశం',
    
    // Footer
    connectWithUs: 'మాతో కనెక్ట్ అవ్వండి',
    quickLinks: 'త్వరిత లింకులు',
    allRightsReserved: 'అన్ని హక్కులు రక్షించబడ్డాయి',
    builtWithLove: 'సువార్త వ్యాప్తి కోసం ❤️ తో నిర్మించబడింది'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
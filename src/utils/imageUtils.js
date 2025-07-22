// Function to get image dimensions and determine orientation
export const getImageOrientation = (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = function() {
      const orientation = this.width >= this.height ? 'landscape' : 'portrait';
      resolve(orientation);
    };
    img.src = imageUrl;
  });
};

// Function to organize gallery items with descriptions
export const organizeGalleryItems = async () => {
  const descriptions = {
    'crusade': 'Gospel crusade events bringing the message of hope to communities',
    'worship': 'Moments of worship and praise during our services',
    'outreach': 'Community outreach programs serving those in need',
    'teaching': 'Biblical teaching and discipleship sessions',
    'fellowship': 'Fellowship gatherings strengthening our community bonds',
    'youth': 'Youth programs and activities nurturing the next generation',
    'prayer': 'Prayer meetings and spiritual growth sessions',
    'baptism': 'Baptism ceremonies welcoming new believers',
    'conference': 'Conferences and special events for spiritual growth',
    'ministry': 'Various ministry activities serving our community'
  };

  const baseItems = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    src: `/JGF Activities/JGF Activites (${i + 1}).jpg`,
    title: getEventTitle(i + 1),
    date: getRandomPastDate(),
    description: getRandomDescription(descriptions)
  }));

  const organizedItems = [];
  
  for (const item of baseItems) {
    try {
      const orientation = await getImageOrientation(item.src);
      organizedItems.push({
        ...item,
        orientation
      });
    } catch (error) {
      console.error(`Error processing image ${item.src}:`, error);
    }
  }

  return organizedItems;
};

// Helper function to generate event titles
function getEventTitle(index) {
  const events = [
    'Gospel Crusade',
    'Worship Service',
    'Community Outreach',
    'Bible Study',
    'Youth Meeting',
    'Prayer Gathering',
    'Fellowship Event',
    'Ministry Training',
    'Baptism Service',
    'Conference Session'
  ];
  return `${events[index % events.length]} - Event ${index}`;
}

// Helper function to generate random past dates
function getRandomPastDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
}

// Helper function to get random description
function getRandomDescription(descriptions) {
  const keys = Object.keys(descriptions);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return descriptions[randomKey];
} 
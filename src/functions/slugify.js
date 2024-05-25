// Remove the spacing between the titles for better looking links

const slugify = (title) => title.toLowerCase().replace(/ /g, "-");

export default slugify;

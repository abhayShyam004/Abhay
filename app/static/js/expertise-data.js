/**
 * Pre-defined Expertise/Roles Database
 * Common job titles and roles for portfolio expertise selection
 */

const EXPERTISE_DATABASE = [
    // Development Roles
    { name: "Full Stack Developer", category: "Development" },
    { name: "Frontend Developer", category: "Development" },
    { name: "Backend Developer", category: "Development" },
    { name: "Software Engineer", category: "Development" },
    { name: "Senior Software Engineer", category: "Development" },
    { name: "Lead Developer", category: "Development" },
    { name: "Principal Engineer", category: "Development" },
    { name: "Staff Engineer", category: "Development" },
    { name: "Web Developer", category: "Development" },
    { name: "Mobile Developer", category: "Development" },
    { name: "iOS Developer", category: "Development" },
    { name: "Android Developer", category: "Development" },
    { name: "React Developer", category: "Development" },
    { name: "Vue.js Developer", category: "Development" },
    { name: "Angular Developer", category: "Development" },
    { name: "Node.js Developer", category: "Development" },
    { name: "Python Developer", category: "Development" },
    { name: "Java Developer", category: "Development" },
    { name: "PHP Developer", category: "Development" },
    { name: "Ruby Developer", category: "Development" },
    { name: "Go Developer", category: "Development" },
    { name: "Rust Developer", category: "Development" },
    { name: ".NET Developer", category: "Development" },
    { name: "Blockchain Developer", category: "Development" },
    { name: "Smart Contract Developer", category: "Development" },
    { name: "Web3 Developer", category: "Development" },
    { name: "API Developer", category: "Development" },
    { name: "Embedded Systems Developer", category: "Development" },
    { name: "Game Developer", category: "Development" },
    
    // Design Roles
    { name: "UI/UX Designer", category: "Design" },
    { name: "UI Designer", category: "Design" },
    { name: "UX Designer", category: "Design" },
    { name: "Product Designer", category: "Design" },
    { name: "Visual Designer", category: "Design" },
    { name: "Graphic Designer", category: "Design" },
    { name: "Web Designer", category: "Design" },
    { name: "Motion Designer", category: "Design" },
    { name: "Interaction Designer", category: "Design" },
    { name: "Design Lead", category: "Design" },
    { name: "Creative Director", category: "Design" },
    { name: "Brand Designer", category: "Design" },
    { name: "Design Systems Designer", category: "Design" },
    
    // Data & AI Roles
    { name: "Data Scientist", category: "Data" },
    { name: "Data Engineer", category: "Data" },
    { name: "Data Analyst", category: "Data" },
    { name: "Machine Learning Engineer", category: "Data" },
    { name: "AI Engineer", category: "Data" },
    { name: "Deep Learning Engineer", category: "Data" },
    { name: "NLP Engineer", category: "Data" },
    { name: "Computer Vision Engineer", category: "Data" },
    { name: "MLOps Engineer", category: "Data" },
    { name: "Business Intelligence Analyst", category: "Data" },
    { name: "AI Research Scientist", category: "Data" },
    
    // DevOps & Infrastructure
    { name: "DevOps Engineer", category: "DevOps" },
    { name: "Site Reliability Engineer", category: "DevOps" },
    { name: "Platform Engineer", category: "DevOps" },
    { name: "Cloud Engineer", category: "DevOps" },
    { name: "Cloud Architect", category: "DevOps" },
    { name: "Infrastructure Engineer", category: "DevOps" },
    { name: "Systems Administrator", category: "DevOps" },
    { name: "Network Engineer", category: "DevOps" },
    { name: "Security Engineer", category: "DevOps" },
    { name: "Cybersecurity Specialist", category: "DevOps" },
    { name: "Solutions Architect", category: "DevOps" },
    { name: "AWS Architect", category: "DevOps" },
    { name: "Azure Architect", category: "DevOps" },
    { name: "GCP Architect", category: "DevOps" },
    
    // QA & Testing
    { name: "QA Engineer", category: "QA" },
    { name: "Quality Assurance Engineer", category: "QA" },
    { name: "Test Automation Engineer", category: "QA" },
    { name: "SDET", category: "QA" },
    { name: "Performance Engineer", category: "QA" },
    { name: "QA Lead", category: "QA" },
    
    // Management & Leadership
    { name: "Engineering Manager", category: "Management" },
    { name: "Technical Lead", category: "Management" },
    { name: "Team Lead", category: "Management" },
    { name: "Tech Lead", category: "Management" },
    { name: "CTO", category: "Management" },
    { name: "VP of Engineering", category: "Management" },
    { name: "Director of Engineering", category: "Management" },
    { name: "Product Manager", category: "Management" },
    { name: "Project Manager", category: "Management" },
    { name: "Scrum Master", category: "Management" },
    { name: "Agile Coach", category: "Management" },
    
    // Consulting & Freelance
    { name: "Technical Consultant", category: "Consulting" },
    { name: "IT Consultant", category: "Consulting" },
    { name: "Freelance Developer", category: "Consulting" },
    { name: "Independent Consultant", category: "Consulting" },
    { name: "Technology Advisor", category: "Consulting" },
    { name: "Digital Transformation Consultant", category: "Consulting" },
    
    // Other Technical Roles
    { name: "Technical Writer", category: "Other" },
    { name: "Developer Advocate", category: "Other" },
    { name: "Developer Relations", category: "Other" },
    { name: "Technical Trainer", category: "Other" },
    { name: "Database Administrator", category: "Other" },
    { name: "Systems Analyst", category: "Other" },
    { name: "Business Analyst", category: "Other" },
    { name: "Research Engineer", category: "Other" },
    { name: "R&D Engineer", category: "Other" },
    
    // Creative/Generalist
    { name: "Creative Technologist", category: "Creative" },
    { name: "Digital Creator", category: "Creative" },
    { name: "Content Creator", category: "Creative" },
    { name: "Tech Enthusiast", category: "Creative" },
    { name: "Open Source Contributor", category: "Creative" },
    { name: "Maker", category: "Creative" },
    { name: "Innovator", category: "Creative" },
    { name: "Problem Solver", category: "Creative" },
    { name: "Lifelong Learner", category: "Creative" },
];

// Get all unique categories
const EXPERTISE_CATEGORIES = [...new Set(EXPERTISE_DATABASE.map(e => e.category))];

// Search function
function searchExpertise(query) {
    const q = query.toLowerCase().trim();
    if (!q) return EXPERTISE_DATABASE.slice(0, 15); // Return first 15 if no query
    
    return EXPERTISE_DATABASE.filter(expertise => 
        expertise.name.toLowerCase().includes(q) ||
        expertise.category.toLowerCase().includes(q)
    ).slice(0, 15); // Limit results to 15
}

// Get expertise by category
function getExpertiseByCategory(category) {
    return EXPERTISE_DATABASE.filter(expertise => expertise.category === category);
}

/**
 * Pre-defined Skills Database
 * Icons sourced from DevIcon (https://devicon.dev/) and Simple Icons
 * Used for searchable skill selection in admin panel
 */

const SKILLS_DATABASE = [
    // Programming Languages
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Languages" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", category: "Languages" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Languages" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Languages" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", category: "Languages" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", category: "Languages" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", category: "Languages" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg", category: "Languages" },
    { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg", category: "Languages" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg", category: "Languages" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", category: "Languages" },
    { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg", category: "Languages" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg", category: "Languages" },
    { name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg", category: "Languages" },
    { name: "R", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg", category: "Languages" },
    { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg", category: "Languages" },
    { name: "Perl", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg", category: "Languages" },
    { name: "Lua", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg", category: "Languages" },
    { name: "Haskell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/haskell/haskell-original.svg", category: "Languages" },
    { name: "Elixir", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg", category: "Languages" },
    { name: "Clojure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/clojure/clojure-original.svg", category: "Languages" },
    { name: "Julia", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg", category: "Languages" },
    { name: "MATLAB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg", category: "Languages" },
    { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg", category: "Languages" },

    // Frontend Frameworks
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Frontend" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", category: "Frontend" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg", category: "Frontend" },
    { name: "Svelte", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg", category: "Frontend" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", category: "Frontend" },
    { name: "Nuxt.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg", category: "Frontend" },
    { name: "Gatsby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gatsby/gatsby-original.svg", category: "Frontend" },
    { name: "Remix", icon: "https://cdn.simpleicons.org/remix/ffffff", category: "Frontend" },
    { name: "Astro", icon: "https://cdn.simpleicons.org/astro/ffffff", category: "Frontend" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg", category: "Frontend" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg", category: "Frontend" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg", category: "Frontend" },
    { name: "Less", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/less/less-plain-wordmark.svg", category: "Frontend" },

    // Backend Frameworks
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "Backend" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", category: "Backend" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", category: "Backend" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", category: "Backend" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", category: "Backend" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", category: "Backend" },
    { name: "Ruby on Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg", category: "Backend" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", category: "Backend" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg", category: "Backend" },
    { name: "ASP.NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg", category: "Backend" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg", category: "Backend" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg", category: "Backend" },
    { name: "REST API", icon: "https://cdn.simpleicons.org/openapiinitiative/ffffff", category: "Backend" },

    // Databases
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Database" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg", category: "Database" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", category: "Database" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg", category: "Database" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", category: "Database" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg", category: "Database" },
    { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", category: "Database" },
    { name: "Cassandra", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg", category: "Database" },
    { name: "Elasticsearch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg", category: "Database" },
    { name: "DynamoDB", icon: "https://cdn.simpleicons.org/amazondynamodb/ffffff", category: "Database" },

    // DevOps & Cloud
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", category: "DevOps" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg", category: "DevOps" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "DevOps" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", category: "DevOps" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", category: "DevOps" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg", category: "DevOps" },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg", category: "DevOps" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg", category: "DevOps" },
    { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg", category: "DevOps" },
    { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", category: "DevOps" },
    { name: "CircleCI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/circleci/circleci-plain.svg", category: "DevOps" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg", category: "DevOps" },
    { name: "Apache", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg", category: "DevOps" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg", category: "DevOps" },
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg", category: "DevOps" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff", category: "DevOps" },
    { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/ffffff", category: "DevOps" },
    { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg", category: "DevOps" },
    { name: "DigitalOcean", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg", category: "DevOps" },
    { name: "Render", icon: "https://cdn.simpleicons.org/render/ffffff", category: "DevOps" },

    // Mobile Development
    { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Mobile" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", category: "Mobile" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg", category: "Mobile" },
    { name: "iOS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg", category: "Mobile" },
    { name: "Ionic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ionic/ionic-original.svg", category: "Mobile" },
    { name: "Xamarin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg", category: "Mobile" },

    // Tools & Version Control
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "Tools" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", category: "Tools" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg", category: "Tools" },
    { name: "Bitbucket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg", category: "Tools" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", category: "Tools" },
    { name: "Vim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg", category: "Tools" },
    { name: "IntelliJ IDEA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", category: "Tools" },
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/ffffff", category: "Tools" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", category: "Tools" },
    { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg", category: "Tools" },
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg", category: "Tools" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "Tools" },
    { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original.svg", category: "Tools" },
    { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg", category: "Tools" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", category: "Tools" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg", category: "Tools" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg", category: "Tools" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/ffffff", category: "Tools" },

    // Testing
    { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg", category: "Testing" },
    { name: "Mocha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg", category: "Testing" },
    { name: "Cypress", icon: "https://cdn.simpleicons.org/cypress/ffffff", category: "Testing" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg", category: "Testing" },
    { name: "Playwright", icon: "https://cdn.simpleicons.org/playwright/ffffff", category: "Testing" },
    { name: "PyTest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg", category: "Testing" },
    { name: "JUnit", icon: "https://cdn.simpleicons.org/junit5/ffffff", category: "Testing" },

    // Data Science & AI/ML
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", category: "AI/ML" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", category: "AI/ML" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg", category: "AI/ML" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", category: "AI/ML" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", category: "AI/ML" },
    { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", category: "AI/ML" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", category: "AI/ML" },
    { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", category: "AI/ML" },
    { name: "Apache Spark", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg", category: "AI/ML" },
    { name: "Hadoop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hadoop/hadoop-original.svg", category: "AI/ML" },
    { name: "OpenAI", icon: "https://cdn.simpleicons.org/openai/ffffff", category: "AI/ML" },
    { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/ffffff", category: "AI/ML" },

    // Other
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", category: "Web" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", category: "Web" },
    { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg", category: "Tools" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", category: "Tools" },
    { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg", category: "Tools" },
    { name: "Yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original.svg", category: "Tools" },
    { name: "pnpm", icon: "https://cdn.simpleicons.org/pnpm/ffffff", category: "Tools" },
    { name: "WebSocket", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", category: "Web" },
    { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg", category: "Web" },
    { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", category: "Web" },
    { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg", category: "Game Dev" },
    { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg", category: "Game Dev" },
    { name: "Blender", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg", category: "Design" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg", category: "CMS" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/ffffff", category: "CMS" },
    { name: "Strapi", icon: "https://cdn.simpleicons.org/strapi/ffffff", category: "CMS" },
    { name: "Contentful", icon: "https://cdn.simpleicons.org/contentful/ffffff", category: "CMS" },
    { name: "Sanity", icon: "https://cdn.simpleicons.org/sanity/ffffff", category: "CMS" },
];

// Get all unique categories
const SKILL_CATEGORIES = [...new Set(SKILLS_DATABASE.map(s => s.category))];

// Search function
function searchSkills(query) {
    const q = query.toLowerCase().trim();
    if (!q) return SKILLS_DATABASE.slice(0, 20); // Return first 20 if no query
    
    return SKILLS_DATABASE.filter(skill => 
        skill.name.toLowerCase().includes(q) ||
        skill.category.toLowerCase().includes(q)
    ).slice(0, 20); // Limit results to 20
}

// Get skills by category
function getSkillsByCategory(category) {
    return SKILLS_DATABASE.filter(skill => skill.category === category);
}

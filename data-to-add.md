# Data to Add to Your Portfolio Admin

## Skills to Add

Add these skills through your admin dashboard at `/admin`:

### Programming Languages
1. **PHP** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg
2. **JavaScript** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg
3. **TypeScript** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg
4. **Java** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg
5. **SQL** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg

### Frontend Technologies
6. **Vue.js** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg
7. **Angular** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg
8. **HTML5** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg
9. **CSS3** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg
10. **Tailwind CSS** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg
11. **Bootstrap** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg

### Backend Technologies
12. **Symfony** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg
13. **Laravel** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg
14. **Node.js** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg

### Databases
15. **MySQL** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg
16. **MongoDB** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg
17. **PostgreSQL** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg

### Tools & Others
18. **Docker** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg
19. **Git** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg
20. **AWS** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg
21. **WordPress** - Logo: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg

## Projects to Add

Add these projects through your admin dashboard at `/admin`:

### 1. Carte Financement
- **Name**: Carte Financement
- **Skill**: Full-Stack (Symfony/Vue.js)
- **URL**: (Add if available)
- **Description**: Plateforme de courtage en crédit immobilier spécialisée dans le financement des entreprises et des professionnels. Développement de nouvelles fonctionnalités, maintenance évolutive, et optimisation des performances.
- **Technologies**: Symfony, Vue.js, MySQL, Twig, Docker, API REST

### 2. Ulerb
- **Name**: Ulerb
- **Skill**: Full-Stack (Vue.js/Symfony)
- **URL**: (Add if available)
- **Description**: Solution logistique complète pour transitaires avec suivi en temps réel des expéditions. Développement web et mobile multiplateforme avec Capacitor, intégration d'API et système de notifications.
- **Technologies**: Vue.js, Symfony, MongoDB, Capacitor, Stripe, AWS

### 3. Koalife
- **Name**: Koalife
- **Skill**: WordPress Development
- **URL**: (Add if available)
- **Description**: Plateforme d'assurance emprunteur avec simulateur interactif. Développement et personnalisation du simulateur, automatisation des calculs et amélioration de l'expérience utilisateur.
- **Technologies**: WordPress, PHP, MySQL, JavaScript

### 4. SpartanJob
- **Name**: SpartanJob
- **Skill**: Frontend (Angular)
- **URL**: (Add if available)
- **Description**: Plateforme de recrutement dédiée au marché suisse. Développement de l'interface utilisateur responsive, intégration d'API pour gestion des offres d'emploi en temps réel.
- **Technologies**: Angular, TypeScript, Tailwind CSS

### 5. FAST
- **Name**: FAST
- **Skill**: Frontend (Angular)
- **URL**: (Add if available)
- **Description**: Solution SaaS 100% algérienne de gestion commerciale et facturation. Interface moderne pour gestion des stocks, clients et factures adaptée aux TPE/PME.
- **Technologies**: Angular, TypeScript, Bootstrap, REST API

### 6. Sites WordPress (Maintenance)
- **Name**: Maintenance WordPress Multi-sites
- **Skill**: WordPress/PHP
- **URL**: (Add if available)
- **Description**: Maintenance préventive et corrective de plusieurs sites WordPress. Optimisation SEO, amélioration des performances, développement de fonctionnalités sur mesure avec Elementor.
- **Technologies**: WordPress, Elementor, WooCommerce, PHP, MySQL

## How to Add Data

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Go to `/admin/login` and sign in with your admin credentials

3. Once logged in, you'll see the admin dashboard

4. Use the "Add Skill" button to add each skill with its logo URL

5. Use the "Add Project" button to add each project with its details

6. For project images, you can:
   - Upload screenshots from your projects
   - Use placeholder images initially
   - Add actual project screenshots later

## Notes

- The portfolio page will automatically display the skills and projects once added to the database
- Images are uploaded to Supabase Storage and URLs are generated automatically
- You can edit or delete items anytime from the admin panel
- The dark/light mode toggle is now functional and saves preference in localStorage
- The navigation is fully mobile-responsive with hamburger menu
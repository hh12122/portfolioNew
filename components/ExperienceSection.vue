<template>
  <section id="experience" class="py-20 bg-light-primary dark:bg-dark-primary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          Expérience Professionnelle
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">Mon parcours professionnel</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent/30"></div>

          <!-- Experience Item -->
          <div class="relative flex items-center justify-between mb-12">
            <div class="w-full md:w-5/12"></div>
            <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-light-primary dark:border-dark-primary z-10"></div>
            <div class="w-full md:w-5/12 bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 ml-12 md:ml-0">
              <span class="text-accent font-bold text-sm font-body">Juin 2023 - Présent</span>
              <h3 class="text-xl font-bold text-dark-primary dark:text-light-primary mt-2 font-primary">
                Développeur Full-Stack
              </h3>
              <p class="text-accent-hover font-semibold mt-1 font-body">Tech Instinct • Béjaia, Algérie</p>
              <ul class="mt-4 space-y-2 text-paragraph dark:text-gray-300 text-sm font-body">
                <li class="flex items-start">
                  <span class="text-accent mr-2">•</span>
                  <span>Développement et maintenance d'applications web en front-end et back-end</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">•</span>
                  <span>Conception de nouvelles fonctionnalités et intégration d'API</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">•</span>
                  <span>Optimisation des performances des systèmes existants</span>
                </li>
                <li class="flex items-start">
                  <span class="text-accent mr-2">•</span>
                  <span>Collaboration avec l'équipe produit et technique (CI/CD, tests, documentation)</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Key Projects Section -->
          <div class="mt-16 text-center">
            <h3 class="text-2xl font-bold text-dark-primary dark:text-light-primary mb-8 font-primary">
              Projets Clés Réalisés
            </h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">💳</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">Carte Financement</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Plateforme de courtage en crédit immobilier</p>
                <p class="text-xs text-accent mt-2 font-body">Symfony • Vue.js • MySQL</p>
              </div>

              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">📦</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">Ulerb</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Solution logistique pour transitaires</p>
                <p class="text-xs text-accent mt-2 font-body">Vue.js • MongoDB • Capacitor</p>
              </div>

              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">🏠</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">Koalife</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Simulateur d'assurance emprunteur</p>
                <p class="text-xs text-accent mt-2 font-body">WordPress • PHP • MySQL</p>
              </div>

              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">💼</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">SpartanJob</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Plateforme de recrutement Suisse</p>
                <p class="text-xs text-accent mt-2 font-body">Angular • TypeScript • Tailwind</p>
              </div>

              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">⚡</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">FAST</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Solution SaaS de gestion commerciale</p>
                <p class="text-xs text-accent mt-2 font-body">Angular • Bootstrap • REST API</p>
              </div>

              <div class="bg-white dark:bg-dark-secondary p-6 rounded-lg border border-accent/20 hover:border-accent transition-all">
                <div class="text-3xl mb-3">🌐</div>
                <h4 class="font-semibold text-dark-primary dark:text-light-primary mb-2 font-primary">Sites WordPress</h4>
                <p class="text-sm text-paragraph dark:text-gray-300 font-body">Maintenance multi-sites</p>
                <p class="text-xs text-accent mt-2 font-body">WordPress • Elementor • WooCommerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
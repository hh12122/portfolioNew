<template>
  <section id="about" class="py-20 bg-light-secondary dark:bg-dark-secondary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          À propos de moi
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">Découvrez mon parcours et mes passions</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <img src="/assets/images/about.jpg" alt="About Me" class="rounded-lg shadow-xl w-full h-auto" />
        </div>

        <div class="order-1 md:order-2 space-y-6">
          <h3 class="text-2xl font-bold font-primary text-dark-primary dark:text-light-primary">
            Développeur Full-Stack Passionné
          </h3>

          <p class="text-paragraph dark:text-gray-300 font-body leading-relaxed">
            Diplômé d'un Master en Génie Logiciel de l'Université Abderrahmane Mira de Béjaia,
            je suis un développeur full-stack avec une expertise solide en développement web moderne.
          </p>

          <p class="text-paragraph dark:text-gray-300 font-body leading-relaxed">
            Actuellement en poste chez Tech Instinct depuis juin 2023, je participe au développement
            et à la maintenance d'applications web complexes, en travaillant sur l'ensemble du stack
            technique, du front-end au back-end.
          </p>

          <div class="space-y-4">
            <h4 class="text-xl font-semibold text-accent font-primary">Formation & Certifications</h4>
            <ul class="space-y-2 text-paragraph dark:text-gray-300 font-body">
              <li class="flex items-start">
                <span class="text-accent mr-2">▸</span>
                <span>Master en Génie Logiciel (2019-2021)</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">▸</span>
                <span>Licence en Systèmes Informatiques (2016-2019)</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">▸</span>
                <span>Certification CCNA Cisco (2020-2022)</span>
              </li>
              <li class="flex items-start">
                <span class="text-accent mr-2">▸</span>
                <span>Formation Java Administrateur ESGI (2019)</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-wrap gap-4 pt-4">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-sm font-body">+213 540 036 105</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-sm font-body">Béjaia, Algérie</span>
            </div>
          </div>

          <a href="#contact" class="inline-block mt-6 bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-body transition-all">
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
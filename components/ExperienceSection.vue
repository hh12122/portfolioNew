<template>
  <section id="experience" class="py-20 bg-light-primary dark:bg-dark-primary">
    <div class="container mx-auto">
      <div class="text-center mb-16 animate-on-scroll">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-dark-primary dark:text-light-primary mb-4">
          {{ $t('experience.title') }}
        </h2>
        <p class="text-lg text-paragraph dark:text-gray-400 font-body">{{ $t('experience.subtitle') }}</p>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-accent/30"></div>

          <!-- Education -->
          <div class="mb-16 animate-on-scroll animation-delay-200">
            <h3 class="text-2xl font-bold text-center text-dark-primary dark:text-light-primary mb-8 font-primary">
              {{ $t('experience.education.title') }}
            </h3>

            <!-- Licence -->
            <div class="relative flex flex-col md:flex-row items-start md:items-center mb-12 animate-on-scroll animation-delay-400">
              <!-- Mobile: Content first, then icon -->
              <!-- Desktop: Content on left -->
              <div class="w-full md:w-7/12 mb-4 md:mb-0 md:pr-8">
                <div class="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 ml-8 md:ml-0 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                  <span class="text-accent font-bold text-sm font-body">{{ $t('experience.education.license.period') }}</span>
                  <h4 class="text-xl font-bold text-dark-primary dark:text-light-primary mt-2 font-primary">
                    {{ $t('experience.education.license.title') }}
                  </h4>
                  <p class="text-accent-hover font-semibold mt-1 font-body">{{ $t('experience.education.license.school') }}</p>
                  <p class="mt-3 text-paragraph dark:text-gray-300 text-sm font-body">
                    {{ $t('experience.education.license.description') }}
                  </p>
                </div>
              </div>
              <!-- Timeline icon -->
              <div class="absolute left-2 top-4 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 bg-accent rounded-full border-4 border-light-primary dark:border-dark-primary z-10 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <span class="text-white text-xs font-bold">📚</span>
              </div>
              <!-- Desktop: Empty space on right -->
              <div class="hidden md:block md:w-7/12"></div>
            </div>

            <!-- Master -->
            <div class="relative flex flex-col md:flex-row items-start md:items-center mb-12 animate-on-scroll animation-delay-600">
              <!-- Mobile: Content first, then icon -->
              <!-- Desktop: Empty space on left -->
              <div class="hidden md:block md:w-7/12"></div>
              <!-- Timeline icon -->
              <div class="absolute left-2 top-4 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 bg-accent rounded-full border-4 border-light-primary dark:border-dark-primary z-10 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <span class="text-white text-xs font-bold">🎓</span>
              </div>
              <!-- Desktop: Content on right -->
              <div class="w-full md:w-7/12 mb-4 md:mb-0 md:pl-8">
                <div class="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 ml-8 md:ml-0 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                  <span class="text-accent font-bold text-sm font-body">{{ $t('experience.education.master.period') }}</span>
                  <h4 class="text-xl font-bold text-dark-primary dark:text-light-primary mt-2 font-primary">
                    {{ $t('experience.education.master.title') }}
                  </h4>
                  <p class="text-accent-hover font-semibold mt-1 font-body">{{ $t('experience.education.master.school') }}</p>
                  <p class="mt-3 text-paragraph dark:text-gray-300 text-sm font-body">
                    {{ $t('experience.education.master.description') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Professional Experience -->
          <div class="mb-16 animate-on-scroll animation-delay-800">
            <h3 class="text-2xl font-bold text-center text-dark-primary dark:text-light-primary mb-8 font-primary">
              {{ $t('experience.work.title') }}
            </h3>

            <!-- Current Job -->
            <div class="relative flex flex-col md:flex-row items-start md:items-center mb-12 animate-on-scroll animation-delay-1000">
              <!-- Mobile: Content first, then icon -->
              <!-- Desktop: Content on left -->
              <div class="w-full md:w-7/12 mb-4 md:mb-0 md:pr-8">
                <div class="bg-white dark:bg-dark-secondary rounded-lg shadow-xl p-6 ml-8 md:ml-0 hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                  <span class="text-accent font-bold text-sm font-body">{{ $t('experience.work.current.period') }}</span>
                  <h4 class="text-xl font-bold text-dark-primary dark:text-light-primary mt-2 font-primary">
                    {{ $t('experience.work.current.title') }}
                  </h4>
                  <p class="text-accent-hover font-semibold mt-1 font-body">{{ $t('experience.work.current.company') }}</p>
                  <ul class="mt-4 space-y-2 text-paragraph dark:text-gray-300 text-sm font-body">
                    <li class="flex items-start hover:translate-x-2 transition-transform duration-300">
                      <span class="text-accent mr-2">•</span>
                      <span>{{ $t('experience.work.current.tasks.0') }}</span>
                    </li>
                    <li class="flex items-start hover:translate-x-2 transition-transform duration-300">
                      <span class="text-accent mr-2">•</span>
                      <span>{{ $t('experience.work.current.tasks.1') }}</span>
                    </li>
                    <li class="flex items-start hover:translate-x-2 transition-transform duration-300">
                      <span class="text-accent mr-2">•</span>
                      <span>{{ $t('experience.work.current.tasks.2') }}</span>
                    </li>
                    <li class="flex items-start hover:translate-x-2 transition-transform duration-300">
                      <span class="text-accent mr-2">•</span>
                      <span>{{ $t('experience.work.current.tasks.3') }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- Timeline icon -->
              <div class="absolute left-2 top-4 md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 bg-accent rounded-full border-4 border-light-primary dark:border-dark-primary z-10 flex items-center justify-center hover:scale-125 transition-transform duration-300">
                <span class="text-white text-xs font-bold">💼</span>
              </div>
              <!-- Desktop: Empty space on right -->
              <div class="hidden md:block md:w-7/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
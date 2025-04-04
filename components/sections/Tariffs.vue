<script setup lang="ts">
const tariffs = ref([
  {
    name: 'Пакет 1',
    price: '12 990',
    oldPrice: '15 000 ₽',
    points: [
        '30 мин одного персонажа',
        '30 мин шоу на выбор химическое или шоу гигантских пузырей',
    ]
  },
  {
    name: 'Пакет 2',
    price: '28 990',
    oldPrice: '30 000 ₽',
    points: [
      '1,5 часа анимации одного персонажа (игры с ярким реквизитом, музыкальное сопровождение, танцы, мыльные пузыри, твистинг)',
      'Фокусник с кроликом 40 мин',
      '(Выступление фокусника: Волшебное вручение подарка; Исчезновение и появление предметов; Фокусы с веревками, шариками; Летающие огоньки; Лента изо рта; Появление тростей, цветов, свечей)',
    ]
  },
  {
    name: 'Пакет 3',
    price: '45 900',
    oldPrice: '50 000 ₽',
    points: [
      '1.5 часа анимация 2 персонажа',
      'Бумажное белое шоу 1 час',
      'Время: 2.5 часа',
      'В программе:1.5 часа анимация - игры с ярким реквизитом, музыкальное сопровождение, танцы, мыльные пузыри, твистинг, аквагрим',
      'Белая бумажная дискотека (колонка, новая белая бумага 20 кг, конфетти, 2 ведущих с воздухо-пушкой)'
    ]
  }
])

const tariffTemplateRef = useTemplateRef<HTMLDivElement>('tariffTemplateRef')

let mm = useGSAP().matchMedia()

const onPointerOver = (e: PointerEvent, index: number) => {
  mm.add('(min-width: 1200px)', () => {
    useGSAP().to(tariffTemplateRef.value[index], {
      scale: 1.05
    })
  })
}

const onPointerOut = (e: PointerEvent, index: number) => {
  mm.add('(min-width: 1200px)', () => {
    useGSAP().to(tariffTemplateRef.value[index], {
      scale: 1
    })
  })
}
</script>

<template>
  <div class="tariffs">
    <h2 v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}'>Тарифы праздника</h2>
    <div class="tariffs__container container">
      <div
          @pointerover="onPointerOver($event, index)"
          @pointerout="onPointerOut($event, index)"
          class="tariffs__tariff"
          v-for="(tariff, index) in tariffs"
          ref="tariffTemplateRef"
          v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}'
      >
        <div class="tariffs__tariff-name">
          {{ tariff.name }}
        </div>
        <div class="tariffs__tariff-price">
          от {{ tariff.price }} ₽
        </div>
        <div class="tariffs__tariff-old-price">
          {{ tariff.oldPrice }}
        </div>
        <ul class="tariffs__tariff-points">
          <li v-for="point in tariff.points">
            {{ point }}
          </li>
        </ul>
        <div class="tariffs__tariff-button-container">
          <button class="button --white">Заказать</button>
        </div>
      </div>
    </div>
  </div>
</template>

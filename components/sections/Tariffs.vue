<script setup lang="ts">
import { useModal } from 'vue-final-modal'
import LeadModal from '@/components/modals/Lead.vue'

const selectedPackageName = ref('')

let closeModalFunction

const closeModal = () => {
  document.documentElement.style.overflow = 'auto'
  closeModalFunction()
}

const openModal = (name: string) => {
  document.documentElement.style.overflow = 'hidden'
  selectedPackageName.value = name

  const { open, close } = useModal({
    component: LeadModal,
    attrs: {
      title: 'Оставить заявку',
      subtitle: `Вы выбрали пакет "${selectedPackageName.value}"`,
      packageName: `${selectedPackageName.value}`,
      onClosed: closeModal,
      onConfirm: closeModal,
    },
  })

  open()

  closeModalFunction = close
}

const tariffs = ref([
  {
    name: 'Пакет 1',
    price: '12 990',
    oldPrice: '15 000 ₽',
    points: [
        '30 мин одного персонажа',
        '30 мин на выбор: химическое шоу или шоу гигантских пузырей',
    ]
  },
  {
    name: 'Пакет 2',
    price: '28 990',
    oldPrice: '30 000 ₽',
    points: [
      '1,5 часа анимации одного персонажа (игры с ярким реквизитом, музыкальное сопровождение, танцы, мыльные пузыри, твистинг)',
      'Фокусник с кроликом 40 мин (волшебное вручение подарка; исчезновение и появление предметов; фокусы с веревками, шариками; летающие огоньки; лента изо рта; появление тростей, цветов, свечей)', ,
    ]
  },
  {
    name: 'Пакет 3',
    price: '45 900',
    oldPrice: '50 000 ₽',
    points: [
      '1.5 часа анимация 2 персонажа (игры с ярким реквизитом, музыкальное сопровождение, танцы, мыльные пузыри, твистинг, аквагрим)',
      '1 час бумажное белое шоу',
      'Белая бумажная дискотека (колонка, новая белая бумага 20 кг, конфетти, 2 ведущих с воздухо-пушкой)'
    ]
  }
])

const tarrifsGraduation = ref([
  {
    name: 'Пакет 1',
    nameHidden: 'Пакет 1 (Выпускной)',
    price: '14 000',
    oldPrice: '16499 ₽',
    points: [
      '1 час анимация 2 персонажа (музыкальное сопровождение, активные и разнообразные игры с реквизитом, смешные задания, современные танцы, поздравление с выпускным)',
    ]
  },
  {
    name: 'Пакет 2',
    nameHidden: 'Пакет 2 (Выпускной)',
    price: '25 000р',
    oldPrice: '27 999 ₽',
    points: [
      '1.5 часа анимация 2 персонажа и шоу пузырей (музыкальное сопровождение, активные и разнообразные игры с реквизитом, смешные задания, современные танцы, поздравление с выпускным и шоу мыльных пузырей (дети померяют «скафандр» на голову, лопнут пузыри с дымом, обрадуются салюту из пузырей, удивятся ручным пузырям и фигурам из пузырей, полетают на гигантской «ракете»)',
    ]
  },
  {
    name: 'Пакет 3',
    nameHidden: 'Пакет 3 (Выпускной)',
    price: '33 000',
    oldPrice: '35 999 ₽',
    points: [
      '2 часа 2 аниматора и крио-шоу (музыкальное сопровождение, активные и разнообразные игры с реквизитом, смешные задания, современные танцы, поздравление с выпускным и крио-шоу с изготовлением мороженого. В крио-шоу ребята разобьют замороженный банан, попробуют «еду космонавтов» (замороженные сладкие шарики), «почистят» зубы бешеной газировкой, исполнят свою мечту, лопнув «жемчужину желания» (мыльный шар, наполненный испарением), устроят «большой бабах» (выстрел пробки из большой колбы) и будут танцевать в «мегатумане» (большое облако испарения)! В завершение всех деток ждёт изготовление вкусного мороженого)',
    ]
  }
])

const tariffTemplateRef = useTemplateRef<HTMLDivElement>('tariffTemplateRef')
const tariffGraduationTemplateRef = useTemplateRef<HTMLDivElement>('tariffGraduationTemplateRef')

let mm = useGSAP().matchMedia()

const onPointerOver = (e: PointerEvent, index: number, isSpecial: boolean) => {
  mm.add('(min-width: 1200px)', () => {
    useGSAP().to(isSpecial ? tariffGraduationTemplateRef.value[index] : tariffTemplateRef.value[index], {
      scale: 1.05
    })
  })
}

const onPointerOut = (e: PointerEvent, index: number, isSpecial: boolean) => {
  mm.add('(min-width: 1200px)', () => {
    useGSAP().to(isSpecial ? tariffGraduationTemplateRef.value[index] : tariffTemplateRef.value[index], {
      scale: 1
    })
  })
}
</script>

<template>
  <div id="tariffs" class="tariffs">
    <h2 v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}'>Тарифы праздника</h2>
    <div class="tariffs__container container">
      <div
          @pointerover="onPointerOver($event, index, 0)"
          @pointerout="onPointerOut($event, index, 0)"
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
        <div class="tariffs__tariff-visit">выезд оплачивается отдельно</div>
        <div class="tariffs__tariff-button-container">
          <button @click="openModal(tariff.name)" class="button --white">Выбрать</button>
        </div>
      </div>
    </div>

    <h2 v-gsap.whenVisible.once.from='{ autoAlpha: 0, start: "top 80%", end: "bottom 10%"}' style="margin-top: 50px;">Выпускной</h2>
    <div class="tariffs__container container">
      <div
          @pointerover="onPointerOver($event, index, 1)"
          @pointerout="onPointerOut($event, index, 1)"
          class="tariffs__tariff"
          v-for="(tariff, index) in tarrifsGraduation"
          ref="tariffGraduationTemplateRef"
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
        <div class="tariffs__tariff-visit">выезд оплачивается отдельно</div>
        <div class="tariffs__tariff-button-container">
          <button @click="openModal(tariff.nameHidden)" class="button --white">Выбрать</button>
        </div>
      </div>
    </div>
  </div>
</template>

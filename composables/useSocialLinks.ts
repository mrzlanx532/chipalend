const onClickWhatsapp = () => {
    const a = document.createElement('a')
    a.href = 'https://wa.me/79031559009'
    a.target = '_blank'
    a.click()
}

const onClickTelegram = () => {
    const a = document.createElement('a')
    a.href = 'https://t.me/mrzlanx532'
    a.target = '_blank'
    a.click()
}

export default function () {
    return {
        onClickWhatsapp,
        onClickTelegram,
    }
}
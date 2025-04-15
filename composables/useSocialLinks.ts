export default function () {
    const config = useRuntimeConfig()

    const onClickWhatsapp = () => {
        const a = document.createElement('a')
        a.href = config.public.whatsappLink
        a.target = '_blank'
        a.click()
    }

    const onClickTelegram = () => {
        const a = document.createElement('a')

        a.href = config.public.telegramLink
        a.target = '_blank'
        a.click()
    }

    const getFormattedPhone = () => {
        let phone = config.public.phone
        let i = 0
        let result = ''
        for (let number of phone.split('')) {
            if (i === 0) {
                result = result + '+' + number
                i++
                continue;
            }

            if (i === 1) {
                result = result + ' (' + number
                i++
                continue;
            }

            if (i === 4) {
                result = result + ') ' + number
                i++
                continue;
            }

            if (i === 7) {
                result = result + '-' + number
                i++
                continue;
            }

            if (i === 9) {
                result = result + '-' + number
                i++
                continue;
            }

            result = result + number
            i++
        }

        return result
    }

    return {
        onClickWhatsapp,
        onClickTelegram,
        getFormattedPhone
    }
}
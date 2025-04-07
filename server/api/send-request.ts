import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
    const { sendMail } = useNodeMailer()

    const body = await readBody(event).catch(() => {
        console.error('Ошибка в чтении тела')
    })

    void sendMail({
        subject: 'Новая заявка',
        text: `Новая заявка \n\nИмя: ${body.name}\nТелефон: ${body.phone}"`,
        to: 'denis_danilov_97@mail.ru'
    })

    return body
})
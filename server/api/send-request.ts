import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
    const { sendMail } = useNodeMailer()

    const body = await readBody(event).catch(() => {
        console.error('Ошибка в чтении тела')
    })

    let text = `Новая заявка \n\nИмя: ${body.name}\nТелефон: ${body.phone}"`

    if (body.packageName) {
        text = text + `\nПакет: "${body.packageName}"`
    }

    void sendMail({
        subject: 'Новая заявка',
        to: 'denis_danilov_97@mail.ru',
        text
    })

    return body
})
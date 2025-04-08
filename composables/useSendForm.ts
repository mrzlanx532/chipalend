import { useNuxtApp } from '#app'
import { ref } from 'vue'

export default function () {

    const { $notyf } = useNuxtApp()

    const errors = ref({
        name: false,
        phone: false
    })

    let errorsIsExists = false

    const form = ref({
        name: '',
        phone: ''
    })

    const onSubmit = (packageName: string | null): bool =>  {

        errorsIsExists = false

        if (!form.value.name.length) {
            errors.value.name = true
            errorsIsExists = true
        }

        if (form.value.phone.length < 18) {
            errors.value.phone = true
            errorsIsExists = true
        }

        if (errorsIsExists) {
            $notyf.error({
                message: 'Заполните форму',
                duration: 3000,
                position: {
                    x: 'center',
                    y: 'bottom'
                },
            })
            return false
        }

        if (packageName) {
            form.value.packageName = packageName
        }

        void $fetch('api/send-request', {
            method: 'POST',
            body: form.value
        })

        $notyf.success({
            message: 'Заявка отправлена',
            duration: 3000,
            position: {
                x: 'center',
                y: 'bottom'
            },
        })

        form.value = {
            name: '',
            phone: ''
        }

        return true
    }

    const onFocus = (propertyName: string) => {
        errors.value[propertyName] = false
    }

    return {
        errors,
        form,

        onSubmit,
        onFocus
    }
}
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Mínimo 2 caracteres'),
  email: z.string().email('Email no válido'),
  message: z.string().min(10, 'Mínimo 10 caracteres'),
  recording: z.string().url('Debe ser una URL válida').optional().or(z.literal('')),
})

type ContactForm = z.infer<typeof schema>

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: ContactForm) => {
    console.log(data)
    reset()
  }

  return (
    <main className="min-h-screen bg-(--bg) px-8 py-16">

      <div className="max-w-xl">
        <span className="tag mb-4 block">// contacto</span>
        <h1 className="text-4xl font-bold text-(--text) tracking-tight mb-4">
          ¿Te has sentido así?
        </h1>
        <p className="text-base font-light text-(--links) leading-relaxed mb-12">
          Sugerencias, preguntas, o si quieres aparecer en el podcast.
          También puedes enviar el enlace a tu propia grabación.
        </p>

        {isSubmitSuccessful && (
          <div className="border border-(--border) p-4 mb-8 rounded-sm">
            <span className="text-sm text-(--accent) tracking-wider">
              // mensaje recibido. te escribo pronto.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className="text-md text-(--terra) tracking-widest uppercase">
              nombre
            </label>
            <input
              {...register('name')}
              placeholder="tu nombre"
              className="input-field border  rounded-md p-2 text-(--links)"
            />
            {errors.name && (
              <span className="text-xs text-(--terra) opacity-70">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-md text-(--terra) tracking-widest uppercase">
              email
            </label>
            <input
              {...register('email')}
              placeholder="tu@email.com"
              className="input-field border  rounded-md p-2 text-(--links)"
            />
            {errors.email && (
              <span className="text-xs text-(--terra) opacity-70">{errors.email.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-md text-(--terra) tracking-widest uppercase">
              mensaje
            </label>
            <textarea
              {...register('message')}
              placeholder="lo que quieras contar..."
              rows={5}
              className="input-field border text-(--links) rounded-md p-2 resize-none"
            />
            {errors.message && (
              <span className="text-xs text-(--terra) opacity-70">{errors.message.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-md text-(--terra) tracking-widest uppercase">
              tu grabación <span className="opacity-50 normal-case">— opcional</span>
            </label>
            <input
              {...register('recording')}
              placeholder="https://enlace-a-tu-grabacion.com"
              className="input-field border rounded-md p-2 border text-(--links)"
            />
            {errors.recording && (
              <span className="text-xs text-(--terra) opacity-70">{errors.recording.message}</span>
            )}
          </div>

          <button type="submit" className="btn-primary w-fit mt-2">
            enviar mensaje →
          </button>

        </form>
      </div>

    </main>
  )
}

export default Contact
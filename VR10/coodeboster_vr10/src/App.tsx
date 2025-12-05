import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


import styles from './form.module.css'
import { useState } from 'react'

const schema = yup.object({
   nome: yup.string().required('Nome obrigatório'),
   email: yup.string().required('E-mail obrigatorio').email('E-mail inválido'),
   password: yup.string().required('Senha obrigatório').min(6, 'No minimo 6 caracteres'),
   passwordConfirm: yup.string()
     .oneOf([yup.ref('password')], 'As senhas precisam ser iguais')
     .required('Confirmação de senha obrigatória')
}).required()


function App() {

  const [isError, setError] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function onSubmit() {
    setError(true)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contentForm}>
       <div className={styles.formGroup}>
         <input type="text" placeholder='Insira seu nome' {...register("nome")} className={(errors.name) ? `${styles.inputError}` : ''}/>
         <span className={styles.labelError}>{errors.nome?.message}</span>
       </div>
       <div className={styles.formGroup} >
         <input type="text" placeholder='Insira seu e-mail' {...register("email")} className={(errors.email) ? `${styles.inputError}` : ''}/>
         <span className={styles.labelError}>{errors.email?.message}</span>
       </div>
       <div className={styles.formGroup}>
         <input type="password" placeholder='Insira seu password'  {...register("password")} className={(errors.password) ? `${styles.inputError}` : ''}/>
         <span className={styles.labelError}>{errors.password?.message}</span>
       </div>
       <div className={styles.formGroup}>
         <input type="password" placeholder='Confirma sua senha' {...register("passwordConfirm")} className={(errors.passwordConfirm) ? `${styles.inputError}` : ''}/>
         <span className={styles.labelError}>{errors.passwordConfirm?.message}</span>
       </div>

       <button type='submit'>Enviar formulário</button>

       {
          isError && <p>Enviado com o sucesso</p>
       }
      </form>
    </div>
  )
}

export default App

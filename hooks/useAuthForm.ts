import { EventCallable, Store } from 'effector'
import { useUnit } from 'effector-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { IInputs, ISignUpFx } from '@/types/authPopup'
import { useEarthoOne } from '@eartho/one-client-react'

// export const useAuthForm = (
//   initialSpinner: Store<boolean>,
//   isSideActive: boolean,
//   event: EventCallable<ISignUpFx>
// ) => {
//   const spinner = useUnit(initialSpinner)
//   const { isConnected, user, connectWithPopup } = useEarthoOne()

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm<IInputs>()

//   console.log('isConnected:', isConnected)
//   console.log('user:', user)

//   useEffect(() => {
//     if (isSideActive) {
//       if (isConnected && user?.user) {  // Проверка, что user и user.user существуют
//         event({
//           name: user.user.displayName || '',  // Использование опциональной цепочки
//           email: user.user.email || '',
//           password: user.user.uid || '',
//           isOAuth: true,
//         })
//       }
//     }
//   }, [isConnected, isSideActive, user, event]) // Добавлены зависимости

//   const handleSignupWithOAuth = () =>
//     connectWithPopup({
//       accessId: `${process.env.NEXT_PUBLIC_OAUTH_ACCESS_ID}`,
//     })

//   return {
//     spinner,
//     register,
//     errors,
//     handleSubmit,
//     handleSignupWithOAuth,
//   }
// }

export const useAuthForm = (
  initialSpinner: Store<boolean>,
  isSideActive: boolean,
  event: EventCallable<ISignUpFx>
) => {
  const spinner = useUnit(initialSpinner)
  const { isConnected, user, connectWithPopup } = useEarthoOne()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IInputs>()

  useEffect(() => {
    if (isSideActive) {
      if (isConnected && user?.user) {
        event({
          name: user.user.displayName,
          email: user.user.email,
          password: user.user.uid,
          isOAuth: true,
        })
      }
    }
  }, [isConnected])

  const handleSignupWithOAuth = () =>
    connectWithPopup({
      accessId: `${process.env.NEXT_PUBLIC_OAUTH_ACCESS_ID}`,
    })

  return {
    spinner,
    register,
    errors,
    handleSubmit,
    handleSignupWithOAuth,
  }
}

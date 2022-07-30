import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
  useToast,
  useColorModeValue,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'

export const HookForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const toast = useToast()
  const color = useColorModeValue('gray.400', 'whiteAlpha.300')
  const sendEmail = formData => {
    console.log(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text)
          toast({
            title: 'Message Sent!',
            description: 'I will get back to you as soon as I can! :-)',
            status: 'success',
            variant: 'subtle',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          })
          reset()
        },
        error => {
          console.log(error.text)
          toast({
            title: 'Error',
            description: 'An error occured. Please try again later.',
            status: 'error',
            variant: 'subtle',
            duration: 3000,
            isClosable: true,
            position: 'bottom',
          })
          reset()
        }
      )
  }

  const onSubmit = async data => {
    return new Promise(resolve => {
      sendEmail(data)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.from_name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          borderColor={color}
          id="name"
          placeholder="your name"
          {...register('from_name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.from_name && errors.from_name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.from_email} mt={6}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          borderColor={color}
          id="from_email"
          placeholder="someone@example.com"
          {...register('from_email', {
            required: 'This is required',
            pattern: {
              value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              message: 'Invalid Email',
            },
          })}
        />
        <FormErrorMessage>
          {errors.from_email && errors.from_email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} mt={6} mb={2}>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          borderColor={color}
          id="message"
          placeholder="write your message in here"
          resize="none"
          h="20em"
          {...register('message', {
            required: 'This is required',
          })}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  )
}

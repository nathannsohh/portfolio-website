import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser'

export const HookForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const sendEmail = formData => {
    emailjs
      .send(
        'service_5agm226',
        'template_58fwgxo',
        formData,
        'EyE5YCqXjwEdL0fuX'
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
    reset()
  }

  const onSubmit = async data => {
    return new Promise(resolve => {
      setTimeout(() => {
        sendEmail(data)
        resolve()
      }, 2000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.from_name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
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

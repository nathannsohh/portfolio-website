import { Container, Heading } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layouts/article"
import { HookForm } from "../components/hook-form"

const Contact = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={23} mb={4}>Contact Me!</Heading>
                <HookForm />
            </Container>
        </Layout>
        
    )
}

export default Contact

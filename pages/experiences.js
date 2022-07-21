import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Container, Heading, Box, useColorModeValue } from "@chakra-ui/react";
import Paragraph from "../components/paragraph";
import { BioYear } from "../components/bio";

const Experience = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={25} mb={6}>Work Experience</Heading>
                    <Section>
                        <Heading fontSize={18} variant="section-title">Fullstack Developer Intern @ Kinexcs</Heading>
                        <BioYear>May 2022 - Present</BioYear>
                        <Box 
                            borderRadius="lg"
                            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                            p={3}
                            mb={6}
                            align="center"
                            >
                                <Paragraph>

                                </Paragraph>
                        </Box>
                    </Section>
            </Container>
        </Layout>
    )
}

export default Experience
import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import projectionPlannerScreenshot from '../public/images/investment-projection-cover-pic.png'
import YOUtilityCover from '../public/images/YOUtility-cover-pic.png'
import backendServerCover from '../public/images/backend-server-cover-pic.png'
import portfolioCover from '../public/images/portfolio-website-cover-pic.png'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="youtility"
              title="YOUtility"
              thumbnail={YOUtilityCover}
            >
              An Android application that tracks water and electricity usage of
              households
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="investment-projection"
              title="Investment Projection"
              thumbnail={projectionPlannerScreenshot}
            >
              A website that projects user's expected investment returns based
              on base and monthly inputs
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="portfolio-website"
              title="Portfolio Website"
              thumbnail={portfolioCover}
            >
              My very own portfolio website!
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flask-restful-api"
              title="Backend Server"
              thumbnail={backendServerCover}
            >
              A RESTful API backend application built to learn to develop
              backend servers
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'

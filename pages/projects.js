import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import projectionPlannerScreenshot from '../public/images/project-planner-screenshot.png'
import YOUtilityCover from '../public/images/YOUtility-cover-pic.png'
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
              Project description
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="investment-projection"
              title="Investment Projection"
              thumbnail={projectionPlannerScreenshot}
            >
              Project Description 2
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="portfolio-website"
              title="Portfolio Website"
              thumbnail={projectionPlannerScreenshot}
            >
              Project Description 3
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="flask-restful-api"
              title="Flask Restful API"
              thumbnail={projectionPlannerScreenshot}
            >
              Project Description 3
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
export { getServerSideProps } from '../components/chakra'

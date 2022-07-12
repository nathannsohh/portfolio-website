import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import projectionPlannerScreenshot from '../public/images/project-planner-screenshot.png'
import YOUtilityScreenshot from '../public/images/YOUtilityScreenshots.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="youtility"
              title="YOUtility"
              thumbnail={YOUtilityScreenshot}
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'

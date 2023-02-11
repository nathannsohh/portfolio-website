import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Recipely">
      <Container>
        <Title>
          Recipely <Badge>2022</Badge>
        </Title>
        <P>
          Recipely was a project created as part of NTU's Advanced Software
          Engineering (CZ3002) module. It is a web-based application which helps
          to repurpose seemingly purposeless leftover ingredients after cooking
          by suggesting recipes based on those very ingredients and other
          ingredients that the user may have at home. It also helps users track
          their food inventory and recommends recipes based on the ingreients
          they have at home. The recipes are generated using the Spoonacular
          API.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, NodeJS, Firebase, AWS RDS</span>
          </ListItem>
        </List>
        <WorkImage src="/images/recipely-screen-1.png" alt="Youtility-1" />
        <WorkImage src="/images/recipely-screen-2.png" alt="Youtility-2" />
        <WorkImage src="/images/recipely-screen-3.png" alt="Youtility-3" />
        <WorkImage src="/images/recipely-screen-4.png" alt="Youtility-4" />
        <WorkImage src="/images/recipely-screen-5.png" alt="Youtility-5" />
      </Container>
    </Layout>
  )
}

export default Project

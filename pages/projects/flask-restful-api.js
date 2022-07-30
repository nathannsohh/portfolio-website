import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Flask Restful API">
      <Container>
        <Title>
          Backend Server <Badge>2022</Badge>
        </Title>
        <P>
          This Flask application was my first dive into backend development and
          it was a way for me to learn and understand what a backend server was
          and how to create CRUD API endpoints. Through this, I also learned how
          to use tools such as Postman and pgAdmin to test the server and
          visualise the database.
        </P>
        <List my={4}>
          <ListItem>
            <Meta>Repository</Meta>
            <Link href="https://github.com/nathannsohh/Kinexcs-backend-assessment">
              https://github.com/nathannsohh/Kinexcs-backend-assessment
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, Marshmallow, SQLAlchemy, PostgreSQL</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/backend-server-screenshot-1.png"
          alt="backend-server-1"
        />
        <WorkImage
          src="/images/backend-server-screenshot-2.png"
          alt="backend-server-2"
        />
        <WorkImage
          src="/images/backend-server-screenshot-3.png"
          alt="backend-server-3"
        />
      </Container>
    </Layout>
  )
}

export default Project

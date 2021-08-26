import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const Poojai: NextPage = () => (
  <Layout>

  <div className="max-w-2xl mx-auto mt-12 space-y-2">
         <Heading subheading title="Poojai List" />
        <Projects />
      </div>
</Layout>
)

export default Poojai

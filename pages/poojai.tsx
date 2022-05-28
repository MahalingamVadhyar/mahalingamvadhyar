import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'
import Apara from '~/components/Apara'

const Poojai: NextPage = () => (
  <Layout>

  <div className="max-w-2xl mx-auto mt-12 space-y-2">
         <Heading subheading title="Poojai List" />
        <Projects />
        <div className="mt-12"></div><br/>
         <Heading subheading title="Apara Karma List" />
         <Apara/>
      </div>
</Layout>
)

export default Poojai

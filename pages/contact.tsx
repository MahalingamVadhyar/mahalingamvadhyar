import { NextPage } from 'next'
import Heading from '~/components/Heading'
import Layout from '~/components/Layout'
import Projects from '~/components/Projects'

const About: NextPage = () => {
  return (
    <Layout>
      <div className="pt-8">
        <Heading title="About Me" />
        <p className="text-gray-400 text-lg mb-4">I am Mahalingam Vadhyar with experience upto 40 years in the field of Prohit in Coimbatore.</p>
        <div className="mb-14">
         <Heading subheading title="My Son's" />
        <Projects />
      </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Location</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">9c S.A Nagar Muthusamy colony Selvapuram Coimbatore 641026</dd>
          </div>
        </dl>
      </div>
      </div>
    </Layout>
  )
}

export default About

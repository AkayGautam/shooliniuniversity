import React from 'react'
import { DynamicApi } from '../../helper/dynamicreq'
import SchoolDetail from '../../LayoutPages/School-Programe/SchoolDetail'

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params
  let templateName = ''
  try {
    templateName = await fetch(
      'https://shooliniuniversity.com/media/GetTemplateNameAPI',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify({
          auth: 'shoolini@999',
          url: slug,
        }),
      },
    ).then((res) => res.json())
  } catch (e) {
    console.log(e)
    return {
      notFound: true,
    }
  }

  const data = await DynamicApi(
    templateName.success?.[0].templatename,
    templateName.success?.[0].id,
    slug,
  )
  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
    }
  }

  return {
    props: {
      templateName: templateName.success[0]?.templatename,
      id: templateName.success?.[0]?.id,
      data: data.success,

     
    },
    
  }

  console.log(data, "bbbbb")
}

const CourseMain = ({ id, data }) => {
  return (
    <div>
      <SchoolDetail id={id} data={data} />
    </div>
  )
}

export default CourseMain

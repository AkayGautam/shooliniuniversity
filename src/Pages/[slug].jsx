import React from "react";
import Academics from "../components/Academics";
import AcademicsSub from "../components/Academics-sub";
import { DynamicApi } from "../helper/dynamicreq";
import AdmissionProcess from "../LayoutPages/Admission/Admission-Process/AdmissionProcess";
import ProgrameDetails from "../LayoutPages/Programmes/ProgrameDetails";
import FacultyAll from "../LayoutPages/FacultyAll/FacultyAll";
import CampusTemplate from "../LayoutPages/Campus/Community-Programes/CampusTemplate";
import CampusApiTemplate from "../LayoutPages/Admission/Admission-Process/CampusApiTemplate";
import { GetFaq } from "../Api";

export const getServerSideProps = async (ctx) => {
  const { slug } = ctx.params;
  let templateName = "";
  let ldJson = "";
  try {
    templateName = await fetch(
      "https://shooliniuniversity.com/media/GetTemplateNameAPI",
      {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          auth: "shoolini@999",
          url: slug,
        }),
      }
    ).then((res) => res.json());
    ldJson = await GetFaq(slug).then((res) => {
      if (res.success) {
        let data = res.success;
        return data;
      }

      return "";
    });
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }

  const data = await DynamicApi(
    templateName.success?.[0].templatename,
    templateName.success?.[0].id,
    slug
  );
  if (!data) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      templateName: templateName.success[0]?.templatename,
      id: templateName.success?.[0]?.id,
      data: data.success,
      ldJson: ldJson,
    },
  };
};

function renderComponnet(key, id, data, ldJson, metric) {
  switch (key) {
    case "generic":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "campus-life":
      return <CampusTemplate id={id} data={data} ldJson={ldJson} />;

    case "stream2":
      return <Academics id={id} data={data} ldJson={ldJson} />;

    case "stream":
      return <AcademicsSub id={id} data={data} ldJson={ldJson} />;

    case "homepage":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "course":
      return <ProgrameDetails id={id} data={data} ldJson={ldJson} />;

    case "faqs":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "faculty-all":
      return <FacultyAll id={id} data={data} ldJson={ldJson} />;

    case "placements":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "admissions":
      return <CampusApiTemplate id={id} data={data} ldJson={ldJson} />;

    case "courses":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "photo-gallery":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "video-gallery":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "apply-now":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "contact":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "leadership":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "search-results":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;

    case "fee":
      return <AdmissionProcess id={id} data={data} ldJson={ldJson} />;
  }
}
function DynamicType({ templateName, id, data, ldJson }) {
  return <>{renderComponnet(templateName, id, data, ldJson)}</>;
}

export default DynamicType;

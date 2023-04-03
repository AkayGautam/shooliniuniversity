import React from 'react'
import Collapsible from 'react-collapsible'

import { Styless } from '../style/communityProgrames'
import { FaAngleDown } from 'react-icons/fa'
import Link from 'next/link'

const CommunityLinks = () => {
  return (
    <>
      <Styless>
        <div className="healthWell colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible
            trigger={["Collaboration and health services", <FaAngleDown />]}
          >
            <Link href="/health-services">Documentation</Link>
            <Link href="/health-services-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Health outreach programs", <FaAngleDown />]}>
            <Link href="/health-outreach-programs">Documentation</Link>
            <Link href="/health-outreach-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Shared sports facilities", <FaAngleDown />]}>
            <Link href="/health-and-well-being-shared-sports-facilities">
              Documentation
            </Link>
            <Link href="/health-and-well-being-shared-sports-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Free sexual healthcare for students", <FaAngleDown />]}
          >
            <Link href="/health-and-well-being-free-sexual-healthcare-for-students">
              Documentation
            </Link>
            <Link href="/health-and-well-being-free-sexual-healthcare-for-students-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={["Mental Health support", <FaAngleDown />]}>
            <Link href="/health-and-well-being-mental-health-support">
              Documentation
            </Link>
            <Link href="/health-and-well-being-mental-health-support-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={["Smoke free policy", <FaAngleDown />]}>
            <Link href="/health-and-well-being-smoke-free-policy">
              Documentation
            </Link>
            <Link href="/Health-well-being">Activity</Link>
          </Collapsible>
        </div>

        <div className="energy-efficiency colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible
            trigger={["Energy efficiency standards", <FaAngleDown />]}
          >
            <Link href="/energy-efficiency-standards">Documentation</Link>
            <Link href="/energy-efficiency-standards-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={["Upgradation of existing buildings", <FaAngleDown />]}
          >
            <Link href="/upgradation-of-existing-buildings">Documentation</Link>
            <Link href="/upgradation-of-existing-buildings-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Process for carbon management", <FaAngleDown />]}
          >
            <Link href="/process-for-carbon-management"> Documentation </Link>
            <Link href="/process-for-carbon-management-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Energy efficiency plan", <FaAngleDown />]}>
            <Link href="/energy-efficiency-plan"> Documentation </Link>
            <Link href="/energy-efficiency-plan-activity"> Activity </Link>
          </Collapsible>

          <Collapsible trigger={["Energy audit", <FaAngleDown />]}>
            <Link href="/areas-where-energy-wastage"> Documentation </Link>
            <Link href="/areas-where-energy-wastage-activity"> Activity </Link>
          </Collapsible>

          <Collapsible trigger={["Divestment policy", <FaAngleDown />]}>
            <Link href="/divestment-policy"> Documentation </Link>
            <Link href="/divestment-policy-activity"> Activity </Link>
          </Collapsible>

          <Collapsible
            trigger={["Programs for energy efficiency", <FaAngleDown />]}
          >
            <Link href="/programs-for-energy-efficiency"> Documentation </Link>
            <Link href="/programs-for-energy-efficiency-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={["Promoting public pledge", <FaAngleDown />]}>
            <Link href="/promoting-public-pledge"> Documentation </Link>
            <Link href="/promoting-public-pledge-activity"> Activity </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              "Direct services to improve energy efficiency",
              <FaAngleDown />,
            ]}
          >
            <Link href="/direct-services-to-improve-energy-efficiency">
              Documentation
            </Link>
            <Link href="/direct-services-to-improve-energy-efficiency-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Energy-efficient technology", <FaAngleDown />]}
          >
            <Link href="/energy-efficient-technology"> Documentation </Link>
            <Link href="/energy-efficient-technology-activity"> Activity </Link>
          </Collapsible>
        </div>

        <div className="csr-initiatives colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible
            trigger={["Involvement in SDG policy development", <FaAngleDown />]}
          >
            <Link href="/involvement-in-sdg-policy-development">
              Documentation
            </Link>
            <Link href="/involvement-in-sdg-policy-development-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Cross-sectoral dialogue participation", <FaAngleDown />]}
          >
            <Link href="/cross-sectoral-dialogue-participation">
              Documentation
            </Link>
            <Link href="/cross-sectoral-dialogue-participation-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={["Collaborations", <FaAngleDown />]}>
            <Link href="/collaborations"> Documentation </Link>
            <Link href="/collaborations-activity"> Activity </Link>
          </Collapsible>

          <Collapsible trigger={["Comparative approaches", <FaAngleDown />]}>
            <Link href="/comparative-approaches"> Documentation </Link>
            <Link href="/comparative-approaches-activity"> Activity </Link>
          </Collapsible>

          <Collapsible trigger={["Partnership with NGOs", <FaAngleDown />]}>
            <Link href="/partnership-with-ngos"> Documentation </Link>
            <Link href="/partnership-with-ngos-activity"> Activity </Link>
          </Collapsible>

          <Collapsible
            trigger={["Commitment to meaningful education", <FaAngleDown />]}
          >
            <Link href="/commitment-to-meaningful-education">
              Documentation
            </Link>
            <Link href="/commitment-to-meaningful-education-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Programs addressing sustainability", <FaAngleDown />]}
          >
            <Link href="/programs-addressing-sustainability">
              Documentation
            </Link>
            <Link href="/programs-addressing-sustainability-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Outreach educational activities", <FaAngleDown />]}
          >
            <Link href="/outreach-educational-activities"> Documentation </Link>
            <Link href="/outreach-educational-activities-activity">
              Activity
            </Link>
          </Collapsible>
        </div>

        <div className="inclusivity-gender-equality colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible trigger={["Women's application rate", <FaAngleDown />]}>
            <Link href="/womens-application-rate"> Documentation </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Policy for Women's Access and Participation plan",
              <FaAngleDown />,
            ]}
          >
            <Link href="/policy-for-womens-access-and-participation-plan">
              Documentation
            </Link>
            <Link href="/compolicy-for-womens-access-and-participation-plan-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={[" Women access schemes ", <FaAngleDown />]}>
            <Link href="/women-access-schemes"> Documentation </Link>
            <Link href="/women-access-schemes-activity"> Activity </Link>
          </Collapsible>

          <Collapsible
            trigger={["Encourage women applications", <FaAngleDown />]}
          >
            <Link href="/encourage-women-applications"> Documentation </Link>
            <Link href="/encourage-women-applications-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={[
              "Non-discrimination policy against women",
              <FaAngleDown />,
            ]}
          >
            <Link href="/non-discrimination-policy-against-women">
              Documentation
            </Link>
            <Link href="/non-discrimination-policy-against-women-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              "Non-discrimination policy against transgender",
              <FaAngleDown />,
            ]}
          >
            <Link href="/non-discrimination-policy-against-transgender">
              Documentation
            </Link>
            <Link href="/non-discrimination-policy-against-transgender-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Maternity and Paternity policy", <FaAngleDown />]}
          >
            <Link href="/maternity-and-paternity-policy"> Documentation </Link>
            <Link href="/maternity-and-paternity-policy-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Childcare facilities for staff and faculty",
              <FaAngleDown />,
            ]}
          >
            <Link href="/childcare-facilities-for-staff-and-faculty">
              Documentation
            </Link>
            <Link href="/childcare-facilities-for-staff-and-faculty-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={["Women mentoring schemes", <FaAngleDown />]}>
            <Link href="/women-mentoring-schemes"> Documentation </Link>
            <Link href="/women-mentoring-schemes-activity"> Activity </Link>
          </Collapsible>

          <Collapsible
            trigger={["Tracking Women’s Progress Rate", <FaAngleDown />]}
          >
            <Link href="/tracking-of-womens-likelihood"> Documentation </Link>
            <Link href="/tracking-of-womens-likelihood-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Policy protecting who report discrimination",
              <FaAngleDown />,
            ]}
          >
            <Link href="/policy-protecting-who-report-discrimination">
              Documentation
            </Link>
            <Link href="/policy-protecting-who-report-discrimination-activity">
              Activity
            </Link>
          </Collapsible>
        </div>

        <div className="safe-water colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible trigger={[" Total volume of water", <FaAngleDown />]}>
            <Link href="/total-volume-of-water-used-in-university">
              Documentation
            </Link>
            <Link href="/process-in-place-to-treat-waste-water-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Process in place to treat waste water",
              <FaAngleDown />,
            ]}
          >
            <Link href="/process-in-place-to-treat-waste-water">
              Documentation
            </Link>
            <Link href="/process-in-place-to-treat-waste-water-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Prevention of Water Pollution", <FaAngleDown />]}
          >
            <Link href="/prevention-of-water-pollution"> Documentation </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Free drinking water for everyone", <FaAngleDown />]}
          >
            <Link href="/free-drinking-water-for-everyone">Documentation</Link>
            <Link href="/free-drinking-water-for-everyone-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Building standards to minimise water use",
              <FaAngleDown />,
            ]}
          >
            <Link href="/building-standards-to-minimise-water-use">
              Documentation
            </Link>
            <Link href="/building-standards-to-minimise-water-use-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Landscapes to minimise water usage", <FaAngleDown />]}
          >
            <Link href="/landscapes-to-minimise-water-usage">
              Documentation
            </Link>
            <Link href="/landscapes-to-minimise-water-usage-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Maximisation of Water Reuse", <FaAngleDown />]}
          >
            <Link href="/maximisation-of-water-reuse"> Documentation </Link>
            <Link href="/building-standards-to-minimise-water-use-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={[" Reuse of water", <FaAngleDown />]}>
            <Link href="/reuse-of-water"> Documentation </Link>
          </Collapsible>

          <Collapsible trigger={[" Good water management", <FaAngleDown />]}>
            <Link href="/good-water-management"> Documentation </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Promoting conscious water usage ", <FaAngleDown />]}
          >
            <Link href="/promoting-conscious-water-usage"> Documentation </Link>
            <Link href="/promoting-conscious-water-usage-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Water conservation off campus", <FaAngleDown />]}
          >
            <Link href="/water-conservation-off-campus"> Documentation </Link>
            <Link href="/water-conservation-off-campus-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={[
              " Sustainable water extraction technologies",
              <FaAngleDown />,
            ]}
          >
            <Link href="/sustainable-water-extraction-technologies">
              Documentation
            </Link>
            <Link href="/sustainable-water-extraction-technologies-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={[" Water Security", <FaAngleDown />]}>
            <Link href="/water-security"> Documentation </Link>
          </Collapsible>
        </div>

        <div className="climate-action colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible trigger={[" Low Carbon Energy ", <FaAngleDown />]}>
            <Link href="/low-carbon-energy">Documentation</Link>
            <Link href="/low-carbon-energy-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={["Activates on climate actions ", <FaAngleDown />]}
          >
            <Link href="/activates-on-climate-actions">Documentation</Link>
            <Link href="/activates-on-climate-actions-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Climate action Plan", <FaAngleDown />]}>
            <Link href="/climate-action-plan"> Documentation </Link>
            <Link href="/climate-action-plan-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={[
              "Cooperative planning for climate change ",
              <FaAngleDown />,
            ]}
          >
            <Link href="/cooperative-planning-for-climate-change">
              Documentation
            </Link>
            <Link href="/cooperative-planning-for-climate-change-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={[" Collaboration with Govt/local bodies", <FaAngleDown />]}
          >
            <Link href="/collaboration-with-govtlocal-bodies">
              Documentation
            </Link>
            <Link href="/collaboration-with-govtlocal-bodies-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible trigger={[" Collaboration with NGOs", <FaAngleDown />]}>
            <Link href="/collaboration-with-ngos">Documentation</Link>
            <Link href="/collaboration-with-ngos-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Green House Protocols ", <FaAngleDown />]}>
            <Link href="/green-house-protocols"> Documentation </Link>
            <Link href="/green-house-protocols-activity">Activity</Link>
          </Collapsible>
        </div>

        <div className="responsible-consumption colapseSidebar hidecurrent">
          <h5> Categories Links </h5>
          <Collapsible
            trigger={[
              "Ethical Sourcing for food and supplies",
              <FaAngleDown />,
            ]}
          >
            <Link href="/ethical-sourcing-for-food-and-supplies">
              Documentation
            </Link>
            <Link href="/ethical-sourcing-for-food-and-supplies-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Waste and Hazardous Material  ", <FaAngleDown />]}
          >
            <Link href="/waste-and-hazardous-material">Documentation</Link>
            <Link href="/waste-and-hazardous-material-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Waste disposal recycling ", <FaAngleDown />]}>
            <Link href="/waste-disposal-recycling"> Documentation </Link>
            <Link href="/waste-disposal-recycling-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["Disposable minimisation ", <FaAngleDown />]}>
            <Link href="/disposable-minimisation">Documentation</Link>
            <Link href="/disposable-mnimisation-activity">Activity</Link>
          </Collapsible>

          <Collapsible
            trigger={[" Outsourced services and supplies  ", <FaAngleDown />]}
          >
            <Link href="/outsourced-services-and-supplies">Documentation</Link>
            <Link href="/outsourced-services-and-supplies-activity">
              Activity
            </Link>
          </Collapsible>

          <Collapsible
            trigger={["Waste recycling in campus ", <FaAngleDown />]}
          >
            <Link href="/waste-recycling-in-campus">Documentation</Link>
            <Link href="/waste-recycling-in-campus-activity">Activity</Link>
          </Collapsible>

          <Collapsible trigger={["SDG Report ", <FaAngleDown />]}>
            <Link href="/sdg-report"> Documentation </Link>
            <Link href="/sdg-report-activity">Activity</Link>
          </Collapsible>
        </div>
      </Styless>
    </>
  )
}

export default CommunityLinks

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["shooliniuniversity.com"],
  },
  async rewrites() {
    return [
      {
        source: "/mba-admission",
        destination: "/html/index.html",
      },
      {
        source: "/how-to-apply",
        destination: "/hta/index.html",
      },
      {
        source: "/gmb",
        destination: "/gmb/index.html",
      },
      {
        source: "/apply",
        destination: "/apply/index.html",
      },
      {
        source: "/engineering-admission",
        destination: "/engineering-admission/index.html",
      },
      {
        source: "/brp",
        destination: "/brp/index.html",
      },
      {
        source: "/biotechnology-admission",
        destination: "/biotechnology-admission/index.html",
      },
      {
        source: "/apply-admission-online",
        destination: "/apply-admission-online/index.html",
      },
      {
        source: "/phd-admission",
        destination: "/phd-admission/index.html",
      },
      {
        source: "/thankyou",
        destination: "/thankyou/index.html",
      },
      {
        source: "/VE-coaching",
        destination: "/VE-coaching/index.html",
      },
      {
        source: "/redirect", 
        destination: "/redirect/index.html",
      },
      {
        source: "/apply-admission", 
        destination: "/apply-addmission/index.html",
      },
      {
        source: "/srp-test", 
        destination: "/srp-lp/index.html",
      },
      {
        source: "/admissions-test", 
        destination: "/admissions/index.html",
      }
    ];
  },

  async redirects() {
    return [
      {
        source: "/faculty-of-applied-sciences-biotechnology",
        destination: "/faculty-members-applied-sciences-biotechnology",
        permanent: true,
      },
      {
        source: "/faculty-of-management-sciences-liberal-arts",
        destination: "/faculty-members-management-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-engineering-technology",
        destination: "/faculty-members-engineering-technology",
        permanent: true,
      },
      {
        source: "/faculty-of-basic-sciences",
        destination: "/faculty-members-basic-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-pharmaceutical-sciences",
        destination: "/faculty-members-pharmaceutical-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-law",
        destination: "/faculty-members-law",
        permanent: true,
      },
      {
        source: "/faculty-of-yogananda-school-of-ai-computer-and-data-sciences",
        destination: "/faculty-members-ai-computer-and-data-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-advanced-chemical-sciences",
        destination: "/faculty-members-advanced-chemical-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-agriculture-1",
        destination: "/faculty-of-agriculture",
        permanent: true,
      },
      {
        source: "/faculty-of-applied-sciences-and-biotechnology-1",
        destination: "/faculty-of-applied-sciences-and-biotechnology",
        permanent: true,
      },
      {
        source: "/faculty-of-management-sciences-and-liberal-arts",
        destination: "/faculty-of-management-sciences",
        permanent: true,
      },
      {
        source: "/legal-sciences",
        destination: "/faculty-of-legal-sciences",
        permanent: true,
      },
    ];
  },
 
  
};

module.exports = nextConfig;

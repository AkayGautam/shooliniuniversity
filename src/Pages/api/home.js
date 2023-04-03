import { programApi, testimonialApi } from "../../Api";

export default async function handler(req, res) {
  const programs = await programApi();
  const testimonial = await testimonialApi();
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  res.status(200).json({
    programs,
    testimonials: testimonial
  });
}

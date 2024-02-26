import Bounded from "../Bounded"
import Heading from "../Heading"

const Education = () => {

  const data = {
    heading: "Education",
    item: [
      {
        title: "The Oxford ",
        time_period: "04/2018 - 09/2021",
        institution: "",
        description: "As a member of the SDET team, my primary responsibilities include conducting webservice testing using SOAP UI and automating the process through Groovy scripting. Additionally, I am tasked with formulating test plans, designing test scenarios, ensuring requirements traceability, and integrating with GIT.",
      }
    ]
  }

  return (
    <Bounded>
      <Heading as="h2" size="lg">
        {data.heading}
      </Heading>

      {data.item.map((item, index) => (
        <div key={index} className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.time_period}</span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span>{item.institution}</span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            {item.description}
          </div>
        </div>
      ))}
    </Bounded>
  )
}

export default Education
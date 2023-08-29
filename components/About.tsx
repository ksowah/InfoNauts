import Image from "next/image";

const About_Block = () => {

  const Member = ({
    name,
    major,
    img,
  }: {
    name: string;
    major: string;
    img: string;
  }) => {
    return (
      <div className="space-y-6 flex flex-col items-center ">
        <div className="p-1 cursor-pointer bg-primary rounded-full">
          <div className="relative overflow-hidden hover:scale-105 duration-300 h-[12rem] w-[12rem] rounded-full ">
            <Image
              src={img}
              alt="headshot"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <div>
          <p className="text-lg font-extrabold text-center">{name}</p>
          <p className="text-lg font-extrabold text-center">{major}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-[2rem] w-full bg-white md:px-[8rem]">
      <div className="p-[4px] md:px-[2rem]">
        <h1 className="text-blacl text-center text-[2rem] font-bold">
          Background Statement
        </h1>

        <div>
          In an era defined by rapid change and evolving career landscapes,
          education's role in shaping individuals' success is paramount. Yet,
          the mismatch between traditional academic paths and real-world
          employability persists, leaving students, institutions, and industries
          disconnected. Recognizing this gap as a catalyst for transformation,
          the Educational Enhancement Project emerges as a beacon of change.
          Powered by data-driven insights, we aim to empower educational
          institutions to strategically allocate resources and reshape programs,
          ensuring they align with industry demands.
        </div>

        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          Our Mission:
        </h2>
        <p>
          At the core of our project lies a commitment to empowering educational
          institutions with actionable insights. Our mission is multi-fold: we
          aim to empower institutions to allocate resources strategically,
          ensuring that every department receives the support it needs to excel.
          Additionally, we strive to facilitate program restructuring that
          aligns curricula with the demands of industries, resulting in
          graduates who are not only well-prepared for the workforce but also
          primed for success.
        </p>
      </div>

      <div className="p-[4px] md:px-[2rem]">
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          How We Empower Institutions:
        </h2>

        <p>
          Our data-driven approach enables institutions to make informed
          decisions. By analyzing a wide array of data points, from industry
          trends and employment statistics to student interests and program
          offerings, we provide institutions with insights that drive meaningful
          change. These insights empower institutions to enhance resource
          allocation, tailor program structures, and ultimately offer students
          an education that sets them up for a successful future.
        </p>
      </div>

      <div className="p-[4px] md:px-[2rem]">
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          Join Us in Transforming Education:
        </h2>

        <p className="mb-4">
          We invite educational institutions to embark on a transformative
          journey with us. Together, we can reshape the educational landscape,
          ensure that students graduate with skills that matter, and contribute
          to a workforce that's not just educated but empowered.
        </p>

        <p>
          Thank you for sharing in our vision. Together, we're building a future
          where education becomes a dynamic force for change, growth, and
          lifelong success.
        </p>
      </div>

      <div className="p-[4px] md:px-[2rem]">
        <h2 className="text-blacl text-[1.5rem] text-primary font-bold mt-[2rem] ">
          Meet the Team:
        </h2>

        <p>
          Our team is a passionate blend of data scientists, educators, and
          technologists who share a common vision. With expertise spanning from
          data analysis and machine learning to education and career
          development, we are uniquely equipped to create a system that
          transforms the way students approach their education.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center py-[2rem] space-x-[2rem] ">
       
        <Member img="/assets/kev.jpg" major="Computer Science" name="Kelvin Sowah" />
        <Member img="/assets/nec.jpg" major="Computer Science" name="Bentil Shadrack" />
        <Member img="/assets/duchess.jpeg" major="Mathimatics & Statistics" name="Duchess Aseye Avedzi" />
        <Member img="/assets/eugene.jpeg" major="Actuarial Science" name="Eugene Debrah" />
        <Member img="/assets/adelaide.jpeg" major="Mathimatics & Actuarial Science" name="Adelaide Panye Yaboah" />
      </div>
    </div>
  );
};

export default About_Block;

type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Kumaran Sankar",
    fullName: "Kumaran Sankar",
    email: "kumaran2962@gmail.com",
  },
  hero: {
    name: "Kumaran Sankar",
    p: ["Electrical Engineer advancing", "Hybrid Vehicle Technology & Power Systems"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Dedicated Master's student in Electrical Engineering in the United States with a strong focus on power systems, electric machines, control systems, embedded systems, and hybrid/electric vehicle technologies. Over the past 1.5 years, I have deepened my technical expertise through advanced coursework, hands-on projects, and continuous self-driven research aligned with real-world engineering challenges.

I specialize in designing, analyzing, and optimizing electrical and electronic systems from modeling power electronics and motor drives to building smart, efficient, and reliable solutions for electrified and automated applications. My experience includes work on EV subsystems, sensor-driven automation, energy monitoring solutions, and embedded IoT-based designs, giving me a robust blend of hardware and system-level skills.

Driven, collaborative, and execution focused, I thrive in environments where innovation and problem solving create measurable impact. I'm excited to connect with professionals and contribute to advancing the future of clean, intelligent energy and transportation systems.`,
    },
    experience: {
      p: "My educational journey",
      h2: "Education.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my expertise in electrical engineering through innovative solutions spanning power electronics, embedded systems, IoT technology, and electric vehicle systems. Each project demonstrates my ability to apply theoretical knowledge to practical challenges, utilizing advanced tools like MATLAB, Simulink, and embedded microcontrollers. These works reflect my commitment to designing reliable, energy-efficient solutions and excellence in engineering design.`,
    },
  },
};

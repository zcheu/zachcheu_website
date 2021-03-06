import React, { useState } from "react";
import "./App.css";
import ProjectTags from "./components/ProjectTags";
import ProjectPanels from "./components/ProjectPanels";
function Projects() {
  // Tags to dislay
  const projects = [
    {
      name: "Polar Drive",
      description:
        "Android application that uses phone sensors to measure driving efficiency and safety.",
      tags: ["android", "java"],
      imgUri:
        "https://storage.googleapis.com/website-images-zachcheu/polar_drive.png",
      imgAlt: "Polar Drive Logo",
      link: "http://polardrive.weebly.com/",
    },
    {
      name: "Access Period",
      description:
        "Design to solve homeless women's lack of access to menstrual products.",
      tags: ["accessibility", "figma"],
      imgUri:
        "https://storage.googleapis.com/website-images-zachcheu/access_period.png",
      imgAlt: "Access Period Logo",
      link:
        "https://drive.google.com/file/d/1BdXqB_AWHV65n6wVyeDG8A8bVVJvBcge/view?usp=sharing",
    },
    {
      name: "Nature Collections",
      description:
        "Collect data for user study. Record and analyze audio, geolocational, and app activity data collected on Android device.",
      tags: ["python", "java", "android", "gcp"],
      imgUri:
        "https://storage.googleapis.com/website-images-zachcheu/nature_collections.png",
      imgAlt: "Nature Collections Logo",
      link: "https://naturecollectionsapp.ischool.uw.edu/",
    },
    {
      name: "Disaster Data Science Lab",
      description:
        "Clean and Crop large .geotiff satalite imagery before model training.",
      tags: ["python"],
      imgUri: "https://storage.googleapis.com/website-images-zachcheu/ddsl.png",
      imgAlt:
        "Label results of whether a landmark has been disturbed by natural disaster.",
      link: "https://www.ddslab.info/",
    },
    {
      name: "Platformer",
      description:
        "My first android game. Move character using phone sensors to avoid projectiles.",
      tags: ["android", "java", "game"],
      imgUri:
        "https://storage.googleapis.com/website-images-zachcheu/platformer.jpg",
      imgAlt: "Ingame screenshot, missle is flying at player",
      link: "https://github.com/zcheu/Platformer",
    },
    {
      name: "Resource Monitoring",
      description:
        "F5 Networks Internship. Developed a resource monitor system by aggregating and visualizing data.",
      tags: ["python", "docker", "kubernetes", "javascript", "react"],
      imgUri: "https://storage.googleapis.com/website-images-zachcheu/f5.jpg",
      imgAlt: "F5 acquires Nginx",
      link: "https://www.f5.com/",
    },
    {
      name: "Map Data Retention",
      description:
        "Uber ATG Internship. Designed and Implemented a data archival/retrieval system to reduce S3 data storage cost.",
      tags: ["python", "golang", "aws", "sql"],
      imgUri:
        "https://storage.googleapis.com/website-images-zachcheu/uberatg.png",
      imgAlt: "Uber ATG Logo",
      link: "https://www.uber.com/us/en/atg/",
    },
  ];

  var allTags = new Set();
  projects.forEach((p) => {
    p.tags.forEach((t) => {
      allTags.add(t);
    });
  });

  const [activeTags, setActiveTags] = useState(new Set());

  return (
    <div className="Projects leftmargin">
      <ProjectTags
        activeTags={activeTags}
        allTags={allTags}
        updateActiveTags={(tags) => {
          setActiveTags(tags);
        }}
      />
      <ProjectPanels
        activeTags={activeTags}
        allTags={allTags}
        projects={projects}
      />
    </div>
  );
}

export default Projects;

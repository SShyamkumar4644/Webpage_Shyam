/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image6.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Basic Linux Commands with Hands-on Demonstration Part 1",
    description:
      "Created a YouTube video which teaches you basics of linux terminal commands such as ls, pwd, touch, rm, mkdir, cd",
    url: "https://youtu.be/x01mD24HjX0",
  },
  {
    title: "Basic Linux Commands with Hands-on Demonstration Part 2",
    description:
      "Created another YouTube video which teaches you basics of linux terminal commands such as wc and sort",
    url: "https://youtu.be/cJeFbCxWm24",
  },
  {
    title: "Introduction to CyberSecurity",
    description:
      "Created a YouTube video discussing the basics of what is Cybersecurity and its importance.",
    url: "https://youtu.be/8mMrQsx52Wg",
  },
  {
    title: "7 Layers of Network Communication",
    description:
      "Created a YouTube video discussing basics of OSI Model.",
    url: "https://youtu.be/btkR8EXE1jA",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Achievements</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

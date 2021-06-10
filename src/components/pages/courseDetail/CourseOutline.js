import React, { useState } from "react";

import { FaRegWindowMinimize } from "react-icons/fa";
import Accordion from "./Accordion";
import Counter from "../home/Counter";
const CourseOutline = () => {
  return (
    <div className="course__outline">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <h1 className="course__outline__heading">Đề cương khóa học</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <Accordion title="What's It Like Inside Jupiter?">
            It's really hot inside Jupiter! No one knows exactly how hot, but
            scientists think it could be about 43,000°F (24,000°C) near
            Jupiter's center, or core.
          </Accordion>
          <Accordion title="What Is a Black Hole?">
            A black hole is an area of such immense gravity that nothing -- not
            even light -- can escape from it.
          </Accordion>
          <Accordion title="Why is the sky blue?">
            Sunlight reaches Earth's atmosphere and is scattered in all
            directions by all the gases and particles in the air. Blue light is
            scattered more than the other colors because it travels as shorter,
            smaller waves. This is why we see a blue sky most of the time.
          </Accordion>

          <Accordion title="What's It Like Inside Jupiter?">
            It's really hot inside Jupiter! No one knows exactly how hot, but
            scientists think it could be about 43,000°F (24,000°C) near
            Jupiter's center, or core.
          </Accordion>
          <Accordion title="What Is a Black Hole?">
            A black hole is an area of such immense gravity that nothing -- not
            even light -- can escape from it.
          </Accordion>
          <Accordion title="Why is the sky blue?">
            Sunlight reaches Earth's atmosphere and is scattered in all
            directions by all the gases and particles in the air. Blue light is
            scattered more than the other colors because it travels as shorter,
            smaller waves. This is why we see a blue sky most of the time.
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CourseOutline;

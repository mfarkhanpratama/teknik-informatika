import React from "react";

const SectionComponent = ({ paragraphs, listItems }) => {
  return (
    <div className="section p-4">
      {paragraphs &&
        paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-4">
            {paragraph}
          </p>
        ))}
      <ul className="list-disc mt-4 ml-6">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionComponent;

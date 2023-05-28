import React from "react";
import SubLatar from "../../components/sublatar";

function Video() {
  return (
    <div>
      <SubLatar judul={"Video"} />
      <iframe
        title="video"
        src="https://www.youtube.com/embed/ctDxbww6HsE"
        width="100%"
        height="700"
        frameborder="0"
        className="w-1600px h-100% mx-auto my-[100px] px-[20px]"
      ></iframe>
    </div>
  );
}

export default Video;

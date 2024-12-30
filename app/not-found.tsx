import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen mt-[15rem] text-center">
      <p className="font-bold text-3xl">
        Sorry. The Resource you are looking for is...
      </p>
      <Image
        className="rounded-full mx-auto mt-20"
        src="https://media.giphy.com/media/qHXSYtyW0kANmLLzcG/giphy.gif"
        alt="not found"
        height={800}
        width={800}
      />
    </div>
  );
};

export default NotFound;

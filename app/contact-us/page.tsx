import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { div } from "motion/react-client";
import React from "react";
import { FaBusinessTime } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex min-h-screen flex-col gap-20 md:justify-around md:flex-row mt-[15rem] ">
      <Card className="w-full md:w-[40%] p-10 max-h-[500px]">
        <div className="font-extrabold text-3xl mt-[5rem]">Get in Touch.</div>
        <div className="[&>*]:mt-5">
          <p>
            Have questions, need support, or want to learn more about our
            templates? We're here to help!
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a href="mailto:kquach229@gmail.com">kquach229@gmail.com</a>
          </p>
          <p>
            {" "}
            <span className="font-bold">Phone:</span> 1-917-257-0115
          </p>
        </div>
      </Card>
      <Card className="w-full md:w-[40%] p-10 max-h-[500px]">
        <span className="mx-auto w-full text-right flex items-center h-full justify-between">
          <FaBusinessTime size={50} />
          <div className="flex-1">
            <p className="font-bold">Hours of Operation</p>
            <p>Mon - Fri: 8AM - 8PM</p>
            <p>Sat and Sun: 10AM-11PM</p>
          </div>
        </span>
      </Card>
    </div>
  );
};

export default ContactUs;

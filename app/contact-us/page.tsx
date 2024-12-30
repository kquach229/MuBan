import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-around mt-[15rem] p-[2rem]">
      <Card className="w-[40%] p-10 max-h-[500px]">
        <div className="font-extrabold text-3xl">Get in Touch.</div>
        <div className="mt-5 [&>*]:mt-3">
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
      <Card className="w-[40%] p-10 max-h-[500px]">
        <span className="mx-auto w-full text-right">
          <p className="font-bold">Hours of Operation</p>
          <p>Mon - Fri: 8AM - 8PM</p>
          <p>Sat and Sun: 10AM-11PM</p>
        </span>
      </Card>
    </div>
  );
};

export default ContactUs;

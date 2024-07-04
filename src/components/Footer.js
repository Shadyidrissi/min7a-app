import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" font-sans dark:bg-gray-900" style={{backgroundColor:'#071952'}}>
      <div className="container px-6 py-12 mx-auto">
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div className="footer-iteam-quick-link">
            <p className="font-semibold text-gray-800 dark:text-white">
              Quick Link
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                href="#"
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
              >
                Who We Are
              </Link>
              <Link
                href=""
                className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="footer-iteam-quick-link" style={{ width: "70%" }}>
            <p
              className="font-semibold text-gray-800 dark:text-white"
              style={{ fontWeight: "800" }}
            >
              BeGo Company
            </p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className="text-gray-600 transition-colors duration-300 dark:text-gray-300">
                esetting industry. Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lo
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="130"
              height="110"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="130"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4 hover:cursor-pointer">
            <Link href="">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
            </Link>
            <Link href="">
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
            </Link>
            <Link href="">
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
            </Link>
            <Link href="">
              <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                className=""
                width="30"
                height="30"
                alt="gt"
              />
            </Link>

            <Link href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
            </Link>
          </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-white">
          © 2024 BeGo Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

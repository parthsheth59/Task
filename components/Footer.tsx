"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { API_ENDPOINTS } from "@/constants";

type FooterData = {
  address: string;
  contact_no: string;
  contact_mail: string;
  inquiry_mail: string;
};

const FOOTER_LINKS = [
  { label: "About", url: "/about" },
  { label: "Blogs", url: "/blogs" },
  { label: "Contact", url: "/contact" },
  { label: "Services", url: "/services" },
];

const Footer = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.SETTINGS);
        const result = await response.json();

        if (result.success) {
          setFooterData(result.data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (err) {
        setError("Error fetching footer details.");
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  return (
    <footer className="bg-[#E8F3F1] py-12 mt-7">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2 border-r border-gray-300 pr-10">
          <p className="text-gray-700 text-lg font-medium leading-relaxed">
            Tagline will go here. Lorem ipsum d oler sit amet...
          </p>
          {footerData && (
            <Link
              href={`mailto:${footerData.inquiry_mail}`}
              className="text-blue-500 text-lg block mt-2"
            >
              {footerData.inquiry_mail}
            </Link>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:w-1/2">
          {loading ? (
            <p>Loading footer details...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div>
                <h4 className="text-gray-900 font-semibold text-lg mb-2">
                  Address
                </h4>
                <p className="text-gray-600">{footerData?.address}</p>
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold text-lg mb-2">
                  Contacts
                </h4>
                <Link
                  href={`mailto:${footerData?.contact_mail}`}
                  className="text-gray-600 block"
                >
                  {footerData?.contact_mail}
                </Link>
                <p className="text-gray-600">{footerData?.contact_no}</p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 pt-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image
              src="/Bitmaplogo.png"
              alt="Gecko Accountancy Logo"
              width={150}
              height={40}
            />
          </div>

          <div className="flex flex-wrap justify-center space-x-6">
            {FOOTER_LINKS.map((link, index) => (
              <Link key={index} href={link.url} className="hover:text-gray-900">
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-gray-600 text-sm mt-4 md:mt-0">
            © 2022. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

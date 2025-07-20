"use client";
import React, { useState } from "react";
import { Grid, List, MoveLeft, CircleDot } from "lucide-react";
import Section     from "@/components/section";
import Breadcrumb  from "@/components/breadcrumb";
import Button      from "@/components/button";
import Image       from "next/image";
import { getBusinessSolutions } from "@/components/services";
import type { ServiceIntg } from "@/types/globel";
import { useRouter } from "next/navigation";

/* ---------- Service page ---------- */
const Service = () => {
  /* which card is open; null = none */
  const [openId,   setOpenId]   = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
const navigate = useRouter()
  const services = getBusinessSolutions();          // call once

  /* === Card Components =================================================== */
  const GridItem = ({ service }: { service: ServiceIntg }) => {
    const isOpen = openId === service.id;            // only this card?
    return (
      <div className="bg-white relative rounded-lg shadow-sm hover:shadow-md
                      transition-shadow duration-300 overflow-hidden">
        {/* thumbnail */}
        <div className="relative h-56">
          <Image src={service.image} alt={service.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="h-full w-full object-cover"/>
        </div>

        {/* summary */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{service.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{service.define}</p>

          <button
            onClick={() => setOpenId(service.id)}
            className="text-primary text-[10px] mt-1 cursor-pointer"
          >
            See more …
          </button>

          <Button
            className="bg-primary px-5 py-1.5 !text-[13px] mt-3"
            onClick={() => navigate.push('/contact-us')}
          >
            Get an Enquiry
          </Button>
        </div>

        {/* sliding panel */}
        <div
          className={`absolute inset-0 z-20 bg-white overflow-y-auto
                      transform transition-transform duration-300 ease-in-out
                      ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}
        >
          <button
            onClick={() => setOpenId(null)}
            className="flex items-center gap-2 mt-3 ml-3 text-primary cursor-pointer"
          >
            <MoveLeft strokeWidth={1.75} /> <span>{service.name}</span>
          </button>

          <p className="mt-6 ml-3 text-[13px] font-medium">Key Features</p>

          <ul className="px-3 pb-6">
            {service.key_features.map((f, i) => (
              <li key={i} className="grid grid-cols-8 gap-2 my-3 text-[12px]">
                <CircleDot className="col-span-1 mt-1 text-secondary" size={12}/>
                <span className="col-span-7 text-slate-600">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const ListItem = ({ service }: { service: ServiceIntg }) => (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md
                    transition-shadow duration-300 overflow-hidden mb-6">
      <div className="flex">
        <div className="relative w-72 h-48 shrink-0">
          <Image src={service.image} alt={service.name} fill className="object-cover"/>
        </div>

        <div className="flex-1 p-6">
          <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 text-[13px]">
            {service.define}
          </p>
          <Button className="bg-primary px-5 py-1.5 !text-[13px]"
                  onClick={() => navigate.push('/contact-us')}>
            Get an Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
  /* ======================================================================= */

  return (
    <>
      <Breadcrumb
        name="Services We Provide"
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* header */}
          <div className="flex flex-col sm:flex-row sm:items-center
                          sm:justify-between mb-8">
            <h1 className="text-xl">
              We found <span className="font-semibold">{services.length}</span>{" "}
              services available for you
            </h1>

            {/* view toggle */}
            {/* <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">See</span>
              <div className="flex bg-white border rounded-lg p-1">
                <button
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-secondary text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid size={16} />
                </button>
                <button
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-secondary text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setViewMode("list")}
                >
                  <List size={16} />
                </button>
              </div>
            </div> */}
          </div>

          {/* list or grid */}
          {viewMode === "list" ? (
            services.map(s => <ListItem key={s.id} service={s} />)
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2
                            lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map(s => <GridItem key={s.id} service={s} />)}
            </div>
          )}
        </div>
      </Section>
    </>
  );
};

export default Service;

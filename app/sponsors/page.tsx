"use client";

import { useState, useEffect } from "react";
import { SponsorsPage } from "@/components/sponsors-page";
import Loader from "@/components/Loader";

export default function Sponsors() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return loader ? <Loader /> : <SponsorsPage />;
}

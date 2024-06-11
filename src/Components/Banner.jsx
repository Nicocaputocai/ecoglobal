import React, { useEffect, useState } from "react";
import { Button, Container, Image, Navbar } from "react-bootstrap";
import Banner2 from "../assets/Banner.png"

export const Banner = () => {
  return (
    <div style={{ width: "100vw", marginBottom: "20px" }}>
    <Image src={Banner2} alt="Banner" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  </div>
  );
};
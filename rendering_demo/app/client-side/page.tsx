"use client";
import React from "react";
import Slider from "react-slick";
import { useTheme } from "../components/theme-provider";
import { clientOnly } from "../utils/client-utils";


export default function SimpleSlider() {
    const Theme = useTheme();
    const result = clientOnly()

  return (
    <div>
        <h1 style={{color: Theme.colors.primary}}>Hello World!! client {result}</h1>
    </div>
  );
}

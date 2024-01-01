/** @format */

import React from "react";
import { CompactRestaurant } from "../../restaurents/components/CompactRestaurent.component";
export default function MapCallout({ restaurent }) {
  return <CompactRestaurant isMap restaurent={restaurent} />;
}

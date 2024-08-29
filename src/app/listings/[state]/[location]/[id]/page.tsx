"use client";

import React, { useEffect, Suspense, useState } from "react";
import { useParams } from "next/navigation";

import RestLandingImage from "@/components/RestaurantDetails/restLandingImage";
import RestDetails from "@/components/RestaurantDetails/restDetails";
import RestaurantMap from "@/components/Accessory/RestaurantMap";

const Page = () => { 

    const params = useParams();

    console.log(params);

    const id = Array.isArray(params.id)
    ? decodeURIComponent(params.id[0])
    : decodeURIComponent(params.id || "");

    console.log(id);

    const [restaurantId, setRestaurantId] = useState(id);

    return(
        <div>
            <RestLandingImage />
            <RestDetails />
        </div>
    );
}

export default Page;
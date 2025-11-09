import { View } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";

interface PropertyListingProps {
  listings: {
    title: string;
    location: string;
    price: string;
    image: any;
  }[];
}

const PropertyListing = ({ listings }: PropertyListingProps) => {
  return (
    <View>
      {listings.map((item, index) => (
        <PropertyListingCard
          key={index}
          title={item.title}
          location={item.location}
          price={item.price}
          image={item.image}
        />
      ))}
    </View>
  );
};

export default PropertyListing;
import { View, Text } from "react-native";
import PropertyListingCard from "./common/PropertyListingCard";
import { useState } from "react";
import { PropertListing, PropertyListingProps } from "../interfaces";

const PropertyListing = ({ listings }: PropertListing) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;

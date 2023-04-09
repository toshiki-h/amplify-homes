/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function HomeCard(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="4285px"
      height="2465px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "HomeCard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="128px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="192px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1896px"
        height="743px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="1638px"
        left="247px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${home?.address}${""}`}
        {...getOverrideProps(
          overrides,
          "Hello everyone I hope you will be doing well!"
        )}
      ></Text>
      <Image
        width="1920px"
        height="1280px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="180px"
        left="223px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={home?.image_url}
        {...getOverrideProps(overrides, "IMG_4644 1")}
      ></Image>
    </View>
  );
}

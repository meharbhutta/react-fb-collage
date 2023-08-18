/* eslint-disable import/no-anonymous-default-export */
import { CSSProperties } from "react";
import { StaticStyle } from "./fb-collage.type";

export default (
  width: number,
  height: number,
  borderRadius: number = 20,
  spacing: number = 10
): StaticStyle => {
  return {
    VIEW: {
      width: width,
      height: height,
      paddingRight: spacing,
      paddingTop: spacing,
      flexDirection: "row",
      display: "flex",
    } as CSSProperties,
    FLEX: {
      flex: 1,
      display: "flex",
    } as CSSProperties,
    CONTAINER: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
    } as CSSProperties,
    COMM_BUTTON: {
      display: "flex",
      backgroundColor: "red",
      position: "relative",
      overflow: "hidden",
      cursor: 'pointer',
      borderRadius: borderRadius,
      marginLeft: spacing,
      marginBottom: spacing,
    },
    BUTTON: (index, length) => {
      if (index === 0) {
        return {
          flex: 1,
        } as CSSProperties;
      } else if (index === 1 && length === 2) {
        return {
          width: width / 2 - spacing,
          height: height - spacing,
        } as CSSProperties;
      } else if (length === 3) {
        return {
          width: width / 2 - spacing,
          height: height / 2 - spacing,
        } as CSSProperties;
      } else if (length === 4) {
        return {
          width: width / 2 - spacing,
          height: height / 3 - spacing,
        } as CSSProperties;
      } else if (length > 5) {
        return {
          width: width / 4 - 10,
          height: height / 2 - 10,
        } as CSSProperties;
      }
      return {} as CSSProperties;
    },
    IMAGE: (index, length) => {
      if (index === 0) {
        return {
          width: "100%",
          height: "100%",
        } as CSSProperties;
      } else if (index === 1 && length === 2) {
        return {
          width: width / 2 - spacing,
          height: height - spacing,
        } as CSSProperties;
      } else if (length === 3) {
        return {
          width: width / 2 - spacing,
          height: height / 2 - spacing,
        } as CSSProperties;
      } else if (length === 4) {
        return {
          width: width / 2 - spacing,
          height: height / 3 - spacing,
        } as CSSProperties;
      } else if (length >= 5) {
        return {
          width: width / 4 - 10,
          height: height / 2 - 10,
        } as CSSProperties;
      }
      return {} as CSSProperties;
    },
    OVERLAY: {
      zIndex: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#0000009d",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    } as CSSProperties,
    TEXT: {
      fontSize: 40,
      zIndex: 9,
      fontWeight: "bold",
      color: "white",
    } as CSSProperties,
  };
};

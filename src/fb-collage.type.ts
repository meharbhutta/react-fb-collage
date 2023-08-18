import { CSSProperties } from "react";

export type FuncStyle = {
  (index: number, length: number): CSSProperties;
};

export type StaticStyle = {
  [x: string]: CSSProperties | FuncStyle;
};

type ImageURISource = string;

export type ImageSource = ImageURISource | undefined;

export class Props {
  images: ImageSource[] = [];

  height: number = 200;

  width: number = 357;

  borderRadius: number = 12;

  spacing: number = 10;

  style?: CSSProperties;

  overlayStyle?: CSSProperties;

  textStyle?: CSSProperties;

  imageOnClick?: { (index: number, images: any[]): void };
}

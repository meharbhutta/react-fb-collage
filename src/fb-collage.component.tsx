import * as React from "react";
import { ImageSource, FuncStyle, StaticStyle } from "./fb-collage.type";
import staticStyles from "./fb-collage.style";

export default class FBCollage extends React.Component<any> {
  private styles: StaticStyle;

  static defaultProps = {};

  constructor(props: any) {
    super(props);
    this.styles = staticStyles(
      props.width,
      props.height,
      props.borderRadius,
      props.spacing
    );
  }

  __renderImage = (
    image: ImageSource,
    index: number,
    length: number = 0
  ) => {
    const {
      images,
      imageOnClick,
      textStyle: textStyleOverride,
      overlayStyle: overlayStyleOverride,
    } = this.props;

    const check = index === 4 && images.length > 5,
    text = check ? images.length - 5 : undefined

    return (
      <div
        style={{
          ...(this.styles.COMM_BUTTON as React.CSSProperties),
          ...(this.styles.BUTTON as FuncStyle)(index, length),
        }}
        onClick={() => imageOnClick && imageOnClick(index, images)}
        key={`image${index}`}
        role='button'
      >
        <img
          style={(this.styles.IMAGE as FuncStyle)(index, length)}
          src={image}
          alt="no logo"
        />
        {check && (
          <div
            style={{
              ...(this.styles.OVERLAY as React.CSSProperties),
              ...overlayStyleOverride,
            }}
          >
            <div
              style={{
                ...(this.styles.TEXT as React.CSSProperties),
                ...textStyleOverride,
              }}
            >
              {"+" + text}
            </div>
          </div>
        )}
      </div>
    );
  };

  __renderImages = (images: ImageSource[]) => {
    const length = images.length,
      check = length > 4,
      childs = check ? images.slice(0, 4) : images;
    return (
      <div style={this.styles.CONTAINER as React.CSSProperties}>
        {childs.map((image, index) => {
          return this.__renderImage(image, index + 1, length + 1);
        })}
      </div>
    );
  };

  __renderContent = (images: ImageSource[]) => {
    return (
      <>
        <div style={this.styles.FLEX as React.CSSProperties}>
          {this.__renderImage(images[0], 0, 1)}
        </div>
        {images.length > 1 && this.__renderImages(images.slice(1))}
      </>
    );
  };

  render() {
    const { images, style: styleOverride } = this.props;

    return (
      <div
        style={{
          ...this.styles.VIEW,
          ...styleOverride,
        }}
      >
        {this.__renderContent(images)}
      </div>
    );
  }
}
